"use client"

import { useAccessibility } from '@/lib/accessibility-context'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Eye, Type, Volume2, VolumeX } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function AccessibilityToolbar() {
  const {
    settings,
    setFontSize,
    toggleHighContrast,
    toggleDyslexicFont,
    toggleNarration,
    isSpeaking,
    stopSpeaking
  } = useAccessibility()

  return (
    <TooltipProvider>
      <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/50 border">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setFontSize(settings.fontSize - 2)}
              disabled={settings.fontSize <= 12}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease font size</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Decrease font size</TooltipContent>
        </Tooltip>

        <span className="text-xs font-mono w-8 text-center text-muted-foreground">
          {settings.fontSize}
        </span>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setFontSize(settings.fontSize + 2)}
              disabled={settings.fontSize >= 24}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase font size</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Increase font size</TooltipContent>
        </Tooltip>

        <div className="w-px h-6 bg-border mx-1" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={settings.highContrast ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={toggleHighContrast}
            >
              <Eye className="h-4 w-4" />
              <span className="sr-only">Toggle high contrast</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>High contrast mode</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={settings.dyslexicFont ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={toggleDyslexicFont}
            >
              <Type className="h-4 w-4" />
              <span className="sr-only">Toggle dyslexic-friendly font</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Dyslexic-friendly font</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={settings.narrationEnabled ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => {
                if (isSpeaking) {
                  stopSpeaking()
                }
                toggleNarration()
              }}
            >
              {settings.narrationEnabled ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle narration</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {settings.narrationEnabled ? 'Narration on' : 'Narration off'}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
