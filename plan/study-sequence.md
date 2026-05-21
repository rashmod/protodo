# Study Sequence

This document turns `selected-resources.md` into a study order.

The main priority is building technical expertise.
That changes the sequencing in an important way:

- product and strategy material are still included
- but they are kept lean and early
- the bulk of time and depth should go into technical system design, implementation, security, reliability, and operations

This is not a "read everything in one pass" list.
It is a directed sequence with prerequisites, intended outcomes, revisit points, and stop conditions.

---

## Sequencing Principles

### 1. Technical depth is the primary objective

This sequence is optimized for becoming capable of building and operating serious systems.
Non-technical material is included only when it materially improves technical judgment.

### 2. Foundations before specialization

Topics that shape later correctness come first:

- modeling
- data
- backend structure
- frontend state discipline
- auth and access control

Highly specialized topics come later:

- GraphQL
- Kubernetes
- advanced ABAC
- platform engineering
- workflow orchestration tools

### 3. Study until capability, not until completion of a media item

Finishing a book or course is not the goal.
The goal is gaining the capability the resource was chosen for.
If a resource becomes repetitive after the relevant capability is learned, move on.

### 4. Revisit is deliberate

Some resources should not be consumed linearly in one pass.
They should be revisited later once more system context exists.

### 5. Cross-block resources should be leveraged, not repeated mechanically

Some resources support multiple blocks.
They should be read once with notes, then revisited selectively.

---

## Sequence Overview

The recommended order is:

1. Minimal strategy framing
2. Domain modeling and architecture foundations
3. JavaScript, TypeScript, and Node.js platform expertise
4. Data and persistence foundations
5. Backend engineering structure
6. Frontend engineering discipline
7. Authentication, authorization, and multi-tenancy
8. API design and contracts
9. Asynchronous systems and distributed workflows
10. Security engineering and security testing
11. Reliability, observability, and operations
12. Billing, entitlements, and SaaS monetization systems
13. Delivery, infrastructure, and organizational mechanics
14. Advanced revisits and depth passes

This is not the same as the original curriculum order.
It has been adjusted to favor technical capability building.
In particular:

- JavaScript, TypeScript, and Node.js move up explicitly because stack fluency is a real technical dependency, not background noise
- security moves earlier in practical importance, even if some broad privacy/governance work stays later
- billing moves later because it depends on modeling, async systems, and access rules
- delivery and infrastructure stay later because they make more sense after you understand the application and operational system you are delivering

---

## Stage 1. Minimal Strategy Framing

### Goal

Gain enough product and systems judgment to avoid building nonsense, but do not get stuck in non-technical material.

### Study order

