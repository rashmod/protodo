# Learning Curriculum

This document defines the full learning curriculum implied by the project plans in this directory.

The goal is not to collect technologies.
The goal is to become capable of designing, building, securing, operating, and evolving a production-grade SaaS product end-to-end, while being honest about what is technically learnable by one person versus what is organizationally constrained.

This is a single unified curriculum, not a phase-by-phase roadmap.
Some topics may be revisited later, but no topic is allowed to remain permanently shallow.
If a topic is not learned deeply on the first pass, the expectation is that depth is achieved on a later revisit.

---

## Curriculum Principles

### 1. Capability-first, not tool-first

The curriculum is organized around capabilities.
Frameworks, vendors, and libraries are implementation details used to exercise those capabilities.

### 2. Depth is the standard

A topic counts as learned only when you can:

- explain the core concepts from first principles
- model the problem clearly
- compare alternative approaches and tradeoffs
- implement a serious version in software
- identify common failure modes
- validate the implementation through testing or simulation
- operate or maintain it realistically
- state the limits of your implementation honestly

### 3. Deferred depth is allowed, permanent shallowness is not

Some topics can start with a minimum working pass when another topic must come first.
If that happens, the later revisit must complete the topic to depth.

### 4. Every topic must include operations and failure thinking

Implementation alone is not enough.
For each capability, you must also learn:

- how it fails
- how failure is detected
- how it is tested
- how it is recovered
- what can and cannot honestly be claimed about it

### 5. Judgment matters as much as implementation

The curriculum includes technical topics, product topics, operational topics, security topics, and business-systems topics.
The point is to learn how a real product is built and run, not just how code is written.

---

## Curriculum Structure

The curriculum is organized into 18 major blocks:

1. Product, Scope, and Systems Judgment
2. Software Architecture and Domain Modeling
3. JavaScript, TypeScript, and Node.js Platform Expertise
4. Data, Databases, and Persistence
5. Backend Engineering
6. Frontend Engineering
7. Authentication, Authorization, and Multi-Tenancy
8. API, Contracts, and Integrations
9. Asynchronous Systems and Distributed Workflow Thinking
10. Testing and Quality Engineering
11. Search and Retrieval
12. Analytics and Experimentation
13. Billing, Entitlements, and Business Logic Economics
14. Security, Privacy, and Compliance
15. Reliability, Observability, and Operations
16. Performance Engineering
17. Developer Experience and Tooling
18. Delivery, Infrastructure, and Organizational Mechanics

---

## 1. Product, Scope, and Systems Judgment

### Why this exists

Without judgment, every later technical decision becomes noisier, more expensive, and less honest.
This block teaches how to decide what should be built, when it should be built, and to what maturity standard.

### What must be mastered

- lifecycle-based planning
- defining what "usable" means for a product stage
- scope cutting without breaking product integrity
- product value versus platform complexity
- build versus buy judgment
- cost-aware architectural decision making
- risk-based prioritization
- solo-feasibility judgment
- recognizing infrastructure cosplay
- understanding the difference between technical mechanisms and operational guarantees
- deciding what should be real, simulated, deferred, or omitted

### Subtopics

- maturity models for software products
- staged capability growth
- explicit non-goals and scope boundaries
- dependency-aware sequencing
- identifying irreversible decisions versus reversible decisions
- budget discipline
- tradeoff writing and decision records

### Prerequisites

- none

### Depth standard

You should be able to justify why a feature or system belongs now, later, or never, and defend that decision in terms of product value, cost, risk, and learning leverage.

### How to know you have learned it

- you can define a usable product boundary without vague language
- you can explain why certain "production" features are fake complexity in a given context
- you can write down a disciplined scope decision and its tradeoffs
- you can distinguish technical ambition from operational realism

---

## 2. Software Architecture and Domain Modeling

### Why this exists

The product may look simple on the surface, but the plan requires disciplined modeling of users, sessions, tenants, billing rules, policies, and long-term change.
This block teaches how to construct the conceptual backbone of the system.

### What must be mastered

- domain modeling
- entities, relationships, and invariants
- lifecycle and state modeling
- modular boundaries
- separation of concerns
- policy representation
- framework isolation
- extensibility without premature abstraction
- deletion semantics
- ownership and visibility semantics
- audit-relevant modeling

