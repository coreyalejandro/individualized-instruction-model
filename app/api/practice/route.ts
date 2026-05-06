import { generateText, Output } from 'ai'
import { z } from 'zod'
import { getModuleBySlug } from '@/lib/course-data'

const questionSchema = z.object({
  questions: z.array(z.object({
    sentence: z.string().describe('The sentence with a blank indicated by ___'),
    answer: z.string().describe('The correct word or phrase that fills the blank'),
    hint: z.string().describe('A helpful hint for the learner')
  }))
})

// Fallback questions when API key is not available
const fallbackQuestions: Record<string, { sentence: string; answer: string; hint: string }[]> = {
  "sequester-contract": [
    { sentence: "During any learning session, you commit to exactly one ___ source to prevent knowledge fragmentation.", answer: "authoritative", hint: "The definitive or official reference" },
    { sentence: "When you encounter something you don't understand, you record it in your ___ file rather than immediately Googling.", answer: "SST.md", hint: "Single Source of Truth document" },
    { sentence: "The reconciliation ritual happens ___, where you systematically resolve each unknown against course materials.", answer: "weekly", hint: "A seven-day cycle" }
  ],
  "mental-models": [
    { sentence: "In the educational analogy, your prompt engineering layer combined with evaluation rubrics represents the ___.", answer: "Teacher", hint: "The one who provides instruction and sets expectations" },
    { sentence: "The ___ represents your context window - it has finite capacity like a physical space.", answer: "Classroom", hint: "Where the student learns" },
    { sentence: "Tool calls map to ___ in the educational model - work done outside the main execution context.", answer: "Homework", hint: "Assignments completed outside class" }
  ],
  "pro-grade-rubric": [
    { sentence: "Setting model ___ to zero eliminates the primary source of non-reproducible behavior.", answer: "temperature", hint: "A parameter controlling randomness in outputs" },
    { sentence: "Every agent must have at least one '___ fixture' - a specific input that produces a validated output.", answer: "golden", hint: "Precious, definitive, or reference-quality" },
    { sentence: "Every prompt used by your agent must be git-tagged and ___ to maintain proper version control.", answer: "version-tracked", hint: "Recording changes over time" }
  ],
  "deterministic-evals": [
    { sentence: "The phenomenon where your agent performs brilliantly in development but inconsistently in production is called ___.", answer: "demo-itis", hint: "A 'disease' affecting demonstrations" },
    { sentence: "Docker images freeze your ___ completely, ensuring identical execution across machines.", answer: "environment", hint: "The system context where code runs" },
    { sentence: "During evaluation, external service calls should be replaced with ___ that return predetermined responses.", answer: "mocks", hint: "Simulated or fake versions" }
  ],
  "design-build-run": [
    { sentence: "Phase ___ occurs when you mix Design, Build, or Run activities within a single work session.", answer: "contamination", hint: "Unwanted mixing or pollution" },
    { sentence: "During the ___ phase, you write code against specifications but are forbidden from redesigning.", answer: "Build", hint: "The implementation phase" },
    { sentence: "Every ticket, task, or work item should carry a D, B, or ___ designation.", answer: "R", hint: "The third phase - operations and deployment" }
  ]
}

export async function POST(req: Request) {
  try {
    const { moduleSlug } = await req.json()

    const module = getModuleBySlug(moduleSlug)
    
    if (!module) {
      return Response.json({ error: 'Module not found' }, { status: 404 })
    }

    // Check if we have an API key available
    const hasApiKey = !!process.env.OPENAI_API_KEY
    
    if (!hasApiKey) {
      // Return fallback questions
      const questions = fallbackQuestions[moduleSlug] || fallbackQuestions["sequester-contract"]
      return Response.json({ questions })
    }

    const result = await generateText({
      model: 'openai/gpt-4o-mini',
      output: Output.object({ schema: questionSchema }),
      prompt: `Based on this lesson content, generate exactly 3 fill-in-the-blank practice questions.

LESSON: "${module.title}"
CONTENT:
${module.transcript}

KEY CONCEPTS: ${module.concepts.join(', ')}

Requirements:
- Each question should test understanding of a key concept
- The blank should replace an important term or phrase
- Keep sentences concise and clear
- Hints should guide without giving away the answer

Generate 3 questions now.`
    })

    // result.output is already the parsed object with { questions: [...] }
    return Response.json(result.output)
  } catch (error) {
    // If AI fails, fall back to pre-defined questions
    const { moduleSlug } = await req.json().catch(() => ({ moduleSlug: 'sequester-contract' }))
    const questions = fallbackQuestions[moduleSlug] || fallbackQuestions["sequester-contract"]
    return Response.json({ questions })
  }
}
