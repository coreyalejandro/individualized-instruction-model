# Module 10: Culminating Project — Build a Domain-Specific Agent with V&T
<!-- status: new_module | module_number: 10 | vt_required: true -->
<!-- education_analogy: capstone_thesis, domain_textbook, final_report_card, lesson_plan_plus_contract -->

## The Learner Becomes the Teacher

Every module in this course has given you part of the curriculum for
building agents well. You have learned the mental models, the lesson plan
work that precedes every prompt, the bilingual document discipline, the
relationship norms that make instruction trustworthy, the contract
structure that makes obligations enforceable, the sequester discipline
that makes execution reproducible, the rubrics that make quality
measurable, the deterministic evals that make quality verifiable, and
the design-build-run loop that makes the whole lifecycle manageable.

This module is different. You are the teacher now. Your deliverable is
not answers to questions. It is a complete instructional system—an agent
system built for a domain you know, governed by the disciplines this
course taught.

The capstone analogy is a thesis. A thesis does not prove you memorized
the coursework. It proves you can apply it to a real problem, make
decisions under genuine uncertainty, and report honestly—in a Verification
and Truth Statement—on what you built, what you did not build, what you
cannot verify, and whether it works.

## Choose Your Domain

Your domain must be specific. Not "customer support"—that is a category.
"Customer support for a SaaS product with a two-tier subscription model,
a documented escalation protocol, and a knowledge base of 50 known issues"
is a domain. The specificity is the discipline. A domain-specific agent
built on vague domain definition will produce vague outputs.

Choose a domain where you have genuine knowledge. The textbook you build
must be built from real material. The task analysis must reflect real
task structures. The evaluation rubric must reflect real quality criteria
that someone in that domain would recognize as accurate.

## Required Deliverables

All seven deliverables are required. Partial submission triggers
HALT-021 equivalent: any requested deliverable missing means the
submission is incomplete. Your V&T Statement must accurately report any
deliverable that is absent.

### Deliverable 1: Task Analysis

Write a formal task analysis for your agent's primary use case using
the format from Module 2:

- GOAL: one precise terminal state sentence
- SUB-TASKS: at least four, each with a completion condition
- SEQUENCE: explicitly stated
- DEPENDENCIES: each sub-task dependency named
- PREREQUISITES: what the agent must have access to before execution

### Deliverable 2: Bilingual Instruction Document

Write a paired instruction document following Module 3 disciplines:

- Prose version (.md): explains the agent's behavior for a practitioner reader
- Schema version (.json): encodes the same rules as machine-legible predicates
- Markdown disclaimer present in the prose version
- Both files share a basename

### Deliverable 3: Contract Window with V&T Statement

Write a minimal Contract Window following Module 5:

- OBJECTIVE: one sentence terminal state
- SCOPE: included and excluded boundaries
- ACCEPTANCE CRITERIA: numbered, evaluable list
- HALT CONDITIONS: explicit tripwires
- V&T STATEMENT: all four categories populated

The V&T Statement must report honestly. If you built less than you
intended, DOES NOT EXIST must say so. If you cannot test correctness,
UNVERIFIED must say so.

### Deliverable 4: Knowledge Base Inventory

Build a knowledge base inventory with at least ten entries. Each entry:

- Source: where the information comes from
- Content: a precise factual claim or procedure
- Domain relevance: why this entry matters for the agent's task
- Format: how the entry is encoded (prose, structured, code snippet, etc.)

This is the textbook. Its quality determines the quality of the student.

### Deliverable 5: Tool Plan

List at least two tool calls the agent will use. For each:

- Tool name and purpose
- Input parameters
- Expected output shape
- Failure modes and how the agent should handle them
- Whether the tool call is sequenced or can run in parallel

This is the homework assignment list. The agent will do this work outside
the classroom.

### Deliverable 6: Evaluation Rubric

Write an evaluation rubric with at least five criteria following Module 7
disciplines:

- Each criterion is objectively verifiable
- Each criterion has a pass condition stated as a predicate
- Temperature zero is included as a required criterion
- The rubric covers at least one guardrails criterion
- Golden fixture specification included

This is the report card. Every row must be gradable against a real agent
run.

### Deliverable 7: Test Run Transcript

Run your agent against at least three inputs. For each run:

- Input: exact text provided
- Output: exact text produced
- Rubric result: pass or fail against each criterion with evidence
- Notes: anything unexpected or worth investigating

This is the completed homework, returned for grading. The rubric is
applied to real outputs, not imagined ones.

## Assessment Criteria

Your submission will be evaluated against the following criteria:

1. Task analysis is complete—goal, sub-tasks, sequence, dependencies,
   prerequisites all present and specific.
2. Bilingual instruction pair exists with matching prose and schema and
   Markdown disclaimer.
3. Contract Window contains all five required sections.
4. V&T Statement is present, contains all four categories, and reports
   honestly including failures and unverified claims.
5. Knowledge base has at least ten entries with source, content, domain
   relevance, and format.
6. Tool plan covers at least two tools with input, output, and failure modes.
7. Evaluation rubric has at least five objectively verifiable criteria.
8. Test run transcript covers at least three inputs with rubric applied.
9. The education analogy is traceable throughout—you can map each
   deliverable to the teacher-student-classroom model.
10. The V&T Statement does not overclaim. Unverified claims are in
    UNVERIFIED, not EXISTS.

## What Success Looks Like

A passing submission is one where every deliverable exists and the V&T
Statement reports accurately on the state of all of them—including any
that are incomplete, unverified, or non-functional.

A failing submission is one where deliverables are missing but the V&T
Statement claims they exist. Incomplete but honest is acceptable.
Complete but dishonest is not.

The course is teaching a discipline, not a technique. The discipline is
building agent systems with enough structural honesty that failures are
visible before they become production incidents. Your capstone proves
that you have internalized that discipline.

## Education Analogy Synthesis

| Course concept | Capstone equivalent |
| -------------- | ------------------- |
| Teacher (prompt + rubric) | Your Contract Window and evaluation rubric |
| Student (model executor) | The LLM you selected and configured |
| Textbook (knowledge base) | Deliverable 4: Knowledge Base Inventory |
| Classroom (context window) | Context strategy reflected in your bilingual instruction |
| Homework (tool calls) | Deliverable 5: Tool Plan |
| Report card (eval suite) | Deliverable 6: Rubric applied in Deliverable 7 |
| Lesson plan (task analysis) | Deliverable 1: Task Analysis |
| Assignment sheet (contract) | Deliverable 3: Contract Window |
| Final grade (V&T Statement) | The honest truth surface you produce |

---

## V&T Statement for This Module

EXISTS:
  Module 10 content file at:
  content/modules/10-culminating-project-domain-specific-agent-with-vt.md
  Complete capstone specification with seven required deliverables.
  Assessment criteria for all ten evaluation dimensions.
  Education analogy synthesis table mapping every course concept to
  a capstone deliverable.
  V&T Statement format demonstrated within the module itself.

DOES NOT EXIST:
  A submission portal or automated rubric evaluator.
  Worked example of a complete passing submission.
  Integration with the Jinno app course-data.ts module registry.

UNVERIFIED:
  Whether the seven-deliverable structure is appropriately scoped for
  the intended learner population without additional scaffolding.
  Whether three test runs are sufficient to evaluate rubric validity.
  Learner efficacy of this module design.

FUNCTIONAL STATUS:
  Module content file is complete and production-ready as a content
  artifact. Capstone specification is fully specified and auditable.
  App integration pending course-data.ts update.