### Subtopics

- state transitions and invalid transitions
- business rule encoding
- bounded contexts at practical scale
- ownership models
- policy-driven behavior
- domain events as a modeling tool
- schema evolution pressure from product growth
- modeling for entitlements and permissions

### Prerequisites

- Product, Scope, and Systems Judgment

### Depth standard

You should be able to model core business concepts cleanly and produce an architecture where business semantics remain understandable even as tooling changes.

### How to know you have learned it

- you can model tasks, users, sessions, orgs, memberships, roles, plans, entitlements, and audit events coherently
- you can explain why a rule belongs in domain logic versus transport, UI, or storage glue
- you can identify broken or leaky boundaries in an application design
- you can evolve the model without accumulating ad hoc exceptions everywhere

---

## 3. JavaScript, TypeScript, and Node.js Platform Expertise

### Why this exists

This project is not language-agnostic in practice.
If the application is built in the JavaScript and TypeScript ecosystem, then deep expertise requires more than framework familiarity.
You need to understand the language, the runtime, the type system, the asynchronous execution model, and the ecosystem conventions that shape frontend and backend design.

### What must be mastered

- modern JavaScript semantics
- TypeScript as a modeling and boundary tool
- Node.js runtime model
- event loop and async behavior
- modules and package boundaries
- runtime error handling in JavaScript systems
- validation versus type guarantees
- testing patterns in JS and TS applications
- performance basics in Node.js and browser-adjacent code
- practical stack conventions for maintainable full-stack codebases

### Subtopics

- promises, tasks, and scheduling behavior
- async error propagation
- ESM versus CommonJS and package resolution
- TypeScript narrowing, generics, utility types, and type-driven API design
- shared types versus explicit contracts
- serialization boundaries
- runtime validation gaps
- Node.js streams, process model, and environment behavior
- package management discipline
- test isolation in JS and TS codebases

### Prerequisites

- Product, Scope, and Systems Judgment
- Software Architecture and Domain Modeling

### Depth standard

You should be able to use JavaScript, TypeScript, and Node.js deliberately rather than treating them as a thin syntax layer around frameworks.
That means understanding where the language and runtime shape architecture, correctness, performance, and debugging behavior.

### How to know you have learned it

- you can model application boundaries cleanly with TypeScript
- you can explain where types help and where runtime validation is still required
- you can reason about async behavior in Node.js without hand-waving
- you can identify common JS and TS failure modes in larger codebases
- you can explain how runtime behavior influences backend and frontend architecture choices

---

## 4. Data, Databases, and Persistence

### Why this exists

Nearly every other block depends on correct data reasoning.
Weak understanding here causes failures in auth, billing, tenancy, performance, auditability, and recovery.

### What must be mastered

- relational modeling
- normalization and denormalization tradeoffs
- indexing
- query design
- transactions
- consistency expectations at application scale
- migrations
- backup and restore thinking
- point-in-time recovery concepts
- read and write pattern analysis
- caching strategy
- search indexing concepts
- file and object storage concepts
- archival and retention strategy
- data correctness under change

### Subtopics

- foreign keys and constraints
- isolation levels in practical terms
- query planning basics
- hot rows, hot users, and hot partitions
- migration safety
- immutable versus mutable records
- soft delete versus hard delete design
- data lifecycle rules
- schema drift prevention
- selective use of non-relational storage

### Prerequisites

- Product, Scope, and Systems Judgment
- Software Architecture and Domain Modeling

### Depth standard

You should be able to design schemas, reason about correctness, predict common performance issues, and define credible recovery strategies.

### How to know you have learned it

- you can design schemas that reflect domain rules instead of accidental shapes
- you can explain why a query or index exists and what failure it prevents
- you can plan and execute safe schema migrations
- you can explain how data is restored, retained, deleted, or archived
- you can reason about when a cache or search index helps and what consistency tradeoffs it creates

---

## 5. Backend Engineering

### Why this exists

This block teaches how to turn modeled product logic into a maintainable, evolvable backend rather than an endpoint collection.

### What must be mastered

- request lifecycle design
- application service boundaries
- validation boundaries
- persistence boundaries
- transactional behavior
- error handling and error taxonomy
- concurrency basics
- integration boundaries
- backend performance basics
- maintainable code organization
- coupling control between framework, domain, and infrastructure

