import { streamText, convertToModelMessages } from 'ai'
import { getModuleBySlug } from '@/lib/course-data'

// Fallback responses when API key is not available
function getFallbackResponse(moduleSlug: string, question: string): string {
  const lowerQuestion = question.toLowerCase()
  
  const fallbackResponses: Record<string, Record<string, string>> = {
    "sequester-contract": {
      default: "The Sequester Contract addresses knowledge fragmentation in agent development. The core discipline is committing to exactly one authoritative source per learning session—no supplementary Googling or documentation rabbit holes. Unknowns get recorded in SST.md for weekly reconciliation rather than immediate resolution. This mirrors how we want agents to behave: working within defined context boundaries.",
      "sst": "SST.md—Single Source of Truth—is your canonical unknowns registry. Each entry captures the question, source context, and timestamp. During Friday reconciliation, you systematically resolve entries against authoritative materials. This creates a clean audit trail while preventing context-switching mid-session.",
      "reconcile": "Reconciliation happens weekly, typically Friday. You return to SST.md and systematically resolve each unknown against your authoritative course materials. Some entries resolve cleanly, others reveal gaps requiring dedicated study, and a few may indicate incomplete source material. This ritual prevents knowledge debt accumulation.",
      "fragment": "Knowledge fragmentation occurs when engineers context-switch rapidly between multiple references—27 browser tabs, various documentation sources, Stack Overflow tangents. This approach undermines the reproducibility that production AI systems require. The Sequester Contract's single-source discipline prevents this failure mode.",
    },
    "mental-models": {
      default: "This module translates abstract AI architecture into the educational analogy. Teacher equals your prompts and rubrics—the instruction layer. Student is the model executor with its inherent capabilities. Textbook maps to your knowledge base. Classroom represents the finite context window. Homework equals tool calls—work outside the main loop. Report Card is your golden evaluation suite.",
      "teacher": "The Teacher represents your prompt engineering layer combined with evaluation rubrics. Just as a teacher provides instruction, sets expectations, and defines success criteria, your prompts tell the agent what to do and your rubrics define what 'good' looks like. A weak teacher produces confused students; a weak prompt produces unpredictable agents.",
      "context": "The Classroom represents your context window—the finite token capacity where active reasoning occurs. A physical classroom has limited seating and whiteboard space; your context window has limited tokens. Overloading the classroom creates chaos; overloading the context window degrades performance. This mapping helps diagnose truncation and capacity issues.",
      "homework": "Tool calls map to Homework in the educational model. Students complete homework outside class time, bringing results back for discussion. Agents execute tool calls outside the main generation loop, returning results for incorporation into responses. This extends capabilities beyond pure language modeling, just as homework extends learning beyond classroom walls.",
    },
    "pro-grade-rubric": {
      default: "The seven pro-grade criteria: temperature zero for determinism, golden fixture freezing, published CI badges, GUARDRAILS.md documentation, git-tagged prompts, trace enablement, and bounded response lengths. Meeting these doesn't guarantee quality, but failing them guarantees amateur status. These practices transform prototypes into production assets.",
      "temperature": "Temperature zero is non-negotiable for professional work. When temperature is non-zero, identical inputs produce varied outputs—making debugging nearly impossible, regression testing meaningless, and production monitoring a guessing game. Zero temperature produces identical outputs for identical inputs. Reproducibility trumps creativity for agent applications.",
      "golden": "Golden fixtures are brittle by design. Each fixture is a specific input producing a specific, validated output, version-controlled alongside your code. When CI runs, it compares results character-by-character against expected outputs. The temptation to keep fixtures 'flexible' defeats their purpose—a fixture that accepts any reasonable output is not a fixture, it's a hope.",
      "trace": "Every production agent call must generate an observable trace—complete records of inputs, intermediate steps, tool calls, and outputs. Traces must be stored, searchable, and retained for a defined period. When something goes wrong, traces are your forensic evidence. Without them, debugging production issues becomes speculation.",
    },
    "deterministic-evals": {
      default: "Demo-itis—the phenomenon where agents perform brilliantly in development but inconsistently in production—stems from non-determinism. Four sources: model sampling (fix with temperature zero), environmental variation (fix with Docker), temporal dependencies (fix with injected timestamps), and external service calls (fix with mocks). Addressing all four enables true CI integration.",
      "demo": "Demo-itis occurs when identical inputs produce varied outputs across runs. The root cause is almost always non-determinism from model sampling, environmental differences, time dependencies, or external services. Deterministic evaluation eliminates this by construction—when properly configured, the same inputs produce identical outputs every time, on every machine.",
      "docker": "Docker images freeze your environment completely—Python package versions, system libraries, hardware-specific numerical precision. When your CI pipeline runs evaluations inside a specified Docker container, it executes in an environment identical to development, which is identical to every team member's setup. This eliminates environmental variation as a non-determinism source.",
      "snapshot": "Snapshot testing captures complete outputs as golden references stored in version control. Your evaluation runner loads expected snapshots, executes the agent, captures actual outputs, and compares character-by-character. The comparison must be exact—semantic similarity is insufficient for determinism verification. Only exact matching confirms true reproducibility.",
    },
    "design-build-run": {
      default: "The D-B-R loop imposes phase separation. Design is for specification without implementation—documents tagged DESIGN. Build is for implementation against specifications—code tagged BUILD. Run is for deployment and operations—tagged RUN. Phase contamination—mixing phases mid-session—produces incomplete artifacts across all phases. Strict separation enables deep focus in each mode.",
      "design": "Design phase produces specifications, not code. You write architecture documents, sketch diagrams, draft prompt templates, specify evaluation criteria. The mental mode is expansive—exploring possibilities, considering edge cases. When in Design phase, you are forbidden from writing implementation code. If you catch yourself coding, you've contaminated phases.",
      "build": "Build phase translates Design specifications into working systems. You implement prompts, create tool integrations, build evaluation harnesses. The mental mode is constructive. When in Build phase, you are forbidden from redesigning—if specifications prove inadequate, you exit Build, return to Design, update specs, then resume Build.",
      "contamination": "Phase contamination occurs when you mix D, B, and R within a single session. Classic examples: designing features while debugging production incidents; implementing before completing specifications; refactoring while adding capabilities. Contamination feels efficient but produces incomplete artifacts everywhere. The Design doc never finishes because you jumped to implementation.",
    }
  }
  
  const moduleResponses = fallbackResponses[moduleSlug] || fallbackResponses["sequester-contract"]
  
  // Try to find a relevant response based on keywords
  for (const [key, response] of Object.entries(moduleResponses)) {
    if (key !== 'default' && lowerQuestion.includes(key)) {
      return response
    }
  }
  
  return moduleResponses.default
}

