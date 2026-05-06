"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Play, BookOpen, Target, Zap, BarChart3, Repeat } from "lucide-react"
import { modules as courseModules } from "@/lib/course-data"

const moduleIcons = {
  1: BookOpen,
  2: Target,
  3: BarChart3,
  4: Zap,
  5: Repeat,
}

const modules = courseModules.map(m => ({
  ...m,
  icon: moduleIcons[m.id as keyof typeof moduleIcons] || BookOpen,
}))

export default function CoursePage() {
  const router = useRouter()
  const [completedModules, setCompletedModules] = useState<number[]>([])
  const [currentModule, setCurrentModule] = useState<number | null>(null)

  // Load completed modules from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completedModules')
    if (saved) {
      setCompletedModules(JSON.parse(saved))
    }
  }, [])

  const toggleModuleComplete = (moduleId: number) => {
    setCompletedModules((prev) => {
      const updated = prev.includes(moduleId) 
        ? prev.filter((id) => id !== moduleId) 
        : [...prev, moduleId]
      localStorage.setItem('completedModules', JSON.stringify(updated))
      return updated
    })
  }

  const startModule = (moduleId: number) => {
    const module = courseModules.find(m => m.id === moduleId)
    if (module) {
      router.push(`/learn/${module.slug}`)
    }
  }

  const progressPercentage = (completedModules.length / modules.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Professional Development</Badge>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-balance">
            Production-Grade AI Agent Engineering
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
            Transform experimental prototypes into production-ready AI systems. Learn the disciplined practices that separate amateur implementations from enterprise-grade agent architectures.
          </p>

          {/* Progress Overview */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Course Progress</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {completedModules.length}/{modules.length} modules
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <Badge variant="secondary" className="mb-4">
            <Clock className="w-4 h-4 mr-1" />
            48 minutes total
          </Badge>
        </div>

        {/* Course Modules */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon
            const isCompleted = completedModules.includes(module.id)
            const isCurrent = currentModule === module.id

            return (
              <Card
                key={module.id}
                className={`relative transition-all duration-200 hover:shadow-lg ${
                  isCurrent ? "ring-2 ring-blue-500 shadow-lg" : ""
                } ${isCompleted ? "bg-green-50 dark:bg-green-950/20" : ""}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isCompleted ? "bg-green-100 dark:bg-green-900/30" : "bg-blue-100 dark:bg-blue-900/30"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            isCompleted ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"
                          }`}
                        />
                      </div>
                      <div>
                        <Badge variant="outline" className="text-xs">
                          Module {module.id}
                        </Badge>
                      </div>
                    </div>
                    {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
                  </div>

                  <CardTitle className="text-lg text-balance">{module.title}</CardTitle>
                  <CardDescription className="text-pretty">{module.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Key Concepts */}
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Key Concepts:</h4>
                      <div className="flex flex-wrap gap-1">
                        {module.concepts.map((concept, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {concept}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {module.duration}
                      </span>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={isCurrent ? "default" : "outline"}
                          onClick={() => startModule(module.id)}
                          className="text-xs"
                        >
                          <Play className="w-3 h-3 mr-1" />
                          {isCurrent ? "Continue" : "Start"}
                        </Button>

                        <Button
                          size="sm"
                          variant={isCompleted ? "default" : "ghost"}
                          onClick={() => toggleModuleComplete(module.id)}
                          className="text-xs"
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : (
                            <div className="w-3 h-3 border border-current rounded-full" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Course Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Engineering Outcomes</CardTitle>
              <CardDescription>Practical skills that translate directly to production systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 text-left">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Operational Discipline</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">-</span>
                      <span>Sequester knowledge sources to prevent context fragmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">-</span>
                      <span>Apply phase separation (Design-Build-Run) for systematic progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">-</span>
                      <span>Build mental models that accelerate debugging and communication</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Technical Implementation</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">-</span>
                      <span>Implement deterministic evaluations with Docker and CI integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">-</span>
                      <span>Create golden fixtures and snapshot testing for regression prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">-</span>
                      <span>Apply the seven-point rubric that defines professional-grade work</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