### Subtopics

- controllers versus services versus repositories
- orchestration versus pure domain rules
- idempotent writes at the application layer
- handling partial failure
- consistency in command processing
- backend composition patterns
- practical observability hooks in backend code

### Prerequisites

- Software Architecture and Domain Modeling
- Data, Databases, and Persistence

### Depth standard

You should be able to build a backend that is understandable, testable, failure-aware, and capable of absorbing future product complexity.

### How to know you have learned it

- you can explain where business logic lives and why
- you can add features without turning every request path into special-case code
- you can reason about transactional boundaries and failure recovery
- you can identify when an implementation is too coupled to a framework or vendor

---

## 6. Frontend Engineering

### Why this exists

The frontend in this plan is not just a rendering layer.
It is responsible for correctness, accessibility, responsiveness, state discipline, and user-facing resilience.

### What must be mastered

- server state versus client state
- state ownership
- caching and invalidation
- optimistic update correctness
- form architecture
- error boundaries
- responsive design
- accessibility as a system property
- frontend performance reasoning
- component system thinking
- telemetry and bug reporting
- user-facing resilience under failure

### Subtopics

- cache invalidation and stale data tradeoffs
- optimistic UI rollback behavior
- long-list rendering patterns
- search interaction patterns
- keyboard and screen-reader support
- interaction feedback patterns
- frontend error classification
- design system fundamentals
- visual consistency versus speed of iteration

### Prerequisites

- Software Architecture and Domain Modeling
- Backend Engineering

### Depth standard

You should be able to build a frontend that remains coherent under latency, partial failure, accessibility requirements, and product growth.

### How to know you have learned it

- you can explain where state belongs and why
- you can build optimistic flows without corrupting user expectations
- you can detect and fix accessibility failures systematically
- you can reason about rendering performance and user-perceived responsiveness
- you can keep UI behavior consistent as complexity grows

---

## 7. Authentication, Authorization, and Multi-Tenancy

### Why this exists

This is one of the highest-risk and highest-value areas in the entire plan.
It combines identity, access, policy, isolation, and auditability.

### What must be mastered

- authentication concepts
- session management
- password-based identity flows
- recovery flows and anti-enumeration
- suspicious login reasoning
- OAuth concepts
- magic link concepts
- MFA concepts
- authorization models
- RBAC
- ABAC
- policy evaluation
- tenant modeling
- org and workspace semantics
- membership semantics
- revocation behavior
- tenant isolation
- auditability of access decisions

### Subtopics

- account lifecycle states
- session inventory and forced revocation
- access inheritance and overrides
- resource ownership and visibility
- policy storage and interpretation
- privilege escalation risks
- cross-tenant data leakage paths
- role mutation effects on active sessions
- future-proofing for richer policy models

### Prerequisites

- Software Architecture and Domain Modeling
- Data, Databases, and Persistence
- Backend Engineering

### Depth standard

You should be able to design and implement access systems that preserve identity correctness, authorization correctness, and tenant isolation under normal and failure conditions.

### How to know you have learned it

- you can explain authn versus authz precisely
- you can model users, sessions, memberships, and roles without ambiguity
- you can explain why a user can or cannot access a resource
- you can reason about revocation, recovery, and privilege changes safely
- you can identify likely tenant-isolation failures before they happen

---

## 8. API, Contracts, and Integrations

### Why this exists

A serious product is defined partly by the quality and stability of its interfaces.
This block teaches how systems communicate, evolve, and fail across boundaries.

### What must be mastered

- REST semantics
- GraphQL concepts and tradeoffs
- contract design
- pagination
- filtering and sorting
- error contract design
- versioning strategy
- deprecation strategy
- idempotency concepts
- rate limiting policy
- webhook design
- import and export semantics
- third-party integration boundaries
- SDK thinking

### Subtopics

- stable resource modeling
- mutation semantics
- handling partial imports
- schema evolution
- backward compatibility
- contract documentation
- data mapping across systems
- integration reliability expectations
- auth and authz across integration boundaries

### Prerequisites

- Backend Engineering
- Authentication, Authorization, and Multi-Tenancy

### Depth standard

