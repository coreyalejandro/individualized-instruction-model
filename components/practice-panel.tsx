"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, Lightbulb, RefreshCw, Loader2 } from 'lucide-react'
import { useAccessibility } from '@/lib/accessibility-context'
import { cn } from '@/lib/utils'

interface Question {
  sentence: string
  answer: string
  hint: string
}

interface PracticePanelProps {
  moduleSlug: string
}

export function PracticePanel({ moduleSlug }: PracticePanelProps) {
  const { settings, speak } = useAccessibility()
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuestions = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/practice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleSlug }),
      })
      const data = await res.json()
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate questions')
      }
      
      // Handle both { questions: [...] } and direct array formats
      const questionList = Array.isArray(data) ? data : (data.questions || [])
      if (questionList.length === 0) {
        throw new Error('No questions generated')
      }
      
      setQuestions(questionList)
      setCurrentIndex(0)
      setScore(0)
      setUserAnswer('')
      setShowHint(false)
      setResult(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load practice questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [moduleSlug])

  const currentQuestion = questions[currentIndex]
  const isComplete = currentIndex >= questions.length && questions.length > 0

  const checkAnswer = () => {
    if (!currentQuestion) return
    
    const correct = userAnswer.toLowerCase().trim() === currentQuestion.answer.toLowerCase().trim()
    setResult(correct ? 'correct' : 'incorrect')
    
    if (correct) {
      setScore(s => s + 1)
      speak('Correct!')
    } else {
      speak(`Incorrect. The answer was: ${currentQuestion.answer}`)
    }
  }

  const nextQuestion = () => {
    setCurrentIndex(i => i + 1)
    setUserAnswer('')
    setShowHint(false)
    setResult(null)
  }

  const resetPractice = () => {
    fetchQuestions()
  }

  if (loading) {
    return (
      <Card className={cn(
        "h-full flex items-center justify-center",
        settings.highContrast && "border-2 border-foreground"
      )}>
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p className="text-sm">Generating practice questions...</p>
        </div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={cn(
        "h-full flex items-center justify-center",
        settings.highContrast && "border-2 border-foreground"
      )}>
        <div className="flex flex-col items-center gap-3 text-center p-4">
          <p className="text-sm text-destructive">{error}</p>
          <Button onClick={fetchQuestions} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </Card>
    )
  }

  if (isComplete) {
    return (
      <Card className={cn(
        "h-full flex flex-col",
        settings.highContrast && "border-2 border-foreground"
      )}>
        <CardHeader>
          <CardTitle className="text-lg">Practice Complete!</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {score}/{questions.length}
            </div>
            <p className="text-muted-foreground" style={{ fontSize: settings.fontSize }}>
              {score === questions.length 
                ? "Perfect score! Great understanding!"
                : score >= questions.length / 2 
                  ? "Good job! Keep practicing!"
                  : "Keep learning, you'll get there!"}
            </p>
          </div>
          <Button onClick={resetPractice} className="mt-4">
            <RefreshCw className="w-4 h-4 mr-2" />
            Practice Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn(
      "h-full flex flex-col",
      settings.highContrast && "border-2 border-foreground"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Practice</CardTitle>
          <Badge variant="secondary">
            {currentIndex + 1} / {questions.length}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {currentQuestion && (
          <div className="flex-1 flex flex-col">
            <div className="flex-1">
              <p 
                className="text-foreground mb-6 leading-relaxed"
                style={{ fontSize: settings.fontSize }}
              >
                {currentQuestion.sentence}
              </p>

              {showHint && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 mb-4">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    {currentQuestion.hint}
                  </p>
                </div>
              )}

              {result && (
                <div className={cn(
                  "flex items-center gap-2 p-3 rounded-lg mb-4",
                  result === 'correct' 
                    ? "bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900"
                    : "bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900"
                )}>
                  {result === 'correct' ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                  <p className={cn(
                    "text-sm",
                    result === 'correct' ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
                  )}>
                    {result === 'correct' 
                      ? "Correct!" 
                      : `Incorrect. The answer was: ${currentQuestion.answer}`}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer..."
                  disabled={result !== null}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !result) checkAnswer()
                  }}
                  style={{ fontSize: settings.fontSize }}
                />
              </div>
              
              <div className="flex gap-2">
                {result === null ? (
                  <>
                    <Button 
                      onClick={checkAnswer} 
                      disabled={!userAnswer.trim()}
                      className="flex-1"
                    >
                      Check Answer
                    </Button>
                    {!showHint && (
                      <Button 
                        variant="outline" 
                        onClick={() => setShowHint(true)}
                      >
                        <Lightbulb className="w-4 h-4" />
                      </Button>
                    )}
                  </>
                ) : (
                  <Button onClick={nextQuestion} className="flex-1">
                    {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
