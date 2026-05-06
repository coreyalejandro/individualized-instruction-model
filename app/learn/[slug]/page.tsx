"use client"

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { getModuleBySlug, getNextModule, getPreviousModule, modules } from '@/lib/course-data'
import { AccessibilityProvider, useAccessibility } from '@/lib/accessibility-context'
import { AccessibilityToolbar } from '@/components/accessibility-toolbar'
import { AICoachPanel } from '@/components/ai-coach-panel'
import { PracticePanel } from '@/components/practice-panel'
import { LessonContent } from '@/components/lesson-content'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Home, BookOpen, MessageSquare, PenTool } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

function LearnPageContent() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const module = getModuleBySlug(slug)
  const { settings } = useAccessibility()
  const [activeTab, setActiveTab] = useState('lesson')

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-xl font-bold mb-4">Module not found</h1>
          <Link href="/">
            <Button>
              <Home className="w-4 h-4 mr-2" />
              Back to Course
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  const prevModule = getPreviousModule(module.id)
  const nextModule = getNextModule(module.id)

  return (
    <div 
      className={cn(
        "min-h-screen bg-background",
        settings.highContrast && "bg-black text-white",
        settings.dyslexicFont && "font-mono"
      )}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Course
                </Button>
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-medium truncate">
                Module {module.id}: {module.title}
              </span>
            </div>
            <AccessibilityToolbar />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Lesson Area - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <Card className={cn(
              "p-6",
              settings.highContrast && "border-2 border-foreground"
            )}>
              <LessonContent module={module} />
            </Card>

            {/* Module Navigation */}
            <div className="flex items-center justify-between">
              {prevModule ? (
                <Button
                  variant="outline"
                  onClick={() => router.push(`/learn/${prevModule.slug}`)}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {prevModule.title}
                </Button>
              ) : (
                <div />
              )}
              
              {nextModule ? (
                <Button
                  onClick={() => router.push(`/learn/${nextModule.slug}`)}
                >
                  {nextModule.title}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Link href="/">
                  <Button variant="default">
                    Complete Course
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Side Panel - Coach & Practice */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="h-[calc(100vh-8rem)]">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="lesson" className="text-xs">
                    <MessageSquare className="w-3 h-3 mr-1.5" />
                    AI Coach
                  </TabsTrigger>
                  <TabsTrigger value="practice" className="text-xs">
                    <PenTool className="w-3 h-3 mr-1.5" />
                    Practice
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="lesson" className="h-[calc(100%-3rem)] mt-0">
                  <AICoachPanel moduleSlug={slug} moduleTitle={module.title} />
                </TabsContent>
                <TabsContent value="practice" className="h-[calc(100%-3rem)] mt-0">
                  <PracticePanel moduleSlug={slug} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Module Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {modules.map((m) => (
            <Link
              key={m.id}
              href={`/learn/${m.slug}`}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                m.id === module.id 
                  ? "bg-primary" 
                  : "bg-muted hover:bg-muted-foreground/50"
              )}
              title={m.title}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default function LearnPage() {
  return (
    <AccessibilityProvider>
      <LearnPageContent />
    </AccessibilityProvider>
  )
}