You should be able to design interfaces that are usable, evolvable, failure-aware, and explicit about compatibility guarantees.

### How to know you have learned it

- you can explain why an API shape is stable or fragile
- you can design idempotent behavior intentionally rather than accidentally
- you can reason about versioning and deprecation before breakage occurs
- you can define webhook and import/export behavior under retries and partial failure

---

## 9. Asynchronous Systems and Distributed Workflow Thinking

### Why this exists

Once work moves outside the request-response path, correctness becomes harder.
This block teaches how to reason about queues, retries, reminders, webhooks, background workflows, and partial failure.

### What must be mastered

- asynchronous workflow design
- queues and workers
- delivery guarantees
- retry strategies
- backoff strategies
- dead-letter queues
- idempotent consumers
- scheduling
- reminder semantics
- event-driven architecture
- webhook ingestion
- eventual consistency
- backpressure
- circuit breakers
- graceful degradation
- failure isolation

### Subtopics

- at-least-once delivery consequences
- duplicate processing defenses
- poison message handling
- work partitioning
- job visibility and tracing
- saga-like workflow thinking at practical scale
- dependency failure containment
- bounded guarantees in notification systems

### Prerequisites

- Backend Engineering
- Data, Databases, and Persistence
- API, Contracts, and Integrations

### Depth standard

You should be able to design asynchronous systems that remain correct and diagnosable even when messages duplicate, dependencies fail, and work arrives unevenly.

### How to know you have learned it

- you can explain what guarantees a queue or worker does and does not provide
- you can design retry behavior without creating silent corruption
- you can reason about eventual consistency rather than assuming synchronous truth
- you can contain or surface failures instead of letting them disappear

---

## 10. Testing and Quality Engineering

### Why this exists

Testing in this project is not just a support practice.
It is its own engineering discipline because correctness must be defended across domain logic, APIs, UI behavior, auth rules, tenancy boundaries, billing rules, and operational workflows.

### What must be mastered

- testing strategy across the stack
- unit, integration, end-to-end, and contract testing
- fixture and test data design
- deterministic testing and flaky-test control
- migration and rollback testing
- auth, authz, and tenancy verification
- performance and load test design basics
- failure-path and recovery-path testing
- testability as an architectural property

### Subtopics

- test pyramid tradeoffs in modern web systems
- mocking versus real integration boundaries
- ephemeral test environments
- security verification as testing practice
- regression prevention
- snapshot discipline versus abuse
- mutation-sensitive test design
- failure injection and chaos-style validation

### Prerequisites

- Backend Engineering
- Frontend Engineering
- Authentication, Authorization, and Multi-Tenancy
- API, Contracts, and Integrations

### Depth standard

You should be able to design a testing strategy that increases confidence in the real risks of the system rather than merely increasing test count.

### How to know you have learned it

- you can explain what each test layer is responsible for
- you can map tests to important business and technical failure modes
- you can identify where integration coverage is required instead of mocked certainty
- you can keep the test suite trustworthy as the system evolves

---

## 11. Search and Retrieval

### Why this exists

Search is not just a storage detail.
It is a separate product and engineering capability with its own indexing, ranking, consistency, and UX tradeoffs.

### What must be mastered

- search use-case modeling
- indexing pipelines
- query semantics
- ranking and relevance basics
- autocomplete and suggestion systems
- eventual consistency between source-of-truth data and search indexes
- search failure modes and fallback behavior
- operational maintenance of search systems

### Subtopics

- tokenization and normalization concepts
- filtering versus full-text search
- typo tolerance and relevance tradeoffs
- index rebuild and backfill strategies
- search analytics and feedback loops
- privacy and retention implications for indexed data

### Prerequisites

- Data, Databases, and Persistence
- Frontend Engineering
- API, Contracts, and Integrations

### Depth standard

You should be able to design search behavior that is useful to users, operationally maintainable, and explicit about freshness and relevance limits.

### How to know you have learned it

- you can explain why a search system is separate from the primary database path
- you can reason about relevance, freshness, and filtering tradeoffs
- you can define how indexing lag affects user experience and correctness
- you can explain how search behavior is validated and maintained over time

---

## 12. Analytics and Experimentation

### Why this exists

