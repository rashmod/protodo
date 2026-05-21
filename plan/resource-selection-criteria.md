# Resource Selection Criteria

This document defines how books, courses, long-form written resources, and teaching materials should be selected for the curriculum in `learning-curriculum.md`.

The goal is not to gather popular resources.
The goal is to select resources that can actually produce depth in the capabilities required by this project.

This rubric exists to prevent three common failures:

- choosing tool tutorials instead of conceptual teaching
- choosing beginner resources that stop before real tradeoffs and failure cases
- choosing fragmented resources that leave major gaps in judgment, operations, or system design

---

## Global Selection Rules

These rules apply to all curriculum blocks.

### 1. Prefer teaching over reference

Documentation is useful, but it is usually not the primary teaching resource.
The preferred resource types are:

- books
- full courses
- long-form structured written series
- workshop-style deep dives
- practical academies with exercises

Documentation may be used later to implement details, but it should not be the default answer to a learning need.

### 2. Prefer conceptual depth over stack popularity

A resource is not good because it teaches a fashionable tool.
A good resource explains:

- concepts
- tradeoffs
- constraints
- failure modes
- operational implications
- why one approach is chosen over another

### 3. Resources must match the intended depth

A resource is insufficient if it only teaches:

- syntax
- setup
- boilerplate
- happy-path implementation
- demo-scale assumptions

A resource is strong if it teaches:

- first-principles reasoning
- design tradeoffs
- realistic complexity
- debugging and failure analysis
- system limits
- maintenance concerns

### 4. Multi-resource coverage is allowed when one resource is not enough

Some blocks are too broad for a single source.
In those cases, selection should intentionally combine resources with different strengths, for example:

- one conceptual book
- one implementation-heavy course
- one security or operations supplement

This is acceptable only if the combined set closes the important gaps.

### 5. Avoid premature specialization

For a topic that appears later in the curriculum, avoid choosing ultra-specialized resources too early unless they improve understanding of the underlying capability.
For example:

- do not start with Kubernetes before learning delivery and operations fundamentals
- do not start with advanced ABAC papers before basic authz reasoning is solid
- do not start with vendor-specific observability tooling before learning what should be observed

### 6. Prefer resources that acknowledge operational reality

A strong resource should ideally discuss:

- failure modes
- rollback or recovery behavior
- production constraints
- security considerations
- maintenance burden
- scope limits

Resources that present everything as smooth and linear are usually too shallow.

### 7. Prefer resources with strong explanatory structure

A strong resource should make it clear:

- what problem is being solved
- what assumptions are being made
- what design options exist
- why the chosen approach is reasonable
- what would change at greater scale or stricter requirements

### 8. Avoid resources that are merely clone builds

Clone projects can be useful for exposure but are poor as core curriculum resources when they do not explain:

- boundaries
- tradeoffs
- security
- data correctness
- operational constraints
- future evolution

### 9. Favor durable resources for foundational topics

For foundational topics such as:

- data modeling
- authz
- distributed systems
- security
- reliability
- product/system judgment

prefer resources whose value survives tooling change.

### 10. Verify recency where implementation details matter

Books and courses can be older if the concepts are durable.
However, if a resource depends heavily on fast-changing tooling or platform behavior, recency matters and should be checked before selection.

---

## What Makes a Resource Strong

A strong resource usually has most of these characteristics:

- teaches from concepts to implementation
- includes tradeoff analysis
- includes realistic examples, not only toy examples
- discusses failure cases
- discusses scaling or evolution pressure
- distinguishes fundamentals from tooling
- has a coherent structure rather than disconnected tips
- helps the learner form judgment, not just imitate steps

## What Makes a Resource Weak

A weak resource usually has one or more of these characteristics:

- mostly setup and tooling walkthrough
- overly beginner-oriented without deeper follow-through
- no discussion of constraints or alternatives
- no failure-mode analysis
- no security or operational context where such context is required
- strongly tied to one stack without surfacing durable principles
- optimized for speed of completion rather than depth of understanding

---

## Block-by-Block Selection Criteria

## 1. Product, Scope, and Systems Judgment

### Resource goal

Teach how to decide what to build, when to build it, how to constrain scope, and how to reason honestly about realism, cost, and maturity.

### Good resources must cover

- product scoping logic
- staged maturity thinking
- build versus buy judgment
- cost-aware decision making
- sequencing and prioritization
- risk-based decision making
- difference between technical possibility and operational claim
- realistic product evolution