1. [Good Strategy/Bad Strategy](https://www.penguinrandomhouse.com/books/208668/good-strategy-bad-strategy-by-richard-rumelt/)
2. [SVPG: The Four Big Risks](https://www.svpg.com/four-big-risks/)
3. Skim selected parts of [INSPIRED, 2nd Edition](https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/)
4. Skim selected parts of [The Lean Product Playbook](https://leanproductplaybook.com/book/)

### Why this is first

You need enough judgment to define product boundaries, avoid fake complexity, and make staged decisions.
But the main priority is still technical expertise, so this stage should stay disciplined and short.

### Intended outcome

By the end of this stage, you should be able to:

- define what a usable product slice is
- separate real requirements from fantasy scope
- recognize fake production complexity
- justify why a system concern belongs now, later, or never

### Stop condition before moving on

Move on when you can clearly explain:

- what the product is
- what it is not
- what constraints matter
- what technical maturity claims would be dishonest at a given stage

Do not keep reading product books indefinitely.

---

## Stage 2. Domain Modeling and Architecture Foundations

### Goal

Build the conceptual backbone required for every serious technical topic that follows.

### Study order

1. [Learning Domain-Driven Design](https://www.oreilly.com/library/view/learning-domain-driven-design/9781098100124/)
2. [Fundamentals of Software Architecture, 2nd Edition](https://www.oreilly.com/library/view/fundamentals-of-software/9781098175504/)
3. [Introducing EventStorming](https://leanpub.com/introducing_eventstorming)
4. [Domain Storytelling](https://www.oreilly.com/library/view/domain-storytelling/9781098163365/)
5. Start [Architecture Patterns with Python](https://www.cosmicpython.com/)
6. Later in this stage, begin [Implementing Domain-Driven Design](https://www.pearson.com/en-us/subject-catalog/p/implementing-domain-driven-design/P200000009616/9780321834577)

### Why this is early

Weak models create downstream failures in:

- auth
- tenancy
- billing
- API design
- async workflows
- auditing

This is one of the highest leverage technical stages in the whole sequence.

### Intended outcome

By the end of this stage, you should be able to:

- model entities, relationships, and invariants clearly
- identify lifecycle and policy boundaries
- distinguish domain logic from framework glue
- reason about modularity and architectural tradeoffs
- discover domain behavior before coding blindly

### Stop condition before moving on

Move on when you can coherently model at least these domains:

- task lifecycle
- user and session lifecycle
- org/workspace/membership structure
- role and policy concepts
- plan and entitlement concepts

If you still cannot model those cleanly, do not move forward.

### Revisit notes

- `Implementing Domain-Driven Design` should be revisited after backend and auth work are underway.
- `Domain-Driven Design: Tackling Complexity in the Heart of Software` should remain a later deepening pass.

---

## Stage 3. JavaScript, TypeScript, and Node.js Platform Expertise

### Goal

Build serious fluency in the language, type system, runtime, and testing model of the actual stack used by the application.

### Study order

1. [Total TypeScript](https://www.totaltypescript.com/)
2. [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS)
   Focus first on language semantics and async behavior.
3. [Node.js Design Patterns, 4th Edition](https://www.nodejsdesignpatterns.com/)
4. [Effective TypeScript, 2nd Edition](https://effectivetypescript.com/)
5. [Testing JavaScript](https://www.testingjavascript.com/)

### Why this comes here

At this point you already have enough modeling and architecture context to learn the stack as an engineering medium rather than as syntax.
This stage exists because JavaScript and TypeScript influence:

- backend boundaries
- frontend state discipline
- async behavior
- runtime failure modes
- validation and contract design

### Intended outcome

By the end of this stage, you should be able to:

- use TypeScript deliberately for modeling and boundary design
- explain where compile-time guarantees stop and runtime validation begins
- reason about Node.js async behavior and error propagation concretely
- structure JS and TS codebases without accidental module chaos
- test JS and TS systems with more than framework-default habits

### Stop condition before moving on

Move on when you can explain:

- how the Node.js runtime schedules and propagates async work
- where TypeScript helps and where it cannot protect you
- how modules, packages, and runtime boundaries affect architecture
- how your testing strategy maps to the JavaScript ecosystem rather than to generic testing theory

### Revisit notes

- `Node.js Design Patterns` should be revisited during backend and async-system stages.
- `Effective TypeScript` should be revisited while hardening APIs, validation boundaries, and shared types.

---

## Stage 4. Data and Persistence Foundations

### Goal

Build durable expertise in relational data design, SQL fluency, correctness constraints, and long-term persistence tradeoffs.

### Study order

1. [Practical SQL, 2nd Edition](https://nostarch.com/practical-sql-2nd-edition)
2. [Complete Intro to Databases](https://frontendmasters.com/courses/databases/)
3. [Designing Data-Intensive Applications](https://dataintensive.net/)
4. Revisit relevant parts of `Learning Domain-Driven Design` and `Architecture Patterns with Python`

### Why this comes before deep backend work

Backend structure without data competence becomes superficial fast.
You need to understand:

- schema pressure
- constraints
- transactions
- data correctness
- the cost of access patterns

before application layers become real.

### Intended outcome

By the end of this stage, you should be able to:

- design relational schemas aligned with domain rules
- write and reason about non-trivial SQL
- understand indexes and access-pattern tradeoffs
- explain consistency and transaction boundaries in application terms
- distinguish primary data systems from caches and derived indexes

### Stop condition before moving on

Move on when you can:

- justify a schema design for the core app
- explain why each major table and constraint exists
- reason about transaction boundaries for common flows
- explain soft delete versus hard delete implications

### Revisit notes

- `DDIA` should be revisited repeatedly during async systems, reliability, and API evolution work.
- `Database Internals` should come later when practical database competence already exists.

---

## Stage 5. Backend Engineering Structure

### Goal

Learn how to translate models and data rules into a maintainable backend rather than a route collection.

### Study order

1. [Architecture Patterns with Python](https://www.cosmicpython.com/)
2. [Clean Architecture](https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/)
3. [Monolith to Microservices](https://samnewman.io/books/monolith-to-microservices/)
4. Revisit selected parts of [Implementing Domain-Driven Design](https://www.pearson.com/en-us/subject-catalog/p/implementing-domain-driven-design/P200000009616/9780321834577)

### Why this comes now

At this point you should already have:

- enough modeling maturity
- enough data maturity

Now the focus becomes:

- application boundaries
- transactions in real request flows
- code organization under growth
- integration seams

### Intended outcome

By the end of this stage, you should be able to:

- structure a backend with clear service and domain boundaries
- keep business logic out of controllers and framework glue
- reason about transaction and consistency boundaries
- evolve a monolith without making it chaotic

### Stop condition before moving on

Move on when you can explain and justify:

- where business logic lives
- where validation lives
- where persistence logic lives
- how failures propagate through a request path

### Revisit notes

- `Building Microservices` stays later unless you have a real boundary problem that justifies it.

---

## Stage 6. Frontend Engineering Discipline

### Goal

Build strong frontend engineering instincts around state, resilience, accessibility, and performance.

### Study order

1. [Epic React](https://www.epicreact.dev/)
2. [TkDodo's Blog](https://tkdodo.eu/blog/all)
3. [State Management at Scale in React & Next.js](https://frontendmasters.com/courses/react-nextjs-state/course-overview/)
4. [Digital Accessibility Foundations](https://www.w3.org/WAI/courses/foundations-course/)
5. [Refactoring UI](https://www.refactoringui.com/)
6. Later supplement: [Steve Kinney's React Performance Material](https://stevekinney.com/)

### Why this comes after backend foundations

Your frontend architecture will be much better if you already understand:

- domain boundaries
- API boundaries
- backend constraints
- server truth versus client truth

### Intended outcome

By the end of this stage, you should be able to:

- distinguish client state from server state
- design query/mutation flows cleanly
- reason about optimistic updates and rollback behavior
- build forms and interactions with resilience and accessibility
- improve UI quality with deliberate visual choices

### Stop condition before moving on

Move on when you can explain:

- what state belongs where
- how cache invalidation works in your system
- how frontend failures surface to users
- how your UI supports accessibility and responsiveness

### Revisit notes

- revisit `TkDodo` during API, auth, and async work because server-state complexity grows as the system grows
- revisit `Steve Kinney` material once performance problems become concrete rather than hypothetical

---

## Stage 7. Authentication, Authorization, and Multi-Tenancy

### Goal

Develop serious expertise in identity, access control, and tenant-aware system boundaries.

### Study order

1. [OAuth 2 in Action](https://www.manning.com/books/oauth-2-in-action?query=OAuth+2+in+Action)
2. [Web Security Academy](https://portswigger.net/web-security)
   Focus areas first:
   - authentication
   - access control
   - OAuth
   - JWT
   - API testing
3. [Building Multi-Tenant SaaS Architectures](https://www.oreilly.com/library/view/building-multi-tenant-saas/9781098140632/)
4. [Role-Based Access Control, 2nd Edition](https://csrc.nist.gov/publications/detail/book/2007/role-based-access-control)
5. [Guide to Attribute Based Access Control (ABAC) Definition and Considerations](https://csrc.nist.gov/publications/detail/sp/800-162/final)
6. Optional supplement while studying: [Real-World Cryptography](https://www.manning.com/books/real-world-cryptography)
7. Later revisit: [Zanzibar paper](https://pdos.csail.mit.edu/6.824/papers/zanzibar.pdf)

### Why this comes before APIs and async systems

Because access control and tenancy must shape:

- data access
- API behavior
- session rules
- audit semantics
- user-facing workflows

### Intended outcome

By the end of this stage, you should be able to:

- explain authn versus authz precisely
- model sessions, memberships, roles, and policies clearly
- reason about tenant isolation and leakage risks
- explain revocation, recovery, and role-change effects safely
- identify common access-control failure modes

### Stop condition before moving on

Move on when you can answer clearly:

- why a user can or cannot access a resource
- what happens when a role changes mid-session
- how tenant context is established and enforced
- what security risks exist in login, recovery, and delegated identity flows

### Revisit notes

- `Web Security Academy` should continue throughout later security work
- `Zanzibar` should wait until you already understand app-level authorization problems well

---

## Stage 8. API Design and Contracts

### Goal

Learn to design interfaces that survive change, retries, multiple clients, and integration pressure.

### Study order

1. [API Design Patterns](https://www.manning.com/books/api-design-patterns?query=api)
2. [Designing Web APIs](https://www.oreilly.com/library/view/designing-web-apis/9781492026914/)
3. [Web API Design: The Missing Link](https://system-design.space/en/chapter/web-api-design-book/)
4. Later GraphQL supplement: [Apollo Odyssey](https://www.apollographql.com/blog/introducing-odyssey-the-apollo-learning-platform/)

### Why this comes now

At this point you already understand:

- domain shape
- data shape
- backend boundaries
- access rules

So now API design can be learned as contract design rather than route syntax.

### Intended outcome

By the end of this stage, you should be able to:

- model API resources and operations deliberately
- reason about versioning, compatibility, and deprecation
- design error contracts intentionally
- explain idempotency and integration boundaries
- distinguish REST semantics from GraphQL tradeoffs

### Stop condition before moving on

Move on when you can explain:

- why your API surface is shaped the way it is
- how clients evolve safely against it
- how duplicate requests or retries should behave
- where webhook and import/export boundaries belong

### Revisit notes

- `Apollo Odyssey` should come only after core API contract thinking is strong

---

## Stage 9. Asynchronous Systems and Distributed Workflows

### Goal

Learn how to design workflows that remain correct under retries, duplication, delay, failure, and eventual consistency.

### Study order

1. [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/index.html)
2. [Designing Event-Driven Systems](https://benstopford.com/)
3. Revisit async and distributed parts of [Designing Data-Intensive Applications](https://dataintensive.net/)
4. Later implementation supplement: [Temporal for Beginners: Durable Execution Fundamentals](https://www.udemy.com/course/temporal-for-beginners/)

### Why this comes after API work

Async systems become easier to reason about once you already understand:

- contracts
- idempotency
- domain boundaries
- failure propagation through synchronous flows

### Intended outcome

By the end of this stage, you should be able to:

- explain queue and worker guarantees precisely
- design retries without corrupting state
- reason about dead letters and poison work
- model eventual consistency honestly
- design reminder, webhook, and background-job flows with bounded guarantees

### Stop condition before moving on

Move on when you can explain:

- what happens if a job runs twice
- what happens if a dependency is down
- what guarantees a reminder or webhook system does and does not provide
- how failure is detected, retried, surfaced, or quarantined

### Revisit notes

- `Temporal` should only be studied after the conceptual async model is already strong

---

## Stage 10. Security Engineering and Security Testing

### Goal

Build serious attacker-aware technical expertise in application security and system risk reduction.

### Study order

1. [Security Engineering, 3rd Edition](https://www.oreilly.com/library/view/security-engineering-3rd/9781119642787/)
2. Continue [Web Security Academy](https://portswigger.net/web-security)
   Focus areas next:
   - XSS
   - CSRF
   - SSRF
   - business logic vulnerabilities
   - API security
3. [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/latest/)
4. [OWASP ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/)
5. Later privacy/governance supplement: [NIST Privacy Engineering Program](https://www.nist.gov/privacy-engineering)

### Why this is here

Security needs enough system context to matter.
By now you already understand:

- backend structure
- frontend behavior
- auth and authz
- APIs
- async workflows

That makes security reasoning much more grounded.

### Intended outcome

By the end of this stage, you should be able to:

- draw trust boundaries clearly
- identify major app attack surfaces
- think like both defender and attacker
- design verification approaches rather than relying on vague awareness
- reason about privacy and data handling with technical seriousness

### Stop condition before moving on

Move on when you can:

- explain the main risks in your application design
- define structured security verification for major flows
- reason about retention, deletion, and privacy impacts beyond pure appsec

### Revisit notes

- `Web Security Academy` should remain a recurring long-term practice resource
- privacy engineering material should deepen later when deletion, governance, and compliance become concrete

---

## Stage 11. Reliability, Observability, and Operations

### Goal

Build the operational skill to observe, diagnose, recover, and improve live systems.

### Study order

1. [Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/)
2. [The Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)
3. [Observability Engineering, 2nd Edition](https://www.oreilly.com/library/view/observability-engineering-2nd/9781098179915/)
4. [USE Method](http://www.brendangregg.com/usemethod.html)
5. [RED Method](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/)

### Why this comes before infra-heavy delivery work

Because before you optimize deployment mechanics, you should understand:

- what signals matter
- what failure looks like
- what needs to be recovered
- how operations should be reasoned about

### Intended outcome

By the end of this stage, you should be able to:

- define meaningful telemetry
- use logs, metrics, and traces for diagnosis
- write practical alerts and runbooks
- reason about toil, service ownership, and operational risk
- design restore and incident practices with discipline

### Stop condition before moving on

Move on when you can clearly explain:

- what you observe and why
- how you would detect major failures
- what signals are actionable versus noisy
- how backup and restore are validated, not assumed

### Revisit notes

- `Observability Engineering` should be revisited once production instrumentation becomes real

---

## Stage 12. Billing, Entitlements, and SaaS Monetization Systems

### Goal

Learn how money, plans, access control, and recurring state transitions connect inside a SaaS system.

### Study order

1. [Monetizing Innovation](https://www.wiley-vch.de/en/areas-interest/finance-economics-law/business-management-13ba/business-society-13ba7/monetizing-innovation-978-1-119-24086-0)
2. [Subscribed](https://www.simonandschuster.com/authors/Tien-Tzuo/234929878)
3. [Stripe Introduction to Recurring Billing](https://stripe.com/en-ca/guides/introduction-to-recurring-billing)
4. [Stripe Subscriptions](https://docs.stripe.com/subscriptions?locale=en-GB)
5. Supplement while studying: [OpenView SaaS Pricing Resources](https://openviewpartners.com/saas-pricing/)

### Why this comes after auth, APIs, and async systems

Because billing and entitlements depend on:

- policy modeling
- access enforcement
- webhook-driven state changes
- retries and eventual consistency
- administrative exceptions

Studying billing too early usually produces shallow understanding.

### Intended outcome

By the end of this stage, you should be able to:

- model plans, entitlements, and usage limits clearly
- distinguish pricing strategy from technical enforcement
- reason about subscription lifecycle state changes
- explain how billing-provider events affect application access
- reason about ambiguous or delayed billing state safely

### Stop condition before moving on

Move on when you can explain:

- what product access is derived from billing and what is not
- how plan changes propagate through the system
- what happens if billing webhooks are delayed, duplicated, or fail

### Revisit notes

- this block will still require synthesis because the market does not teach entitlement architecture particularly well

---

## Stage 13. Delivery, Infrastructure, and Organizational Mechanics

### Goal

Learn how to deliver systems with controlled risk and how infra and support mechanics shape real operations.

### Study order

1. [Docker Mastery](https://www.bretfisher.com/docker-mastery/)
2. [Terraform: Up and Running](https://www.terraformupandrunning.com/)
3. [Team Topologies](https://teamtopologies.com/book)
4. Later supplement: [Kubernetes: Up and Running, 3rd Edition](https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/)
5. Later supplement: [Platform Engineering](https://www.oreilly.com/library/view/platform-engineering/9781098153632/)

### Why this is late

At this point you already know what kind of system you are actually trying to deliver and operate.
That makes delivery and infra learning more grounded and less theatrical.

### Intended outcome

By the end of this stage, you should be able to:

- reason about local-to-deployment parity
- understand containers as a delivery mechanism rather than hype
- use infrastructure as code with structure and discipline
- think about ownership, support, and platform boundaries realistically
- explain when orchestration complexity is justified and when it is theater

### Stop condition before moving on

Move on when you can explain:

- how your application moves from local work to deployed environments
- how infra is described, changed, and reviewed
- what delivery risks exist and how rollback is handled
- what infra capabilities are real versus simulated in your setup

### Revisit notes

- `Kubernetes` should remain late unless there is a concrete orchestration problem to solve
- `Platform Engineering` is a later maturity/deepening resource, not an early foundation

---

## Stage 14. Advanced Revisits and Depth Passes

This stage exists because some topics should not be mastered in the first pass.
They should be revisited after the core system picture is strong.

### Revisit set

- [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.oreilly.com/library/view/domain-driven-design-tackling/0321125215/)
- [Database Internals](https://www.oreilly.com/library/view/database-internals/9781492040330/)
- [Building Microservices, 2nd Edition](https://samnewman.io/books/building_microservices_2nd_edition/)
- [Zanzibar paper](https://pdos.csail.mit.edu/6.824/papers/zanzibar.pdf)
- [Temporal for Beginners: Durable Execution Fundamentals](https://www.udemy.com/course/temporal-for-beginners/)
- [Kubernetes: Up and Running, 3rd Edition](https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/)
- [Platform Engineering](https://www.oreilly.com/library/view/platform-engineering/9781098153632/)

### Why this stage exists

These resources are valuable, but they are easier to misread or over-apply if studied too early.
They become much more useful once the primary technical foundations are already in place.

---

## Cross-Block Reading Notes

### Resources that should be read once and revisited selectively

- [Designing Data-Intensive Applications](https://dataintensive.net/)
- [Web Security Academy](https://portswigger.net/web-security)
- [Architecture Patterns with Python](https://www.cosmicpython.com/)
- [Implementing Domain-Driven Design](https://www.pearson.com/en-us/subject-catalog/p/implementing-domain-driven-design/P200000009616/9780321834577)
- [Observability Engineering, 2nd Edition](https://www.oreilly.com/library/view/observability-engineering-2nd/9781098179915/)

### Resources that should be consumed lightly, then used as reference

- [OWASP ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/latest/)
- [Guide to Attribute Based Access Control (ABAC) Definition and Considerations](https://csrc.nist.gov/publications/detail/sp/800-162/final)
- [Stripe Subscriptions](https://docs.stripe.com/subscriptions?locale=en-GB)

---

## Final Sequencing Guidance

If time or budget pressure forces harder prioritization, preserve this order of technical importance:

1. domain modeling and architecture
2. JavaScript, TypeScript, and Node.js platform fluency
3. data and persistence
4. backend structure
5. frontend state discipline
6. authentication, authorization, and multi-tenancy
7. APIs and contracts
8. asynchronous systems
9. security engineering
10. reliability and observability
11. billing and entitlements
12. delivery and infrastructure

That ordering reflects the main priority: building real technical expertise.