Product analytics is not the same as observability.
This block exists because a real SaaS product needs deliberate instrumentation for user behavior, feature adoption, funnels, retention, and experiments.

### What must be mastered

- event taxonomy design
- analytics instrumentation strategy
- data quality for product events
- funnels and conversion thinking
- cohort and retention analysis concepts
- feature adoption measurement
- A/B testing mechanics and limitations
- distinguishing product analytics from operational telemetry
- privacy-aware analytics decisions

### Subtopics

- naming and schema discipline for events
- analytics drift and broken dashboards
- attribution pitfalls
- experiment design risks
- warehouse versus product-tool tradeoffs
- bias in product measurement
- user identity stitching and session analytics boundaries

### Prerequisites

- Product, Scope, and Systems Judgment
- Frontend Engineering
- Backend Engineering
- API, Contracts, and Integrations

### Depth standard

You should be able to instrument product behavior intentionally, trust the meaning of the resulting data, and reason about how experiments and metrics influence product decisions.

### How to know you have learned it

- you can define an event taxonomy without ad hoc naming chaos
- you can distinguish product metrics from engineering telemetry cleanly
- you can identify where analytics data becomes misleading or low quality
- you can explain what an experiment can and cannot tell you

---
## 13. Billing, Entitlements, and Business Logic Economics

### Why this exists

Monetization adds policy-heavy state transitions that must stay aligned with product access rules.
This block teaches how money, product features, and entitlement enforcement interact.

### What must be mastered

- pricing model thinking
- plan modeling
- entitlements
- feature gating
- usage limits
- subscription lifecycle
- billing state synchronization
- invoices and receipts concepts
- proration concepts
- coupon concepts
- billing webhooks
- failed payment behavior
- separation between billing provider data and application access logic
- enforcement points for plan restrictions

### Subtopics

- free versus paid semantics
- plan changes and transition rules
- grace periods
- access during billing ambiguity
- reconciling provider events with internal state
- internal admin workflows for billing support
- usage metering concepts
- kill switches and manual overrides

### Prerequisites

- Software Architecture and Domain Modeling
- Backend Engineering
- API, Contracts, and Integrations
- Asynchronous Systems and Distributed Workflow Thinking

### Depth standard

You should be able to model and enforce monetization rules without tightly coupling business access to external vendor behavior.

### How to know you have learned it

- you can explain exactly how a plan affects access rights
- you can handle upgrades, downgrades, cancellations, and failures without ad hoc logic
- you can reason about billing webhooks as eventually consistent inputs rather than synchronous truth
- you can identify where entitlement rules must be enforced across the product

---

## 14. Security, Privacy, and Compliance

### Why this exists

Security and privacy are recurring design constraints in the plan, not a final audit step.
This block teaches how to reason about attackers, data risk, and governance claims.

### What must be mastered

- threat modeling
- trust boundaries
- secure input handling
- CSRF, XSS, and SQL injection prevention
- secure session and token handling
- secrets management
- dependency risk
- abuse prevention
- content security policy
- encryption in transit
- encryption at rest concepts
- audit trails
- vulnerability disclosure expectations
- privacy-by-design thinking
- retention and deletion policy design
- right-to-be-forgotten workflows
- consent concepts
- data residency concepts
- access review concepts
- difference between technical controls and real compliance programs

### Subtopics

- attacker capability assumptions
- business logic abuse
- secure defaults
- privilege boundaries
- log privacy and secret leakage prevention
- compliance architecture versus audited compliance
- policy enforcement and evidence generation
- deletion semantics across primary and derived data

### Prerequisites

- Authentication, Authorization, and Multi-Tenancy
- Data, Databases, and Persistence
- API, Contracts, and Integrations
- Asynchronous Systems and Distributed Workflow Thinking

### Depth standard

You should be able to identify major attack surfaces, reduce common web risks, design safer data-handling flows, and describe compliance-related claims with precision rather than marketing language.

### How to know you have learned it

- you can draw trust boundaries and explain what crosses them
- you can find common web-app security failures in your own designs
- you can define retention and deletion rules that survive real system complexity
- you can separate "has controls" from "is compliant" without confusion

---

## 15. Reliability, Observability, and Operations

### Why this exists

A product becomes real when failures are visible, diagnosable, recoverable, and managed with discipline.
This block teaches how to see and run systems, not just build them.

