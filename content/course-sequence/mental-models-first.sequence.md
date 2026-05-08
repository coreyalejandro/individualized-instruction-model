# Mental Models First: Course Sequence Guide

> MACHINE LAW NOTICE: This Markdown is the human-readable companion to
> mental-models-first.sequence.json. Any obligation, restriction, or
> acceptance criterion stated here but absent from the paired JSON is
> non-authoritative and shall not be enforced.

## Why This Order

The course was redesigned so that learners build a conceptual foundation
before touching any tooling. You cannot write a good prompt if you do not
know what a prompt is doing structurally. You cannot build a contract if
you have never thought about what distinguishes a contract from a
casual instruction. Every module in this sequence presupposes the one
before it.

The governing analogy is the classroom. Your agent system is a school.
You are the curriculum designer, the teacher, and the grader. Your agent
is the student. The context window is the classroom. The knowledge base
is the textbook. Tool calls are homework. Your evaluation suite is the
report card. Hold this analogy from Module 1 through Module 10.

---

## Module 1 -- Mental Models for Agent Architecture
Status: existing_repositioned_anchor
Duration: 10 min

The analogy is introduced here and becomes the course grammar.
Practitioner-facing vocabulary is translated: prompts become teacher
instructions, context window becomes classroom capacity, tool calls
become homework, evals become report cards.

Learning objectives:
- Map AI agent components to educational constructs
- Use the Teacher-Student-Classroom model for design decisions
- Develop intuition for context window management

Analogy map:
  Teacher         -> Prompt engineering layer and evaluation rubrics
  Student         -> Language model executor
  Textbook        -> Knowledge base
  Classroom       -> Context window (finite capacity)
  Homework        -> Tool calls (work done outside generation loop)
  Report Card     -> Evaluation suite (definitive performance record)

---

## Module 2 -- Task Analysis: The Lesson Plan Beneath Every Prompt
Status: new_module
Duration: 10 min

Before a teacher walks into the room, she writes a lesson plan. Before
you write a prompt, you do task analysis. This module teaches the
discipline of decomposing goals into explicit sub-tasks, surfacing
dependencies, and translating that structure into prompt architecture.

Learning objectives:
- Decompose any goal into discrete, sequenced sub-tasks
- Identify task dependencies that must be reflected in prompt order
- Write task analyses that become the scaffold for every prompt

Analogy map:
  Lesson plan     -> Structured task decomposition before any prompt
  Teacher prep    -> The analysis work before writing begins
  Prerequisites   -> Task dependencies surfaced during decomposition
  Learning goals  -> Measurable sub-tasks defined before execution

---

## Module 3 -- Bilingual Systems: Human-Legible and Machine-Legible Instruction
Status: new_module
Duration: 10 min

A syllabus has two parts: the prose description a student reads and the
grading grid the registrar machine processes. Your instruction artifacts
should have the same duality. This module teaches when to write prose,
when to write schema, and how to keep them in sync as a paired bilingual
document system.

Learning objectives:
- Distinguish human-legible from machine-legible artifacts
- Design paired document systems where prose and schema match exactly
- Identify when machine-legibility is required for enforceability

Analogy map:
  Syllabus prose       -> Human-readable markdown description of intent
  Grade rubric grid    -> Machine-legible JSON schema encoding rules
  Paired curriculum    -> Bilingual human + machine artifact pair
  Translation check    -> Keeping prose and schema synchronized

---

## Module 4 -- Human-Agent Relationships: Trust, Priority, and Communication
Status: new_module
Duration: 10 min

A classroom runs on implicit norms. Students know what the teacher
expects. Teachers know what students need. The relationship is governed
by trust, consistent presence, clear priorities, mutual respect, and the
understanding that communication failures are the teacher's
responsibility to repair. Human-agent relationships work the same way.

Learning objectives:
- Recognize the relationship dynamics present in every human-agent session
- Write agent instructions that establish trust through clarity and priority order
- Identify and repair communication failures before they compound

Analogy map:
  Teacher-student contract   -> Implicit norms governing interaction
  Classroom norms            -> Mutual respect and communication protocols
  Attendance and commitment  -> Trust built through reliable behavior
  Grade transparency         -> Clear priority signaling and honest status

---

## Module 5 -- Contracting vs. Prompting: The Minimal Contract Window
Status: new_module
Duration: 12 min

A verbal instruction from a teacher is a prompt. A signed assignment
sheet with explicit deliverables, acceptance criteria, and a due date
is a contract. Practitioners confuse the two constantly. This module
defines the difference and introduces the Verification and Truth
statement as the minimum enforceable surface a contract must contain.