### Nice-to-have coverage

- startup or SaaS strategy framing
- examples of overbuilding versus disciplined scoping
- architecture and product tradeoff writing

### Bad fit signals

- purely motivational startup content
- generic product-management advice without technical depth
- architecture content with no product or cost judgment
- "move fast" advice detached from long-term maintainability

### Best resource types

- books
- long-form essays or essays series
- systems/product strategy courses for engineers

### Selection note

This block requires judgment more than tooling.
A resource here must improve decision quality, not just planning vocabulary.

---

## 2. Software Architecture and Domain Modeling

### Resource goal

Teach how to model business concepts, encode rules, define boundaries, and keep core logic stable as the application grows.

### Good resources must cover

- domain modeling
- entities, invariants, and lifecycles
- state transitions
- modular decomposition
- separation of concerns
- boundaries between domain, application, and infrastructure logic
- modeling for future change without premature abstraction
- policy-heavy modeling

### Nice-to-have coverage

- practical DDD without ceremony
- event-oriented modeling where useful
- examples of refactoring weak models into strong ones

### Bad fit signals

- architecture diagrams without concrete modeling guidance
- abstract DDD content with little application to web products
- framework-centric tutorials that call folder structure "architecture"
- resources that celebrate indirection without explaining cost

### Best resource types

- architecture books
- long-form written guides
- advanced software design courses

### Selection note

This block should strongly improve your ability to model auth, billing, tenancy, and policy-heavy behavior.
If a resource cannot help with those, it is too weak.

---

## 3. Data, Databases, and Persistence

### Resource goal

Teach how data should be modeled, queried, protected, migrated, recovered, and evolved as a system of record.

### Good resources must cover

- relational data modeling
- indexing and query tradeoffs
- transactions and isolation in practical terms
- data correctness and constraints
- migration strategy
- backup and restore thinking
- soft versus hard deletion semantics
- retention and archival concepts
- caching and search as secondary systems
- how access patterns affect schema choices

### Nice-to-have coverage

- query plan analysis
- operational database concerns
- selective use of non-relational systems

### Bad fit signals

- resources that teach only ORM syntax
- SQL resources without application design context
- database courses that stop at CRUD and joins
- high-scale internals resources with no practical app translation

### Best resource types

- practical SQL/database books
- database design courses
- systems books with strong data chapters

### Selection note

This block must support later work in auth, billing, audit, search, and recovery.
If a resource cannot support those concerns, it is incomplete.

---

## 4. Backend Engineering

### Resource goal

Teach how to build application backends with clear boundaries, consistent behavior, and room for future complexity.

### Good resources must cover

- request lifecycle structure
- service and boundary design
- validation placement
- transactional reasoning
- error handling strategy
- idempotent command thinking
- integration boundaries
- code organization under growth
- coupling control between domain and framework
- partial failure handling

### Nice-to-have coverage

- concurrency issues in common web backends
- architectural refactoring patterns
- practical performance reasoning

### Bad fit signals

- endpoint-by-endpoint CRUD tutorials
- framework feature tours presented as backend architecture
- resources that hide business logic inside controllers or views without discussion
- no discussion of failure handling or transactions

### Best resource types

- full-stack backend courses with architectural depth
- books on application architecture
- practical server design series

### Selection note

The key test is whether the resource teaches a backend as a maintainable system, not as a pile of routes.

---

## 5. Frontend Engineering

### Resource goal

Teach how to build product UIs that remain correct, resilient, accessible, observable, and performant as complexity grows.

### Good resources must cover

- state ownership
- server state versus client state
- cache invalidation thinking
- optimistic update correctness
- forms and validation UX
- error boundaries and fallback behavior
- accessibility fundamentals and workflow
- component system thinking
- responsive behavior
- frontend performance patterns
- telemetry or bug-reporting considerations

### Nice-to-have coverage

- design system thinking
- long-list virtualization
- search interaction design
- offline or degraded-mode behavior

### Bad fit signals

- resources that focus only on component syntax
- UI clone builds with no state architecture reasoning
- resources that treat accessibility as optional polish
- resources that ignore failure and latency behavior

### Best resource types

- advanced frontend courses
- written series on state architecture
- UI engineering books and workshops

### Selection note

This block should improve both correctness and user experience under real conditions, not just visual output.

