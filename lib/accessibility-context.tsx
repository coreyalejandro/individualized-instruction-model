"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface AccessibilitySettings {
  fontSize: number
  highContrast: boolean
  dyslexicFont: boolean
  narrationEnabled: boolean
}

interface AccessibilityContextType {
  settings: AccessibilitySettings
  setFontSize: (size: number) => void
  toggleHighContrast: () => void
  toggleDyslexicFont: () => void
  toggleNarration: () => void
  speak: (text: string) => void
  stopSpeaking: () => void
  isSpeaking: boolean
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 16,
  highContrast: false,
  dyslexicFont: false,
  narrationEnabled: false,
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const setFontSize = useCallback((size: number) => {
    setSettings(prev => ({ ...prev, fontSize: Math.min(24, Math.max(12, size)) }))
  }, [])

  const toggleHighContrast = useCallback(() => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))
  }, [])

  const toggleDyslexicFont = useCallback(() => {
    setSettings(prev => ({ ...prev, dyslexicFont: !prev.dyslexicFont }))
  }, [])

  const toggleNarration = useCallback(() => {
    setSettings(prev => ({ ...prev, narrationEnabled: !prev.narrationEnabled }))
  }, [])

  const speak = useCallback((text: string) => {
    if (!settings.narrationEnabled) return
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }, [settings.narrationEnabled])

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }, [])

  return (
    <AccessibilityContext.Provider value={{
      settings,
      setFontSize,
      toggleHighContrast,
      toggleDyslexicFont,
      toggleNarration,
      speak,
      stopSpeaking,
      isSpeaking
    }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