export async function POST(req: Request) {
  const { messages, moduleSlug } = await req.json()

  const module = getModuleBySlug(moduleSlug)
  
  if (!module) {
    return new Response('Module not found', { status: 404 })
  }

  // Check if we have an API key available
  const hasApiKey = !!process.env.OPENAI_API_KEY
  
  if (!hasApiKey) {
    // Return a fallback response as a simple text stream
    const lastMessage = messages[messages.length - 1]
    const userQuestion = lastMessage?.parts?.find((p: { type: string }) => p.type === 'text')?.text || lastMessage?.content || ''
    const fallbackText = getFallbackResponse(moduleSlug, userQuestion)
    
    // Create a simple SSE response that mimics the AI SDK format
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        // Send the text as a single chunk
        const chunk = `data: ${JSON.stringify({ type: 'text-delta', delta: fallbackText })}\n\n`
        controller.enqueue(encoder.encode(chunk))
        // Send finish message
        const finish = `data: ${JSON.stringify({ type: 'finish', finishReason: 'stop' })}\n\n`
        controller.enqueue(encoder.encode(finish))
        controller.close()
      }
    })
    
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      }
    })
  }

  const systemPrompt = `You are an AI Course Coach helping a student learn about "${module.title}".

LESSON CONTENT:
${module.transcript}

KEY CONCEPTS: ${module.concepts.join(', ')}

INSTRUCTIONS:
- Answer questions ONLY based on the lesson content above
- Keep responses concise (2-4 sentences max)
- If asked about something not covered in the lesson, politely redirect to the lesson topics
- Use encouraging, supportive language
- When explaining concepts, relate them back to the specific lesson content
- You may use analogies to make concepts clearer

Remember: You are grounded in THIS lesson only. Do not bring in outside knowledge.`

  const result = streamText({
    model: 'openai/gpt-4o-mini',
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 300,
  })

  return result.toUIMessageStreamResponse()
}