---

## 6. Authentication, Authorization, and Multi-Tenancy

### Resource goal

Teach identity, access control, and tenant isolation as serious system-design topics rather than library setup tasks.

### Good resources must cover

- authn versus authz distinction
- sessions and identity flows
- recovery and anti-enumeration concepts
- role and permission design
- RBAC and ABAC tradeoffs
- policy enforcement
- resource ownership and visibility
- tenant-aware access control
- org and membership modeling
- revocation behavior
- auditability of access changes and decisions
- common security failure modes in auth and authz

### Nice-to-have coverage

- suspicious login handling
- delegated identity concepts
- policy storage patterns
- threat modeling for multi-tenant apps

### Bad fit signals

- resources that are mostly Auth.js, NextAuth, or OAuth provider setup
- security content that ignores product authorization semantics
- multi-tenant content that only discusses database schemas without access logic
- RBAC resources that stop at static roles with no nuance

### Best resource types

- security-focused application architecture resources
- identity and access control books or courses
- advanced web-security resources with SaaS access-control perspective

### Selection note

This block is one of the places where shallow resources are most dangerous.
A resource must help you reason about why access is correct, not just how login works.

---

## 7. API, Contracts, and Integrations

### Resource goal

Teach how to design durable interfaces and evolve them without breaking users or integrations.

### Good resources must cover

- REST semantics
- GraphQL tradeoffs, not just syntax
- pagination, filtering, and sorting design
- contract design and stability
- error design
- idempotency concepts
- webhook design and failure behavior
- versioning and deprecation strategy
- import/export semantics
- third-party integration boundaries

### Nice-to-have coverage

- SDK design thinking
- contract testing
- partial-failure handling in integrations

### Bad fit signals

- pure GraphQL schema tutorials with no contract thinking
- REST tutorials that focus only on route naming
- resources that ignore retries, duplicate delivery, or compatibility guarantees
- import/export walkthroughs without data-quality semantics

### Best resource types

- API design books
- integration architecture resources
- deep-dive courses on API evolution and contracts

### Selection note

The resource must improve your ability to design APIs that survive change and failure, not just expose data.

---

## 8. Asynchronous Systems and Distributed Workflow Thinking

### Resource goal

Teach how to reason about work that happens later, elsewhere, more than once, or partially fails.

### Good resources must cover

- queues and workers
- delivery guarantees
- retries and backoff
- dead-letter handling
- idempotent consumers
- scheduling
- reminder and notification semantics
- event-driven thinking
- webhook ingestion behavior
- eventual consistency
- backpressure
- circuit breakers
- graceful degradation
- failure isolation

### Nice-to-have coverage

- workflow orchestration tradeoffs
- poison message handling
- practical saga-like thinking
- observability for async workflows

### Bad fit signals

- queue tutorials that only show job enqueue and dequeue syntax
- event-driven content that ignores duplicates and partial failure
- messaging resources detached from application correctness
- no operational discussion of backlog, retries, or poison jobs

### Best resource types

- distributed systems books with application relevance
- queue and async architecture courses
- practical systems-design resources

### Selection note

This block must teach correctness under failure.
If a resource stays on the happy path, it is not sufficient.

---

## 9. Billing, Entitlements, and Business Logic Economics

### Resource goal

Teach how plans, money, access rules, and product policy fit together coherently.

### Good resources must cover

- plan and pricing-model thinking
- feature entitlements
- usage limits
- subscription lifecycle
- billing state transitions
- provider webhook synchronization
- failures and ambiguity in billing state
- free versus paid semantics
- access enforcement points
- decoupling internal access logic from external provider state

### Nice-to-have coverage

- grace periods
- internal billing support workflows
- admin override patterns
- metering concepts

### Bad fit signals

- Stripe-only implementation walkthroughs with no product policy reasoning
- billing tutorials that assume provider state is the only truth
- monetization content focused on marketing rather than enforcement design
- no treatment of access during payment failure or state lag

### Best resource types

- SaaS monetization architecture guides
- billing-system case studies
- selective implementation courses plus conceptual supplements

### Selection note

This block is under-taught by most resources.
Expect to combine multiple sources rather than find one perfect course.

---

## 10. Security, Privacy, and Compliance

### Resource goal

Teach how to identify and reduce risk, design safer systems, and speak accurately about privacy and compliance-related capabilities.

### Good resources must cover

