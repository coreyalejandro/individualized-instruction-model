"use client"

import { useAccessibility } from '@/lib/accessibility-context'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Volume2, VolumeX, Clock, Target, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Module } from '@/lib/course-data'

interface LessonContentProps {
  module: Module
}

export function LessonContent({ module }: LessonContentProps) {
  const { settings, speak, stopSpeaking, isSpeaking } = useAccessibility()

  const handleNarrate = () => {
    if (isSpeaking) {
      stopSpeaking()
    } else {
      speak(module.transcript)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline">Module {module.id}</Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {module.duration}
              </Badge>
            </div>
            <h1 
              className={cn(
                "text-2xl font-bold text-foreground text-balance leading-tight",
                settings.dyslexicFont && "tracking-wider"
              )}
              style={{ fontSize: settings.fontSize + 8 }}
            >
              {module.title}
            </h1>
            <p 
              className="text-muted-foreground text-pretty leading-relaxed"
              style={{ fontSize: settings.fontSize }}
            >
              {module.description}
            </p>
          </div>
          {settings.narrationEnabled && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleNarrate}
              className="shrink-0"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-4 h-4 mr-2" />
                  Stop
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 mr-2" />
                  Listen
                </>
              )}
            </Button>
          )}
        </div>

        {/* Key Concepts */}
        <div className="flex flex-wrap gap-2">
          {module.concepts.map((concept, i) => (
            <Badge key={i} variant="secondary" className="font-medium">
              {concept}
            </Badge>
          ))}
        </div>
      </div>

      {/* Learning Objectives Card */}
      <Card className={cn(
        "p-4 border-l-4 border-l-primary bg-primary/5",
        settings.highContrast && "border-l-foreground"
      )}>
        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-foreground">Learning Objectives</h3>
            <ul className="space-y-1.5">
              {module.learningObjectives.map((objective, i) => (
                <li 
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  style={{ fontSize: settings.fontSize - 2 }}
                >
                  <span className="text-primary font-medium">{i + 1}.</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <div 
        className={cn(
          "prose prose-slate dark:prose-invert max-w-none",
          settings.highContrast && "prose-strong:text-foreground prose-headings:text-foreground",
          settings.dyslexicFont && "tracking-wide"
        )}
        style={{ fontSize: settings.fontSize }}
      >
        {module.transcript.split('\n\n').map((paragraph, i) => (
          <p 
            key={i} 
            className={cn(
              "mb-5 leading-relaxed",
              settings.highContrast && "text-foreground",
              settings.dyslexicFont && "leading-loose"
            )}
            style={{ lineHeight: settings.dyslexicFont ? 2 : 1.75 }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Key Takeaways Card */}
      <Card className={cn(
        "p-4 border-l-4 border-l-amber-500 bg-amber-500/5",
        settings.highContrast && "border-l-foreground bg-foreground/5"
      )}>
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-foreground">Key Takeaways</h3>
            <ul className="space-y-1.5">
              {module.keyTakeaways.map((takeaway, i) => (
                <li 
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  style={{ fontSize: settings.fontSize - 2 }}
                >
                  <span className="text-amber-500 font-bold">-</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
