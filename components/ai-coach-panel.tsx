"use client"

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send, Bot, User, Sparkles } from 'lucide-react'
import { useAccessibility } from '@/lib/accessibility-context'
import { cn } from '@/lib/utils'

interface AICoachPanelProps {
  moduleSlug: string
  moduleTitle: string
}

function getUIMessageText(msg: { parts?: Array<{ type: string; text?: string }> }): string {
  if (!msg.parts || !Array.isArray(msg.parts)) return ''
  return msg.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('')
}

export function AICoachPanel({ moduleSlug, moduleTitle }: AICoachPanelProps) {
  const { settings, speak } = useAccessibility()
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { moduleSlug },
    }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  // Speak new assistant messages
  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage?.role === 'assistant' && status === 'ready') {
      const text = getUIMessageText(lastMessage)
      if (text) speak(text)
    }
  }, [messages, status, speak])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  const suggestedQuestions = [
    "What's the main concept here?",
    "Can you give me an example?",
    "How does this apply in practice?",
  ]

  return (
    <Card className={cn(
      "flex flex-col h-full",
      settings.highContrast && "border-2 border-foreground"
    )}>
      <div className="flex items-center gap-2 p-4 border-b">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-sm">AI Coach</h3>
          <p className="text-xs text-muted-foreground">Ask about: {moduleTitle}</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        {messages.length === 0 ? (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div 
                className="text-sm text-muted-foreground"
                style={{ fontSize: settings.fontSize }}
              >
                <p className="mb-3">
                  Hi! I&apos;m your AI coach for this lesson. Ask me anything about the content, and I&apos;ll help you understand it better.
                </p>
                <p className="text-xs font-medium text-foreground mb-2">Try asking:</p>
                <div className="flex flex-col gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        sendMessage({ text: q })
                      }}
                      className="text-left text-xs px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => {
              const text = getUIMessageText(message)
              return (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === 'user' && "flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full shrink-0",
                    message.role === 'user' 
                      ? "bg-secondary" 
                      : "bg-primary/10"
                  )}>
                    {message.role === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div 
                    className={cn(
                      "text-sm rounded-lg px-3 py-2 max-w-[85%]",
                      message.role === 'user' 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted"
                    )}
                    style={{ fontSize: settings.fontSize }}
                  >
                    {text}
                  </div>
                </div>
              )
            })}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            className="flex-1"
            style={{ fontSize: settings.fontSize }}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </Card>
  )
}
