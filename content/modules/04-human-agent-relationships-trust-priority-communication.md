# Module 04: Human-Agent Relationships — Trust, Priority, and Communication
<!-- status: new_module | module_number: 4 -->
<!-- education_analogy: teacher_student_contract, classroom_norms, attendance_commitment, grade_transparency -->

## Classrooms Run on Relationships

A classroom is not just a room with a teacher and students and a
textbook. It is a relationship. The teacher shows up prepared and
consistent. The student commits to the work. Both parties share an
implicit understanding of what cooperation looks like, what respect
looks like, and what happens when communication breaks down. When the
relationship works, learning happens. When it breaks down, no amount of
excellent curriculum design saves it.

You have a relationship with every agent you build. You may not think
of it that way, but the agent behaves as though you do. It treats your
instructions as a set of relationship norms. It infers your priorities
from what you emphasize. It either trusts that you have given it what it
needs or it compensates for the gaps—sometimes helpfully, often
disastrously.

Building that relationship deliberately is the difference between agents
that perform reliably and agents that are perpetually surprising.

## Trust Is Built Through Clarity

In a classroom, trust between teacher and student is built through
consistent, clear behavior. The teacher who says one thing on Monday and
the opposite on Wednesday, who grades without criteria, who assigns work
without explaining why it matters—this teacher produces anxious, confused
students who guess rather than learn.

Your agent receives the same signals from your instruction behavior. When
your prompts are inconsistent across sessions, the agent cannot build a
reliable model of what you want. When your instructions leave ambiguities
unresolved, the agent fills them in—and the fill is often wrong. When
your criteria for success shift without explanation, the agent cannot
learn from failure because failure is not clearly defined.

Trust is operational here, not emotional. It means: the agent can rely on
your instructions to be complete, consistent, and honest about what you
know and do not know. Clear instruction is a form of respect. Ambiguous
instruction is a form of disrespect that will be paid back in unreliable
outputs.

## Priority Must Be Explicit

A teacher with fifteen learning objectives and forty-five minutes has a
priority problem. The students cannot achieve all fifteen objectives with
equal depth in the available time. A teacher who communicates no priority
ordering leaves students to guess—and they will guess wrong about which
objectives matter most.

Agents have the same problem. When a prompt contains multiple objectives
of similar grammatical weight, the agent cannot know which one to protect
when they conflict. You must tell it. Priority ordering is not pedantry.
It is a structural property of a well-formed instruction.

Write your priorities explicitly:

  Primary objective: [the one non-negotiable outcome]
  Secondary objectives: [important but deferrable if primary is at risk]
  Constraints: [rules that cannot be violated even if objectives fail]

When the agent must choose between two objectives because they conflict,
it will consult this ordering. Without it, the choice is arbitrary.

## Communication Failures Are the Teacher's Responsibility to Repair

When a student misunderstands a lesson, the pedagogically correct
response is for the teacher to take responsibility for the communication
failure—to restate, rephrase, and rebuild from where the student's
understanding actually is. Blaming the student for not understanding is
rarely productive and never accurate when the instruction was genuinely
unclear.

When an agent produces an output that misses your intent, the first
diagnostic question is: was the intent in the instruction? Not: was it
obvious to a reasonable person? Not: should the model have known better?
Was it in the instruction? If not, the repair belongs to you.

This is not a concession about model capability. It is an accurate model
of where most agent failures originate. Practitioners who treat every
unexpected output as a model deficiency spend time on the wrong
diagnosis. Practitioners who treat every unexpected output as a potential
instruction deficiency find the real problem faster.

## Mutual Respect in Practice

Mutual respect in a classroom means the teacher does not give impossible
assignments. She does not expect students to know things she has not
taught. She does not grade on criteria she has not published. She does
not change the rules mid-assignment without explanation.

Applied to agents: do not give impossible instructions. Do not expect the
agent to know things you have not provided in context. Do not grade
against criteria you have not specified. Do not change the constraints
mid-execution without resetting the context.

Respecting the agent's actual operational parameters—its context limit,
its knowledge cutoff, its tool availability, its instruction fidelity—is
not anthropomorphizing. It is accurate engineering. You cannot build a
reliable relationship with a system whose constraints you refuse to
acknowledge.

## When the Relationship Breaks Down

Classrooms have repair mechanisms. The teacher notices confusion, pauses,
restates. The student asks a question. Both parties signal that normal
operation has been disrupted and take corrective action before the
disruption compounds.

Agent sessions need the same mechanisms. Design checkpoints where the
agent signals its understanding back to you before proceeding. Build in
explicit uncertainty surfaces: "if you do not have enough information to
complete X, state what is missing rather than estimating." Treat
unexpected outputs as relationship signals—they are telling you something
about what the agent understood from the instruction.

## Learning Objectives

- Recognize the relationship dynamics present in every human-agent interaction session
- Write agent instructions that establish trust through completeness, consistency, and priority clarity
- Design explicit priority orderings that resolve conflicts without ambiguity
- Identify communication failures in instructions and take responsibility for their repair

## Key Takeaways

- Every agent interaction is a relationship with norms, expectations, and repair mechanisms
- Trust is operational: the agent relies on your instructions to be complete and consistent
- Priority must be explicit—the agent cannot correctly resolve conflicts without an ordering
- Communication failures are the instruction-writer's responsibility to repair first
- Mutual respect means acknowledging the agent's actual operational constraints

## Practice Prompts

1. Review the last three prompts you wrote. Identify any implicit priority
   orderings. Rewrite them with explicit primary objective, secondary
   objectives, and constraints.

2. An agent produced an output that missed your intent. Write two
   competing diagnoses: one that attributes the failure to model
   deficiency and one that attributes it to instruction deficiency. Which
   has more actionable remedies?

3. Design a checkpoint mechanism for a multi-step agent task. At which
   points should the agent surface its understanding back to the user?
   What signal tells you the relationship has broken down?
