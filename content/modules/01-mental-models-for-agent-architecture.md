# Module 01: Mental Models for Agent Architecture
<!-- status: existing_repositioned_anchor | module_number: 1 -->
<!-- education_analogy: teacher, student, textbook, classroom, homework, report_card -->

## Why This Comes First

Before you write a single prompt, you need a map. The AI agent ecosystem
is dense with jargon—orchestration layers, tool-augmented generation,
retrieval-augmented pipelines, multi-agent coordination protocols. The
terminology creates a barrier that obscures fundamentally simple
concepts. Effective practitioners cut through this noise by building
robust mental models that translate abstract architectures into intuitive
frameworks.

This module establishes the map you will use for the entire course.

## The Education Analogy

The most powerful mental model for agent systems is the classroom.
Consider what you already know: a teacher, students, textbooks, a
physical room, homework assignments, and report cards. Each element maps
directly to an agent architecture component. Once you see the mapping,
you cannot unsee it—and every design decision becomes intuitive.

### Teacher -> Prompt Engineering and Evaluation Rubrics

The Teacher represents your prompt engineering layer combined with your
evaluation rubrics. Just as a teacher provides instruction, sets
expectations, and defines success criteria, your prompts tell the agent
what to do and your rubrics define what good looks like. A weak teacher
produces confused students. A weak prompt produces unpredictable agents.
The quality of instruction directly determines the quality of output.

### Student -> Model Executor

The Student is your model executor—the actual language model performing
the work. Students arrive with varying capabilities, prior knowledge, and
learning styles. Similarly, different models bring different strengths,
knowledge cutoffs, and behavioral tendencies. You cannot teach calculus
to a student who has not learned algebra. You cannot expect sophisticated
reasoning from a model not trained for it.

### Textbook -> Knowledge Base

The Textbook maps to your knowledge base—the reference material available
to the system. This might be retrieved documents, embedded context, or
fine-tuned knowledge. A comprehensive, well-organized textbook enables
better learning. A comprehensive, well-structured knowledge base enables
better agent responses. The quality of source material matters enormously.

### Classroom -> Context Window

The Classroom represents your context window. A classroom has finite
physical capacity—only so many students fit, only so much can be written
on the whiteboard. Your context window has finite token capacity—only so
much information can be actively considered during generation. Overloading
the classroom creates chaos. Overloading the context window degrades
performance. This mapping has immediate practical consequences: every
design decision about what goes into the context window is a classroom
management decision.

### Homework -> Tool Calls

Homework represents tool calls. Students complete homework outside of
class time, bringing results back for discussion. Agents execute tool
calls outside the main generation loop, returning results for
incorporation into responses. Homework extends learning beyond classroom
walls. Tool calls extend agent capabilities beyond pure language modeling.

### Report Card -> Evaluation Suite

The Report Card is your evaluation suite—the definitive assessment of
performance. Teachers grade against established rubrics. You evaluate
agents against predetermined test cases. A report card that says passing
tells you the student mastered the material. A passing evaluation suite
tells you the agent meets production requirements.

## Why the Analogy Scales

This model scales to complex architectures. Multi-agent systems become
schools with multiple teachers and cross-classroom collaboration. RAG
pipelines become library research projects where students retrieve
textbooks before answering questions. Fine-tuning becomes long-term
curriculum design that shapes student capabilities over time.

The analogy also provides diagnostic guidance when systems fail. If
outputs are inconsistent, examine the teacher—is the prompt clear and
complete? If outputs lack depth, examine the textbook—is the knowledge
base sufficient? If outputs truncate or degrade, examine the classroom—is
the context window overloaded? The analogy makes debugging intuitive
rather than mysterious.

## Learning Objectives

- Map AI agent components to familiar educational constructs
- Use the Teacher-Student-Classroom model for system design decisions
- Develop intuition for context window management
- Apply the analogy as a diagnostic framework when systems fail

## Key Takeaways

- Prompts and rubrics function as the teacher providing instruction and grading criteria
- The context window is your classroom with finite capacity—manage it deliberately
- Tool calls are homework: work done outside the main execution context
- The evaluation suite is the report card: the definitive performance record
- Every future module in this course maps to this analogy—hold it tightly

## Practice Prompts

1. Sketch a simple agent system you know or want to build. Label each
   component using the education analogy. What is the teacher? What is
   the classroom? What homework exists?

2. A colleague says their agent "just works inconsistently." Using the
   analogy, generate three diagnostic hypotheses. Which component would
   you inspect first?

3. You are building a multi-agent pipeline with three specialized agents.
   Map it to a school with multiple classrooms. What are the inter-classroom
   communication challenges?