Learning objectives:
- Distinguish a prompt from a contract by structural properties
- Write a Verification and Truth statement for any agent task
- Identify the minimum Contract Window required for enforceability

Analogy map:
  Verbal instruction    -> Prompt: informal, context-dependent
  Assignment sheet      -> Contract: obligations, criteria, halt conditions
  Report card V&T row   -> Verification and Truth as minimal grading evidence
  Contract Window       -> Minimum surface binding teacher and student

Verification and Truth format:
  EXISTS: what the build produced and where it can be found
  DOES NOT EXIST: what was not produced
  UNVERIFIED: what cannot be confirmed from current evidence
  FUNCTIONAL STATUS: whether the produced artifact works as specified

---

## Module 6 -- The Sequester Contract
Status: existing_resequenced_module
Duration: 8 min

Now that learners understand contracts, the Sequester Contract reads as
an applied instance. One authoritative source per session. Unknowns go
to SST.md. Weekly reconciliation closes the loop. The analogy is a
closed-book exam where the textbook on the desk is the only source.

Analogy map:
  Closed-book exam       -> Sequestered session with one source
  SST.md                 -> The single open textbook on the desk
  Weekly reconciliation  -> After-class review resolving unknowns

---

## Module 7 -- Building Pro-Grade Evaluation Rubrics
Status: existing_resequenced_module
Duration: 12 min

A professional teacher does not grade by feel. She grades against a
rubric. This module extends the V&T statement introduced in Module 5
into a full seven-criterion evaluation rubric: temperature zero, golden
fixtures, published badges, guardrails documentation, prompt version
control, trace enablement, and bounded response length.

Analogy map:
  Rubric           -> Evaluation criteria grid used to grade agents
  Green badge      -> Passing grade visible on the transcript
  GUARDRAILS.md    -> Classroom rules posted on the wall

---

## Module 8 -- Deterministic Evaluations
Status: existing_resequenced_module
Duration: 10 min

Standardized testing works because every student answers the same
questions in the same sealed room. Deterministic evaluations work the
same way. Docker containers are the sealed room. Golden snapshots are
the answer key. CI compares student work to the key on every commit.

Analogy map:
  Standardized test    -> Deterministic eval: same questions, same conditions
  Docker container     -> Sealed testing room ensuring identical environment
  Golden snapshot      -> Answer key against which output is graded

---

## Module 9 -- Design, Build, Run
Status: existing_resequenced_module
Duration: 8 min

Curriculum design, classroom delivery, grading and revision. Three
phases, no contamination. The teacher who redesigns tomorrow's lesson
plan while grading today's homework produces neither good plans nor
fair grades.

Analogy map:
  Design phase   -> Curriculum design: writing lesson plans and objectives
  Build phase    -> Classroom execution: delivering instruction
  Run phase      -> Grading and revision: responding to performance data

---

## Module 10 -- Culminating Project: Build a Domain-Specific Agent with V&T
Status: new_module
Duration: 20 min

The learner becomes the teacher. Pick a domain. Build an agent. The
deliverable is a complete system with task analysis, bilingual
instruction, Contract Window, knowledge base, tool plan, evaluation
rubric, and a Verification and Truth statement that reports honestly on
what was built, what was not, what is unverified, and whether it works.

Analogy map:
  Capstone thesis       -> Culminating project where learner becomes teacher
  Domain textbook       -> Agent knowledge base the learner curates
  Final report card     -> V&T statement as honest self-assessment
  Lesson plan + contract -> Task analysis plus Contract Window as deliverables

Required deliverables:
  1. Written task analysis for the chosen domain
  2. Paired bilingual instruction document (prose + JSON)
  3. Contract Window with V&T statement
  4. Knowledge base inventory (10+ entries)
  5. Tool plan listing at least two tool calls
  6. Evaluation rubric with at least five criteria
  7. Test run transcript with at least three inputs

---

## Invariant Verification

INV-001: Mental Models for Agent Architecture is Module 1. PASS
INV-002: Sequence contains exactly 10 modules. PASS
INV-003: Five new modules present (task analysis, bilingual systems,
         human-agent relationships, contracting vs prompting, capstone). PASS
INV-004: Every module maps to education analogy. PASS
INV-005: Existing voice: direct, analogy-driven, practitioner-oriented. PASS
INV-007: Paired human+machine artifacts exist. PASS
INV-008: Modules 5 and 10 teach and require V&T statement. PASS
