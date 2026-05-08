# Module 05: Contracting vs. Prompting — The Minimal Contract Window
<!-- status: new_module | module_number: 5 | vt_required: true -->
<!-- education_analogy: verbal_instruction, assignment_sheet, report_card_vt_row, contract_window -->

## The Difference Is Structural, Not Tonal

A teacher can give a verbal instruction in a perfectly firm tone. She
can be crystal clear in her phrasing, confident in delivery, and
unambiguous in intent. None of this makes the verbal instruction a
contract. A contract is not tone. A contract is structure.

A prompt can be detailed, well-formatted, and carefully written. None
of this makes it a contract. A prompt lacks the structural properties
that make obligations enforceable. A contract contains them.

This distinction matters because practitioners spend enormous effort
improving prompt quality—tone, phrasing, format, detail—while building
systems that are fundamentally un-auditable because the obligations
exist only in language that requires human judgment to interpret.

## What a Prompt Is

A prompt is a natural language instruction issued to a language model
before execution. It tells the agent what to do. It may be excellent.
It may be detailed. It may reference many constraints and criteria.
But it is informal in the engineering sense: there is no machine-readable
structure that can verify whether the agent complied, no halt condition
that can be triggered by a predicate evaluator, no evidence requirement
that produces proof of completion, no paired JSON that a schema validator
can inspect.

A prompt is a verbal instruction written down. It depends entirely on
the agent's interpretation of natural language.

## What a Contract Is

A contract is a bilingual artifact—structured for both human
understanding and machine enforcement—that encodes obligations,
acceptance criteria, halt conditions, scope boundaries, and truth-surface
requirements before execution begins.

A contract has structural properties that a prompt lacks:

- Obligations are machine-legible predicates, not prose descriptions
- Acceptance criteria are enumerable and evaluable, not impressionistic
- Halt conditions are explicit tripwires, not implied judgment calls
- Scope boundaries prevent work outside the defined envelope
- Evidence requirements produce artifacts proving execution occurred and what it produced

A contract does not replace the prompt. It contains the prompt. The
operational instruction lives inside the contract's scope and objective
fields.

## The Assignment Sheet vs. the Verbal Instruction

A teacher who says "write a five-paragraph essay on the causes of World
War I, due Friday" has issued a prompt. The student hears it, interprets
it, and produces something—but there is no shared record of what was
required, no explicit criteria distinguishing A work from C work, and no
mechanism for the teacher to halt and require revision before the essay
is submitted.

A teacher who distributes a signed assignment sheet with the following
structure has issued a contract:

  TASK: Five-paragraph essay
  TOPIC: Causes of World War I
  DUE: Friday 5pm
  ACCEPTANCE CRITERIA:
    - Exactly five paragraphs
    - Three distinct causal claims, each with cited evidence
    - Clear argument in thesis sentence of paragraph one
    - No plagiarism
  HALT CONDITIONS:
    - Student may not submit if fewer than three sources are cited
    - Student may not submit if essay exceeds 1000 words
  GRADING: Rubric attached as Appendix A
  V&T STATEMENT REQUIRED: Submit alongside essay

Both give the student a task. Only the second creates an enforceable
agreement between teacher and student about what compliance looks like.

## The Minimal Contract Window

Not every agent task requires a full C-RSP contract. But every agent
task that matters—that you will evaluate, that you will share, that you
will deploy—requires a minimum enforceable surface.

That minimum surface is the Contract Window. It contains exactly:

1. OBJECTIVE: One sentence stating the terminal state the execution must reach
2. SCOPE: What is included and what is explicitly excluded
3. ACCEPTANCE CRITERIA: A numbered list of conditions that, if all true, mean the task is done
4. HALT CONDITIONS: A numbered list of conditions that, if any are true, must stop execution
5. V&T STATEMENT: The truth-reporting surface required at completion

The V&T Statement is the irreducible minimum. A build that produces no
V&T Statement has produced no contract-level evidence. It has produced
a prompt-level output.

## The Verification and Truth Statement

The V&T Statement is the report card row that tells the teacher—honestly—
what was learned, what was not learned, what is unknown, and whether
the student is actually performing at the claimed level.

It has four required categories. All four must be present in every V&T
Statement. No category may be omitted even if empty.

EXISTS:
  List every artifact, fact, or outcome the execution produced and
  where it can be verified. Be precise. File paths, not descriptions.
  "A JSON file was written" is insufficient. State the exact path.

DOES NOT EXIST:
  List every artifact or outcome that was specified, expected, or
  implied but was not produced. Incompleteness must be reported.
  A V&T Statement that omits failures is a false V&T Statement.

UNVERIFIED:
  List every claim that cannot be confirmed from the evidence produced.
  If you claim the agent works correctly but have no test results,
  the correctness claim is UNVERIFIED. Report it here.

FUNCTIONAL STATUS:
  State plainly whether the produced artifacts function as specified.
  This is a single-sentence summary: what works, what does not, what
  the state of execution was at completion.

## Why the V&T Statement Cannot Be Skipped

A build that does not produce a V&T Statement has no truth surface.
You cannot distinguish between a build that succeeded, a build that
partially succeeded, and a build that failed silently. The V&T Statement
makes that distinction machine-readable and auditable.

More importantly: a V&T Statement that accurately reports what does not
exist is more valuable than one that accurately reports what does exist.
The most common failure mode in agent development is unacknowledged
partial completion—reporting only the successful artifacts while the
failures remain invisible. The V&T Statement requires you to report both.

## Learning Objectives

- Distinguish a prompt from a contract by structural properties, not tone or detail
- Write a minimal Contract Window containing objective, scope, acceptance criteria,
  halt conditions, and V&T Statement
- Produce a Verification and Truth Statement with all four required categories populated
- Identify the boundary between prompt-level and contract-level governance

## Key Takeaways

- A prompt is a natural language instruction. A contract is a bilingual enforcement artifact.
- The assignment sheet versus the verbal instruction: both convey the task, only one creates enforceable compliance
- The minimal Contract Window requires exactly: objective, scope, acceptance criteria, halt conditions, V&T
- The V&T Statement has four required categories: EXISTS, DOES NOT EXIST, UNVERIFIED, FUNCTIONAL STATUS
- A V&T Statement that omits failures is a false V&T Statement

## Practice Prompts

1. Take a prompt you wrote last week. Convert it into a minimal Contract
   Window. Write the five required sections. How does the process change
   what you know about what you were actually asking for?

2. Write a V&T Statement for a task you completed recently. Fill all four
   categories honestly. What appears in DOES NOT EXIST that you had not
   previously acknowledged?

3. A colleague argues that detailed prompts are equivalent to contracts.
   Write a one-paragraph rebuttal using exactly one structural difference
   as your argument.

---

## V&T Statement for This Module

EXISTS:
  Module 05 content file at:
  content/modules/05-contracting-vs-prompting-minimal-contract-window.md
  Teaches distinction between prompts and contracts.
  Introduces V&T Statement format with four required categories.
  Includes minimal Contract Window definition with five required sections.

DOES NOT EXIST:
  A live interactive exercise. Module content only; no app integration
  has been implemented in this build pass.
  Schema validation of learner-produced V&T Statements.

UNVERIFIED:
  Whether the instructional prose achieves the stated learning objectives
  for a diverse learner population. No learner testing has been conducted.

FUNCTIONAL STATUS:
  Module content file is complete and production-ready as a content
  artifact. App integration pending course-data.ts update.
