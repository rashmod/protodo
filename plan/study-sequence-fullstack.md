# Study Sequence for a Full-Stack Developer

This document defines a new study sequence optimized for becoming a strong full-stack developer.

This is different from `study-sequence.md`.
That file prioritizes technical depth in systems and platform concerns first.
This file prioritizes end-to-end product-building ability across:

- frontend
- backend
- data
- API design
- authentication and authorization
- testing
- deployment
- operational awareness

The goal is not to turn you into a frontend specialist, backend specialist, SRE, or security engineer first.
The goal is to make you capable of building, shipping, and evolving a serious full-stack application with increasing rigor.

This sequence still aims for depth, but it favors breadth across the full stack earlier so that you can develop product-shaped engineering capability sooner.

---

## Full-Stack Sequencing Principles

### 1. End-to-end capability comes early

A full-stack developer should become capable of building a coherent product slice across UI, API, database, auth, and deployment relatively early.
That means the sequence cannot stay too long in abstract architecture or deep platform concerns before application-building ability appears.

### 2. Conceptual depth still matters

This is not a shallow "learn enough to build a demo" path.
The sequence still expects:

- modeling discipline
- data correctness
- access control correctness
- testing rigor
- operational awareness

But these are sequenced to support full-stack product delivery.

### 3. JavaScript, TypeScript, and Node.js are foundational

Because the intended stack is full-stack JavaScript and TypeScript, the language and runtime model are not background details.
They are central to how the frontend and backend are built.

### 4. Product-shaping concerns appear earlier

A full-stack developer needs earlier exposure to:

- frontend state discipline
- backend request flow design
- forms and validation
- auth flows
- API contracts
- deployment basics

### 5. Deep systems topics still come later

Some topics remain later because they make more sense after real end-to-end application understanding exists:

- advanced async/distributed workflow design
- advanced observability and SRE practice
- billing and entitlements at depth
- orchestration-heavy infrastructure

---

## Sequence Overview

The recommended order is:

1. Minimal product and scoping judgment
2. JavaScript, TypeScript, and Node.js platform foundations
3. Full-stack application architecture and domain modeling
4. Data, databases, and persistence
5. Frontend engineering
6. Backend engineering and API design
7. Authentication, authorization, and multi-tenancy
8. Testing across the full stack
9. Delivery and deployment basics
10. Asynchronous systems and integration workflows
11. Security, privacy, and compliance
12. Reliability, observability, and operations
13. Billing, entitlements, and SaaS monetization systems
14. Advanced platform and architectural revisits

This order is optimized to help a full-stack developer become productive earlier while still preserving a path to serious depth.

---

## Stage 1. Minimal Product and Scoping Judgment

### Goal

Learn just enough product and scoping discipline to build the right thing and avoid fake complexity.

### Study order

