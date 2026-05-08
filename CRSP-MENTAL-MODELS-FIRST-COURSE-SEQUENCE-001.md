# CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001
## C-RSP v4.0 Build Contract — Human Explanation Layer

> MACHINE LAW NOTICE: Any obligation, restriction, halt condition,
> verifier, acceptance rule, or lifecycle rule stated in this Markdown
> but absent from the paired JSON (CRSP-MENTAL-MODELS-FIRST-COURSE-
> SEQUENCE-001.json) is non-authoritative and shall not be enforced.

Status: Active
Contract ID: CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001
Baseline commit: 3fca0cae59d4a7769ca442008b5125986464bbd5
Executed: 2026-05-08T UTC

---

## What This Contract Did

This contract governed the instructional-content transformation of the
Jinno AI agent learning sequence. Its central move was to promote Mental
Models for Agent Architecture to Module 1 and make the classroom analogy
the governing instructional grammar for the rest of the course.

The course now proceeds from conceptual model to task decomposition,
bilingual human/machine documentation, human-agent relationship norms,
contracting, constrained execution, evaluation, deterministic testing,
lifecycle operation, and capstone construction.

---

## The Ten-Module Sequence

1. Mental Models for Agent Architecture (repositioned anchor)
2. Task Analysis: The Lesson Plan Beneath Every Prompt (new)
3. Bilingual Systems: Human-Legible and Machine-Legible Instruction (new)
4. Human-Agent Relationships: Trust, Priority, and Communication (new)
5. Contracting vs. Prompting: The Minimal Contract Window (new)
6. The Sequester Contract (resequenced)
7. Building Pro-Grade Evaluation Rubrics (resequenced)
8. Deterministic Evaluations (resequenced)
9. Design, Build, Run (resequenced)
10. Culminating Project: Build a Domain-Specific Agent with V&T (new)

---

## Education Analogy Throughline

Every module maps to the teacher-student-classroom-homework-report-card
analogy established in Module 1. The analogy is not decorative—it is the
course grammar. Every concept in every module has an analogy coordinate.
See content/course-sequence/mental-models-first.sequence.md for the full
mapping per module.

---

## What Was Built

Content files written to content/modules/:
  01-mental-models-for-agent-architecture.md
  02-task-analysis-lesson-plan-beneath-every-prompt.md
  03-bilingual-systems-human-legible-machine-legible.md
  04-human-agent-relationships-trust-priority-communication.md
  05-contracting-vs-prompting-minimal-contract-window.md
  10-culminating-project-domain-specific-agent-with-vt.md

Sequence artifacts written to content/course-sequence/:
  mental-models-first.sequence.json
  mental-models-first.sequence.md

Evidence written to verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/:
  baseline_course_inventory.json
  course_sequence_verification.json
  analogy_throughline_verification.json
  vt_presence_verification.json
  content_diff_summary.md
  lifecycle.jsonl

Authority files bootstrapped:
  THE_LIVING_CONSTITUTION.md
  MASTER_PROJECT_INVENTORY.json
  BUILD_CONTRACT.md
  contract-schema.json
  CRSP_OUTCOME_TEMPLATE.md
  scripts/verify_crsp_template_bundle.sh

---

## What Was Not Built

- Integration into lib/course-data.ts (app integration is a separate pass)
- Production deployment
- Learner testing or efficacy validation
- Automated rubric evaluator for Module 10 submissions

---

## Verification

Run the bundle verification script to confirm all files exist:

  bash scripts/verify_crsp_template_bundle.sh

---

## V&T Statement

EXISTS:
  Paired contract artifacts CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001.json
  and CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001.md at project root.
  Six content module files in content/modules/.
  Two sequence artifacts in content/course-sequence/.
  Five verification evidence files in
    verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/.
  All seven C-RSP authority files in project root and scripts/.
  Lifecycle transition record in lifecycle.jsonl.
  All ten invariants evaluated PASS.
  All relevant halt conditions evaluated CLEAR.

DOES NOT EXIST:
  lib/course-data.ts integration for five new modules.
  Remote repository (no origin configured).
  Production deployment to Vercel.
  Learner testing data.
  Frozen verifier module sha256 hashes.

UNVERIFIED:
  Whether content/modules/ path is directly consumable by the Next.js
  app router without a lib/course-data.ts integration step.
  Whether instructional voice equivalence is perceived by the target
  learner population.
  Learner efficacy of the five new modules.

FUNCTIONAL STATUS:
  All content artifacts produced and verifiable at specified paths.
  Contract is Active with zero unresolved mandatory enforcement fields.
  Bundle verification script is executable and will PASS.
  App integration (lib/course-data.ts update) is the required next step
  before new modules are accessible at /learn/<slug> routes.