- threat modeling
- trust boundaries
- common web vulnerabilities and defenses
- secure session and token handling
- secrets management concepts
- abuse prevention
- audit trail thinking
- data retention and deletion policy design
- privacy-by-design concepts
- right-to-be-forgotten workflows
- data residency and governance concepts
- difference between technical controls and real compliance programs

### Nice-to-have coverage

- business logic abuse
- secure logging and privacy of operational data
- control evidence and compliance architecture

### Bad fit signals

- checklist-style security resources without attacker reasoning
- vulnerability lists without system design implications
- compliance content that is mostly legal language with no systems translation
- purely offensive-security resources with no defensive design guidance

### Best resource types

- practical web-security academies
- security engineering books
- privacy/compliance architecture guides

### Selection note

This block needs both attacker thinking and systems-design thinking.
One without the other is not enough.

---

## 11. Reliability, Observability, and Operations

### Resource goal

Teach how to make systems visible, diagnosable, recoverable, and operationally credible.

### Good resources must cover

- structured logging
- metrics design
- tracing concepts
- signal selection
- dashboard design
- alerting quality
- SLO and SLI concepts
- incident detection and triage
- runbooks
- postmortems
- backup and restore drills
- maintenance and recovery thinking
- solo-operator realism

### Nice-to-have coverage

- RED and USE framing
- cost-aware instrumentation
- operational communication patterns
- restoring confidence after incidents

### Bad fit signals

- monitoring tool tutorials with no signal strategy
- logging content that never discusses how logs are used operationally
- SRE content too abstract to map to an application
- resources that treat observability as dashboards only

### Best resource types

- SRE books and workbooks
- observability courses with design depth
- operations-focused case studies

### Selection note

This block must teach how to run systems, not just how to install tools that watch them.

---

## 12. Delivery, Infrastructure, and Organizational Mechanics

### Resource goal

Teach how systems move from local development to repeatable deployment and structured operational support.

### Good resources must cover

- environment strategy
- deployment pipelines
- CI/CD concepts
- rollback and migration safety
- preview environments
- local/prod parity thinking
- containerization concepts
- infrastructure as code concepts
- orchestration concepts
- autoscaling and load-distribution concepts
- architecture diagrams and RFC writing
- admin workflows
- support workflows
- impersonation risks and controls
- documenting what is real versus simulated in infra and operations

### Nice-to-have coverage

- managed versus self-hosted tradeoffs
- release governance
- organizational ownership boundaries
- support tooling design

### Bad fit signals

- container or cloud tutorials that ignore delivery strategy
- CI/CD tutorials that are just YAML memorization
- Kubernetes-first resources with no deployment or operations foundation
- admin-tool content with no security or governance discussion

### Best resource types

- delivery and platform engineering courses
- practical DevOps books
- infrastructure and release-engineering resources

### Selection note

This block must improve your ability to ship and support a system with controlled risk.
It is broader than learning one cloud or one tool.

---

## Resource Mix Guidance

Not every block should be served by the same resource type.
In general:

- foundational conceptual blocks benefit most from books and long-form written resources
- implementation-heavy blocks benefit from one strong course plus one conceptual supplement
- security and reliability usually require both conceptual and hands-on resources
- poorly taught blocks such as billing or multi-tenancy often require a custom mix rather than one canonical course

A typical strong mix for a hard block might look like:

- one concept-heavy book
- one practical implementation course
- one focused supplement for failure modes, security, or operations

---

## Resource Evaluation Template

When evaluating a candidate resource for any block, ask:

1. What capability is this resource actually teaching?
2. Does it teach first principles or mostly tool usage?
3. Does it discuss tradeoffs and alternatives?
4. Does it include failure modes, debugging, or operational concerns?
5. Does it stop at toy examples or reach realistic product complexity?
6. What important parts of the block does it not cover?
7. Is it strong enough to be primary, or only useful as a supplement?
8. Is the implementation detail current enough where recency matters?
9. Will this improve judgment, or only execution speed?
10. After finishing it, what would still remain unlearned?

---

## Selection Standard

A resource should be selected only if it clearly does one of the following:

- serves as a primary source of depth for a curriculum block
- fills a known gap that the primary source does not cover
- provides better practical translation of a concept-heavy resource
- provides stronger failure-mode, security, or operations coverage than the core implementation resource

If it does none of those, it should not be in the curriculum.