1. [Good Strategy/Bad Strategy](https://www.penguinrandomhouse.com/books/208668/good-strategy-bad-strategy-by-richard-rumelt/)
2. [SVPG: The Four Big Risks](https://www.svpg.com/four-big-risks/)
3. Skim selected parts of [INSPIRED, 2nd Edition](https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/)
4. Skim selected parts of [The Lean Product Playbook](https://leanproductplaybook.com/book/)

### Why this is first

A full-stack developer still needs basic product judgment.
Without it, you risk building the wrong scope, overbuilding infrastructure, or solving technical problems that do not matter.

### Intended outcome

By the end of this stage, you should be able to:

- define a meaningful product slice
- identify what is in scope and out of scope
- avoid fake production complexity
- reason about realistic constraints

### Stop condition before moving on

Move on when you can clearly define:

- the product slice you are building
- what makes it usable
- what complexity is intentionally deferred

---

## Stage 2. JavaScript, TypeScript, and Node.js Platform Foundations

### Goal

Build real fluency in the stack that will power both frontend and backend work.

### Study order

1. [Total TypeScript](https://www.totaltypescript.com/)
2. [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS)
   Focus first on language semantics and async behavior.
3. [Node.js Design Patterns, 4th Edition](https://www.nodejsdesignpatterns.com/)
4. [Effective TypeScript, 2nd Edition](https://effectivetypescript.com/)

### Why this is early

Full-stack work in this curriculum depends on:

- TypeScript for modeling and contracts
- JavaScript semantics for frontend and backend correctness
- Node.js runtime understanding for backend behavior and async workflows

### Intended outcome

By the end of this stage, you should be able to:

- model with TypeScript intentionally
- reason about runtime versus type guarantees
- understand Node.js async behavior and module boundaries
- write JS and TS with fewer hidden conceptual gaps

### Stop condition before moving on

Move on when you can explain:

- how TypeScript helps and where it does not
- how async behavior works in Node.js and JavaScript broadly
- how package and module boundaries affect architecture

---

## Stage 3. Full-Stack Application Architecture and Domain Modeling

### Goal

Learn how to shape an application so that frontend, backend, data, auth, and future growth do not collapse into chaos.

### Study order

1. [Learning Domain-Driven Design](https://www.oreilly.com/library/view/learning-domain-driven-design/9781098100124/)
2. [Fundamentals of Software Architecture, 2nd Edition](https://www.oreilly.com/library/view/fundamentals-of-software/9781098175504/)
3. [Architecture Patterns with Python](https://www.cosmicpython.com/)
4. [Introducing EventStorming](https://leanpub.com/introducing_eventstorming)
5. [Domain Storytelling](https://www.oreilly.com/library/view/domain-storytelling/9781098163365/)

### Why this comes here

A full-stack developer needs enough modeling discipline before going deeper into frontend/backend implementation, otherwise the app becomes a bundle of screens and endpoints rather than a system.

### Intended outcome

By the end of this stage, you should be able to:

- model tasks, users, sessions, memberships, roles, and plans coherently
- identify where business rules live
- reason about boundaries between UI, application logic, and persistence
- discover domain workflows before blindly implementing them

### Stop condition before moving on

Move on when you can model:

- task lifecycle
- user/session lifecycle
- workspace and membership concepts
- policy and entitlement concepts

### Revisit notes

- `Implementing Domain-Driven Design` should come later as a deeper implementation pass once more system context exists.

---

## Stage 4. Data, Databases, and Persistence

### Goal

Build practical and conceptual database strength early enough to support real product development.

### Study order

1. [Practical SQL, 2nd Edition](https://nostarch.com/practical-sql-2nd-edition)
2. [Complete Intro to Databases](https://frontendmasters.com/courses/databases/)
3. [Designing Data-Intensive Applications](https://dataintensive.net/)

### Why this comes before heavy frontend/backend specialization

A full-stack developer needs database competence early because it shapes:

- form design
- API design
- backend transaction logic
- access rules
- reporting and search behavior

### Intended outcome

By the end of this stage, you should be able to:

- model relational schemas responsibly
- write and reason about SQL directly
- understand indexes and transaction boundaries
- explain how data design affects application behavior

### Stop condition before moving on

Move on when you can:

- justify the core schema
- explain important constraints and indexes
- reason about read/write behavior and data correctness

### Revisit notes

- `Designing Data-Intensive Applications` should be revisited later during async systems, reliability, and API evolution work.

---

## Stage 5. Frontend Engineering

### Goal

Develop strong frontend capability for building serious product interfaces, not just rendering components.

### Study order

1. [Epic React](https://www.epicreact.dev/)
2. [TkDodo's Blog](https://tkdodo.eu/blog/all)
3. [State Management at Scale in React & Next.js](https://frontendmasters.com/courses/react-nextjs-state/course-overview/)
4. [Digital Accessibility Foundations](https://www.w3.org/WAI/courses/foundations-course/)
5. [Refactoring UI](https://www.refactoringui.com/)
6. Later supplement: [Steve Kinney's React Performance Material](https://stevekinney.com/)

### Why this comes now

This is the point where a full-stack developer should become capable of building a serious user-facing layer with:

- forms
- state discipline
- server-state handling
- optimistic updates
- accessibility
- UI quality

### Intended outcome

By the end of this stage, you should be able to:

- distinguish client state from server state
- design form and mutation flows cleanly
- reason about cache invalidation and optimistic updates
- build accessible and responsive interfaces
- improve visual quality with intention

### Stop condition before moving on

Move on when you can explain:

- what state belongs where
- how UI failures and latency are handled
- how your frontend supports accessibility and usability

---

## Stage 6. Backend Engineering and API Design

### Goal

Learn how to build maintainable backends and coherent application contracts that support the frontend and future integrations.

### Study order

1. [Architecture Patterns with Python](https://www.cosmicpython.com/)
   Revisit now from a backend implementation perspective.
2. [Clean Architecture](https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/)
3. [API Design Patterns](https://www.manning.com/books/api-design-patterns?query=api)
4. [Designing Web APIs](https://www.oreilly.com/library/view/designing-web-apis/9781492026914/)
5. [Web API Design: The Missing Link](https://system-design.space/en/chapter/web-api-design-book/)
6. Later GraphQL supplement: [Apollo Odyssey](https://www.apollographql.com/blog/introducing-odyssey-the-apollo-learning-platform/)

### Why this comes after frontend

For a full-stack developer, it is useful to understand the demands of the UI before refining backend contracts deeply.
That produces better API shape, validation boundaries, and error behavior.

### Intended outcome

By the end of this stage, you should be able to:

- structure backend code with clear boundaries
- design APIs that support real client behavior
- reason about validation, errors, and idempotency
- explain how backend behavior maps to frontend state and UX

### Stop condition before moving on

Move on when you can explain:

- where backend business logic lives
- how contracts are shaped for clients
- how errors and retries should behave
- how API and DB behavior support the UI correctly

### Revisit notes

- `Implementing Domain-Driven Design` fits well as a deepening resource during or after this stage.

---

## Stage 7. Authentication, Authorization, and Multi-Tenancy

### Goal

Learn how to implement identity and access safely in a product that spans UI, API, and data boundaries.

### Study order

1. [OAuth 2 in Action](https://www.manning.com/books/oauth-2-in-action?query=OAuth+2+in+Action)
2. [Web Security Academy](https://portswigger.net/web-security)
   Focus first on:
   - authentication
   - access control
   - OAuth
   - JWT
   - API security
3. [Building Multi-Tenant SaaS Architectures](https://www.oreilly.com/library/view/building-multi-tenant-saas/9781098140632/)
4. [Role-Based Access Control, 2nd Edition](https://csrc.nist.gov/publications/detail/book/2007/role-based-access-control)
5. [Guide to Attribute Based Access Control (ABAC) Definition and Considerations](https://csrc.nist.gov/publications/detail/sp/800-162/final)

### Why this comes here

By now you already understand enough about frontend, backend, APIs, and data for auth and authz to be studied in their real context rather than as login-page mechanics.

### Intended outcome

By the end of this stage, you should be able to:

- model sessions, memberships, and access rules clearly
- reason about frontend and backend enforcement points
- explain tenant isolation and access risk
- identify common auth and authz failure modes

### Stop condition before moving on

Move on when you can explain:

- how identity is established
- how access is enforced
- what happens when permissions change
- how tenant boundaries are maintained

---

## Stage 8. Testing Across the Full Stack

### Goal

Build a testing strategy that supports frontend correctness, backend correctness, contract confidence, and regression safety.

### Study order

1. [Testing JavaScript](https://www.testingjavascript.com/)
2. Revisit testing-related parts of [Epic React](https://www.epicreact.dev/)
3. Revisit testing-related parts of [Node.js Design Patterns, 4th Edition](https://www.nodejsdesignpatterns.com/)
4. Revisit [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/latest/)
   for structured verification thinking

### Why this is a dedicated stage

Testing is cross-cutting, but a full-stack developer benefits from pulling it into explicit focus after having touched frontend, backend, APIs, and auth.

### Intended outcome

By the end of this stage, you should be able to:

- distinguish unit, integration, end-to-end, and security-oriented tests
- map tests to actual failure risks
- avoid shallow test suites that mostly lock in implementation details
- explain what needs to be tested at each layer of the stack

### Stop condition before moving on

Move on when you can explain:

- what you test at the UI level
- what you test at the API and service level
- what requires integration coverage
- what security and auth paths need explicit verification

---

## Stage 9. Delivery and Deployment Basics

### Goal

Learn enough delivery and deployment to ship full-stack applications responsibly without disappearing into infrastructure theater.

### Study order

1. [Docker Mastery](https://www.bretfisher.com/docker-mastery/)
2. [Terraform: Up and Running](https://www.terraformupandrunning.com/)
3. [Team Topologies](https://teamtopologies.com/book)
   Read selectively for ownership, platform boundaries, and cognitive load rather than as management literature.

### Why this is earlier here than in the other sequence

A full-stack developer should learn how applications are packaged and delivered sooner, because shipping is part of the job.
But this is still kept before heavy orchestration topics.

### Intended outcome

By the end of this stage, you should be able to:

- understand containers as a delivery mechanism
- reason about environments and deployment boundaries
- use infrastructure as code with discipline
- think clearly about what parts of delivery are application concerns versus platform concerns

### Stop condition before moving on

Move on when you can explain:

- how the app goes from local development to deployment
- how environment differences are managed
- how infra changes are represented and reviewed

---

## Stage 10. Asynchronous Systems and Integration Workflows

### Goal

Learn how to handle background jobs, reminders, retries, and integration workflows without corrupting application behavior.

### Study order

1. [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/index.html)
2. [Designing Event-Driven Systems](https://benstopford.com/)
3. Revisit distributed and consistency parts of [Designing Data-Intensive Applications](https://dataintensive.net/)
4. Later implementation supplement: [Temporal for Beginners: Durable Execution Fundamentals](https://www.udemy.com/course/temporal-for-beginners/)

### Why this is after shipping basics

A full-stack developer usually benefits from understanding normal app delivery and request-response systems before going deep into asynchronous workflow complexity.

### Intended outcome

By the end of this stage, you should be able to:

- reason about queues and workers correctly
- design retries and idempotent behavior deliberately
- explain webhook and reminder guarantees honestly
- think about failure and eventual consistency in background work

### Stop condition before moving on

Move on when you can explain:

- what happens when background work runs twice
- how retries are controlled
- how delayed or failed async work affects users and data

---

## Stage 11. Security, Privacy, and Compliance

### Goal

Build security depth once the full-stack system surface is concrete enough to reason about seriously.

### Study order

1. [Security Engineering, 3rd Edition](https://www.oreilly.com/library/view/security-engineering-3rd/9781119642787/)
2. Continue [Web Security Academy](https://portswigger.net/web-security)
   Focus next on:
   - XSS
   - CSRF
   - SSRF
   - business logic vulnerabilities
   - API security
3. [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/latest/)
4. [OWASP ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/)
5. Later supplement: [NIST Privacy Engineering Program](https://www.nist.gov/privacy-engineering)

### Why this is here

By now the full-stack surface area is broad enough that security can be learned as a real engineering discipline rather than as a disconnected vulnerability catalog.

### Intended outcome

By the end of this stage, you should be able to:

- identify the main attack surfaces of a full-stack web app
- reason about trust boundaries across UI, API, auth, and storage
- structure security verification intentionally
- think about privacy and retention with technical seriousness

### Stop condition before moving on

Move on when you can explain:

- where the major risks are in the full stack
- how those risks are tested and reduced
- how privacy and retention affect technical design

---

## Stage 12. Reliability, Observability, and Operations

### Goal

Learn how to observe, diagnose, and recover full-stack systems once they are deployed.

### Study order

1. [Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/)
2. [The Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)
3. [Observability Engineering, 2nd Edition](https://www.oreilly.com/library/view/observability-engineering-2nd/9781098179915/)
4. [USE Method](http://www.brendangregg.com/usemethod.html)
5. [RED Method](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/)

### Why this is after security

At this point the application and its risks are concrete enough for observability and operations to make practical sense.
A full-stack developer should understand operations, but not at the cost of delaying app-building capability for too long.

### Intended outcome

By the end of this stage, you should be able to:

- define meaningful logs, metrics, and traces
- reason about service health and user-impact signals
- write useful alerts and operational procedures
- think about backups, restores, and incident handling with discipline

### Stop condition before moving on

Move on when you can explain:

- what the important signals are
- how failures would be detected
- how you would investigate and recover from major issues

---

## Stage 13. Billing, Entitlements, and SaaS Monetization Systems

### Goal

Learn how recurring billing, plans, and access rules affect a full-stack SaaS product.

### Study order

1. [Monetizing Innovation](https://www.wiley-vch.de/en/areas-interest/finance-economics-law/business-management-13ba/business-society-13ba7/monetizing-innovation-978-1-119-24086-0)
2. [Subscribed](https://www.simonandschuster.com/authors/Tien-Tzuo/234929878)
3. [Stripe Introduction to Recurring Billing](https://stripe.com/en-ca/guides/introduction-to-recurring-billing)
4. [Stripe Subscriptions](https://docs.stripe.com/subscriptions?locale=en-GB)
5. Supplement while studying: [OpenView SaaS Pricing Resources](https://openviewpartners.com/saas-pricing/)

### Why this is late

This topic depends on enough maturity in:

- product modeling
- auth and access rules
- async workflows
- API behavior
- frontend and backend coordination

### Intended outcome

By the end of this stage, you should be able to:

- reason about plans and entitlements as product and system concepts
- understand how billing state affects user access
- explain recurring billing mechanics and webhook-driven updates
- reason about pricing and packaging with more than intuition

### Stop condition before moving on

Move on when you can explain:

- how billing state maps to product access
- how plan changes affect the product surface
- how webhook delay or failure affects billing correctness

---

## Stage 14. Advanced Platform and Architectural Revisits

This stage exists for deeper follow-up once the full-stack foundation is already strong.

### Revisit set

- [Implementing Domain-Driven Design](https://www.pearson.com/en-us/subject-catalog/p/implementing-domain-driven-design/P200000009616/9780321834577)
- [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.oreilly.com/library/view/domain-driven-design-tackling/0321125215/)
- [Database Internals](https://www.oreilly.com/library/view/database-internals/9781492040330/)
- [Building Microservices, 2nd Edition](https://samnewman.io/books/building_microservices_2nd_edition/)
- [Zanzibar paper](https://pdos.csail.mit.edu/6.824/papers/zanzibar.pdf)
- [Kubernetes: Up and Running, 3rd Edition](https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/)
- [Platform Engineering](https://www.oreilly.com/library/view/platform-engineering/9781098153632/)
- [Temporal for Beginners: Durable Execution Fundamentals](https://www.udemy.com/course/temporal-for-beginners/)

### Why this stage exists

These resources are valuable, but they are better understood after real full-stack product experience exists.
This stage is for consolidation, specialization, and deeper systems maturity.

---

## Full-Stack Priority Order Under Constraint

If time or budget become tight, preserve this order of importance:

1. JavaScript, TypeScript, and Node.js foundations
2. application architecture and domain modeling
3. data and persistence
4. frontend engineering
5. backend engineering and API design
6. authentication and authorization
7. testing across the stack
8. deployment basics
9. async systems
10. security
11. observability and operations
12. billing and entitlements
13. advanced platform topics

That ordering is optimized for becoming a strong full-stack developer rather than a specialist-first engineer.