### What must be mastered

- structured logging
- metrics design
- tracing concepts
- error tracking
- instrumentation strategy
- RED and USE thinking
- dashboards
- alert design
- SLO and SLI concepts
- error budgets
- incident detection
- incident triage
- runbooks
- postmortems
- maintenance windows
- backup drills
- restore drills
- on-call realities
- cost-aware observability

### Subtopics

- correlation across logs, metrics, and traces
- noisy versus actionable alerts
- operational signal selection
- mean time to detect and recover thinking
- restoring confidence after incidents
- one-person operations boundaries
- communicating outages honestly
- data recovery validation

### Prerequisites

- Backend Engineering
- Data, Databases, and Persistence
- Asynchronous Systems and Distributed Workflow Thinking
- Security, Privacy, and Compliance

### Depth standard

You should be able to instrument systems meaningfully, detect failures quickly, investigate root causes, and define credible recovery procedures.

### How to know you have learned it

- you can explain what each important operational signal is for
- you can trace a failure from symptom to likely cause using instrumentation
- you can define alerts that are actionable instead of noisy
- you can explain how backup and restore are validated rather than assumed
- you can write and use runbooks and postmortems with real rigor

---

## 16. Performance Engineering

### Why this exists

Performance is not a side effect of good intentions.
It is a separate engineering discipline spanning frontend, backend, database, network, and caching behavior.

### What must be mastered

- latency and throughput thinking
- profiling and bottleneck analysis
- query and index performance workflow
- rendering and interaction performance
- cache-performance tradeoffs
- load testing interpretation
- performance regression prevention
- cost versus performance tradeoffs

### Subtopics

- tail latency and user-perceived responsiveness
- cold-start and warm-path differences
- performance budgets
- hotspot analysis
- backpressure as performance control
- concurrency bottlenecks
- measurement before optimization

### Prerequisites

- Frontend Engineering
- Backend Engineering
- Data, Databases, and Persistence
- Reliability, Observability, and Operations

### Depth standard

You should be able to measure, diagnose, and improve performance problems systematically rather than relying on folklore or blind tuning.

### How to know you have learned it

- you can identify the likely bottleneck before changing code blindly
- you can explain the tradeoff between correctness, cost, and speed in an optimization
- you can connect performance symptoms to logs, metrics, traces, and profiling data
- you can prevent performance work from becoming cargo cult optimization

---

## 17. Developer Experience and Tooling

### Why this exists

Developer productivity and codebase maintainability are not accidental.
This block exists because serious full-stack systems need good internal ergonomics, quality feedback loops, and disciplined tooling choices.

### What must be mastered

- linting and formatting strategy
- type-checking discipline
- local development ergonomics
- package and workspace management
- code generation boundaries
- CI feedback quality
- release and versioning workflow
- monorepo versus multirepo tradeoffs
- migration and seeding ergonomics
- internal docs and onboarding ergonomics

### Subtopics

- fast feedback loops
- tooling sprawl control
- pre-commit and pre-merge quality gates
- reproducible dev environments
- local secrets handling discipline
- balancing automation against opacity
- keeping tooling aligned with architecture instead of fighting it

### Prerequisites

- JavaScript, TypeScript, and Node.js Platform Expertise
- Backend Engineering
- Frontend Engineering
- Testing and Quality Engineering

### Depth standard

You should be able to design and maintain a development workflow that improves speed, confidence, and consistency without hiding important system behavior.

### How to know you have learned it

- you can explain why each major tool exists in the workflow
- you can improve developer feedback speed without reducing trustworthiness
- you can prevent tooling choices from creating architectural confusion
- you can keep local and CI behavior aligned enough to be trustworthy

---
## 18. Delivery, Infrastructure, and Organizational Mechanics

### Why this exists

This block teaches how software leaves local development and becomes repeatably shippable, maintainable, and operable in real environments.
It also covers the organizational support systems that surround a real product.

### What must be mastered

- local and production parity thinking
- environment strategy
- HTTPS local setup concepts
- deployment pipelines
- CI and CD
- rollback strategy
- preview environments
- zero-downtime concepts
- migration rollout safety
- containerization concepts
- infrastructure as code concepts
- orchestration concepts
- autoscaling concepts
- load balancing concepts
- CDN concepts
- multi-region concepts
- architecture diagrams
- RFC-style decision writing
- operational documentation
- support workflow design
- admin tooling design
- impersonation risks and controls
- knowledge-base and support process basics

