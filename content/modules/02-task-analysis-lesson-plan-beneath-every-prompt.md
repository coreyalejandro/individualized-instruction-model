# Module 02: Task Analysis — The Lesson Plan Beneath Every Prompt
<!-- status: new_module | module_number: 2 -->
<!-- education_analogy: lesson_plan, teacher_preparation, learning_objectives, prerequisites -->

## The Hidden Work Before Writing

Every good teacher enters the classroom having already done invisible
work. Before the first sentence is spoken, she has written a lesson plan.
She knows what the students need to learn, in what order, and why. She
has identified which concepts depend on which. She has anticipated the
questions that will arise. She has drawn the map before starting the
journey.

Practitioners who skip this step show up to the classroom unprepared.
They write prompts that assume knowledge the agent does not have. They
issue instructions that skip steps the agent cannot fill in by itself.
They produce outputs that technically answered the prompt but missed the
actual goal.

Task analysis is the discipline of doing the teacher's preparation work
before you write a single word of a prompt.

## What Task Analysis Is

Task analysis is the structured decomposition of a goal into discrete,
sequenced, dependency-mapped sub-tasks. It answers four questions before
you touch a prompt:

1. What is the exact terminal state I want to reach?
2. What discrete sub-tasks must be completed to reach it?
3. What is the correct sequence of those sub-tasks?
4. What does each sub-task require as input from a previous sub-task?

These four questions correspond exactly to what a lesson plan contains:
the learning objective, the instructional steps, the sequence, and the
prerequisite knowledge checks.

## Why Sequence and Dependency Matter

Consider what happens when a teacher jumps to multiplication before
confirming students understand addition. The lesson fails—not because
the teacher was unclear, but because the prerequisite was missing.
Agents fail the same way. A prompt that asks an agent to synthesize a
report before grounding it in facts will produce confident-sounding
hallucination. A prompt that asks an agent to evaluate quality before
defining quality criteria will produce inconsistent scores.

Task analysis forces you to see these dependency failures before they
become prompt failures. The agent is not magic. It cannot fill in missing
prerequisites any more than a student can do long division without knowing
their multiplication tables.

## The Task Analysis Format

A task analysis is a structured artifact, not a brainstorm. It contains:

```
GOAL: [One precise terminal state sentence]

SUB-TASKS:
  T1: [Name] — [What must be true at completion]
  T2: [Name] — [What must be true at completion]
  T3: [Name] — [What must be true at completion]

SEQUENCE: T1 -> T2 -> T3

DEPENDENCIES:
  T2 requires: output of T1
  T3 requires: output of T2, plus [any external input]

PREREQUISITES (what the agent must already know or have access to):
  - [item]
  - [item]
```

This artifact becomes the scaffold for your prompt. The sequence becomes
the order of your instructions. The dependencies tell you what context
to inject and when. The prerequisites tell you what to include in the
knowledge base or context window before execution begins.

## Lesson Plan and Prompt Are the Same Thing

When you see the mapping clearly, the lesson plan and the prompt are not
two different things—they are the same instruction for two different
audiences. The lesson plan is written for yourself. The prompt is written
for the agent. The task analysis produces both.

A well-analyzed task almost writes its own prompt. The sub-tasks become
numbered steps. The dependencies become context injections. The
prerequisites become system prompt content. The terminal state becomes
the acceptance criterion.

## Where Task Analysis Breaks Down

The most common failure mode is writing a task analysis that is actually
a list of hoped-for outputs rather than a decomposition of work. The
difference: outputs describe what you want to receive. Sub-tasks describe
work that must be performed. "Produce a summary" is an output. "Read each
source document, extract the three most significant claims from each, and
synthesize across claims into a coherent narrative" is a sub-task
decomposition. The first produces unpredictable results. The second
constrains the agent's path through the work.

The second failure mode is omitting dependencies. Every sub-task that
depends on a previous one must say so explicitly. If T3 depends on T2,
and T2 fails silently, T3 will execute on nothing and report success
confidently. Explicit dependencies make silent failures visible.

## Learning Objectives

- Decompose any goal into discrete, sequenced, dependency-mapped sub-tasks
- Identify task dependencies that must be reflected in prompt structure
- Write task analyses that become the scaffold for every prompt
- Distinguish between output lists and genuine sub-task decompositions

## Key Takeaways

- A prompt without a task analysis is a lesson without a lesson plan
- Sub-tasks describe work to be performed, not outputs to be received
- Dependencies must be explicit or they become silent failure modes
- The task analysis and the prompt are the same instruction for two audiences
- Prerequisite knowledge the agent lacks must be supplied in context before execution

## Practice Prompts

1. Choose any agent task you have worked on recently. Write a task
   analysis for it using the format above. How does the result differ
   from the original prompt you used?

2. Identify a prompt you have seen fail unexpectedly. Reverse-engineer
   its task analysis. Which dependency was missing?

3. Write a task analysis for building a simple question-answering agent
   over a set of PDF documents. Map each sub-task to a lesson plan element:
   objective, instructional step, prerequisite check.