### Subtopics

- environment drift
- deployment risk classification
- release gating
- infrastructure ownership boundaries
- managed services versus self-hosting tradeoffs
- support-facing product tooling
- internal versus external workflows
- documenting operational expectations honestly

### Prerequisites

- Product, Scope, and Systems Judgment
- Backend Engineering
- Frontend Engineering
- Reliability, Observability, and Operations

### Depth standard

You should be able to take a system from local development to disciplined deployment and support, with explicit awareness of deployment risk, environment differences, and organizational boundaries.

### How to know you have learned it

- you can explain how changes move from local work to deployed reality
- you can reason about rollback and migration safety instead of assuming deployments are reversible
- you can document architecture, decisions, and operational procedures clearly
- you can explain which delivery or infra capabilities are real versus simulated in your setup

---

## Cross-Cutting Expectations

These topics must appear throughout the curriculum, not in one isolated section.

### Tradeoff analysis

For every major system, learn to reason about:

- simplicity versus flexibility
- correctness versus speed
- cost versus realism
- build versus buy
- user value versus platform complexity

### Failure-mode thinking

For every major system, ask:

- how does it fail?
- how is failure detected?
- what is the blast radius?
- what happens to user data?
- how is it recovered?
- what guarantees are real and which are merely aspirational?

### Policy thinking

For auth, access, billing, retention, deletion, rate limits, and operational controls, always define:

- what the policy is
- where it is enforced
- how it is tested
- how it is audited
- how it changes safely

### Testing and verification

Every block should include:

- correctness validation
- edge-case testing
- failure-path testing
- contract verification where relevant
- operational validation where relevant
- restore or rollback verification where relevant

### Honest operating claims

For every capability, distinguish:

- implemented mechanism
- tested behavior
- operating practice
- guaranteed outcome

Do not claim more maturity than actually exists.

---

## Suggested Study Order

This is the recommended curriculum order for depth-first learning:

1. Product, Scope, and Systems Judgment
2. Software Architecture and Domain Modeling
3. JavaScript, TypeScript, and Node.js Platform Expertise
4. Data, Databases, and Persistence
5. Backend Engineering
6. Frontend Engineering
7. Authentication, Authorization, and Multi-Tenancy
8. API, Contracts, and Integrations
9. Asynchronous Systems and Distributed Workflow Thinking
10. Testing and Quality Engineering
11. Search and Retrieval
12. Analytics and Experimentation
13. Billing, Entitlements, and Business Logic Economics
14. Security, Privacy, and Compliance
15. Reliability, Observability, and Operations
16. Performance Engineering
17. Developer Experience and Tooling
18. Delivery, Infrastructure, and Organizational Mechanics

This order is not a product-release plan.
It is a learning order intended to build conceptual depth in a stable sequence.

---

## Topics Where Deferred Depth Is Acceptable

These topics may begin with a minimum functional pass if another dependency comes first, but they must later be completed to depth:

- GraphQL
- ABAC beyond basic policy foundations
- advanced search and ranking
- Kubernetes and orchestration depth
- autoscaling and load balancing depth
- multi-region architecture
- advanced performance engineering
- formal incident-process mechanics
- full compliance and governance frameworks

Deferred depth means:

- the topic is explicitly marked as incomplete
- its current limit is understood
- a later revisit is required
- early competence is not confused with mastery

---

## Curriculum Completion Standard

This curriculum is complete only when you can do all of the following:

- model a SaaS domain clearly
- build a serious full-stack application
- implement identity, access control, and tenant isolation safely
- design APIs and integrations that evolve without chaos
- reason correctly about asynchronous workflows and failure
- test critical system behavior with discipline across the stack
- design search, analytics, and performance behavior intentionally rather than accidentally
- connect billing state to product access rules coherently
- secure major application attack surfaces
- instrument and operate the system with discipline
- keep the developer workflow, deployment path, and operational docs trustworthy
- document tradeoffs, policies, and operational limits honestly

That is the target standard implied by the planning documents in this directory.
