# Selected Resources

This document records the selected learning resources for the curriculum defined in `learning-curriculum.md`.

The purpose of this file is to capture the current resource canon for each curriculum block.
Resources are categorized as:

- `Primary`: core resources that should drive the block
- `Supplement`: strong supporting resources that fill important gaps
- `Revisit Later`: useful deeper resources that should come after the main foundation is in place

This file is intentionally separate from `learning-curriculum.md` so that:

- the capability model stays stable
- resource choices can evolve independently
- weak or outdated resources can be replaced without rewriting the curriculum itself

---

## 1. Product, Scope, and Systems Judgment

### Primary

- [INSPIRED, 2nd Edition](https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/)
  Why selected: strong on product discovery, product thinking, and defining what should be built before discussing implementation.

- [The Lean Product Playbook](https://leanproductplaybook.com/book/)
  Why selected: translates product thinking into structured MVP scoping, iteration, and target-user decisions.

- [Good Strategy/Bad Strategy](https://www.penguinrandomhouse.com/books/208668/good-strategy-bad-strategy-by-richard-rumelt/)
  Why selected: teaches real strategic reasoning and helps separate disciplined decisions from feature-list thinking.

### Supplement

- [SVPG: The Four Big Risks](https://www.svpg.com/four-big-risks/)
  Why selected: compact but important framing for value, usability, feasibility, and business viability.

### Revisit Later

- [SVPG Product Management Workshop](https://www.svpg.com/inspired-product-management-workshop/)
  Why selected: useful if a formal course experience is needed after the books, but not necessary as a first resource.

---

## 2. Software Architecture and Domain Modeling

### Primary

- [Learning Domain-Driven Design](https://www.oreilly.com/library/view/learning-domain-driven-design/9781098100124/)
  Why selected: best modern entry point for practical domain modeling with enough depth to matter.

- [Implementing Domain-Driven Design](https://www.pearson.com/en-us/subject-catalog/p/implementing-domain-driven-design/P200000009616/9780321834577)
  Why selected: strong on tactical design, application boundaries, aggregates, repositories, and implementation depth.

- [Fundamentals of Software Architecture, 2nd Edition](https://www.oreilly.com/library/view/fundamentals-of-software/9781098175504/)
  Why selected: covers architectural tradeoffs, modularity, and decision quality beyond domain modeling terminology.

### Supplement

- [Architecture Patterns with Python](https://www.cosmicpython.com/)
  Why selected: one of the best practical translations of modeling and architecture into working code structure.

- [Introducing EventStorming](https://leanpub.com/introducing_eventstorming)
  Why selected: strong for discovering workflows, domain behavior, and event boundaries before implementation.

- [Domain Storytelling](https://www.oreilly.com/library/view/domain-storytelling/9781098163365/)
  Why selected: useful for connecting models to actual domain workflows and user/business interactions.

### Revisit Later

- [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.oreilly.com/library/view/domain-driven-design-tackling/0321125215/)
  Why selected: foundational classic, but better after the modern practical resources.

---

## 3. JavaScript, TypeScript, and Node.js Platform Expertise

### Primary

- [Total TypeScript](https://www.totaltypescript.com/)
  Why selected: strongest TypeScript-first resource for using the type system as a modeling and API-boundary tool rather than as light annotation.

- [Node.js Design Patterns, 4th Edition](https://www.nodejsdesignpatterns.com/)
  Why selected: strongest Node-specific architecture and runtime resource in the set, with real coverage of async flows, modules, streams, concurrency patterns, and production-oriented backend design.

### Supplement

- [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS)
  Why selected: durable JavaScript language-depth resource for semantics, scope, objects, async behavior, and areas that are easy to use without truly understanding.

- [Effective TypeScript, 2nd Edition](https://effectivetypescript.com/)
  Why selected: strong practical guide for improving TypeScript judgment in real codebases once the core TypeScript model is already in place.

- [Testing JavaScript](https://www.testingjavascript.com/)
  Why selected: valuable JS ecosystem testing resource that complements backend and frontend engineering with test strategy grounded in the JavaScript stack.

### Revisit Later

- [Node.js Design Patterns Exercises and Advanced Chapters](https://www.nodejsdesignpatterns.com/)
  Why selected: deeper revisit for concurrency, messaging, and advanced runtime patterns after backend and async-system work become more concrete.

---

## 4. Data, Databases, and Persistence

### Primary

- [Designing Data-Intensive Applications](https://dataintensive.net/)
  Why selected: strongest conceptual resource for storage, consistency, replication, indexing, and long-term system tradeoffs.

- [Practical SQL, 2nd Edition](https://nostarch.com/practical-sql-2nd-edition)
  Why selected: practical SQL and relational fluency resource that complements the conceptual depth of DDIA.

### Supplement

- [Complete Intro to Databases](https://frontendmasters.com/courses/databases/)
  Why selected: useful practical bridge between database concepts and application work.

### Revisit Later

- [Database Internals](https://www.oreilly.com/library/view/database-internals/9781492040330/)
  Why selected: deeper internals resource for storage engines, WAL, and system-level behavior after the basics are strong.

---

## 5. Backend Engineering

### Primary

- [Architecture Patterns with Python](https://www.cosmicpython.com/)
  Why selected: strong on repositories, unit of work, service layers, events, and keeping business logic away from framework glue.

- [Clean Architecture](https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/)
  Why selected: useful architectural framing for boundaries, dependency direction, and structural discipline.

- [Monolith to Microservices](https://samnewman.io/books/monolith-to-microservices/)
  Why selected: strong on decomposition, evolutionary change, and growing systems while staying usable.

### Supplement

- [Building Microservices, 2nd Edition](https://samnewman.io/books/building_microservices_2nd_edition/)
  Why selected: strong on service boundaries and operational tradeoffs, but better as a supplement than as a starting point.

---

## 6. Frontend Engineering

### Primary

- [Epic React](https://www.epicreact.dev/)
  Why selected: one of the strongest resources for React as engineering rather than component syntax.

- [TkDodo's Blog](https://tkdodo.eu/blog/all)
  Why selected: best written resource for server-state architecture, cache invalidation, mutations, and realistic state tradeoffs.

- [State Management at Scale in React & Next.js](https://frontendmasters.com/courses/react-nextjs-state/course-overview/)
  Why selected: strong on state ownership, complexity management, and scaling frontend state beyond toy examples.

### Supplement

- [Digital Accessibility Foundations](https://www.w3.org/WAI/courses/foundations-course/)
  Why selected: structured accessibility course, not just a checklist.

- [Refactoring UI](https://www.refactoringui.com/)
  Why selected: high-ROI visual design resource for engineers building product interfaces.

- [Steve Kinney's React Performance Material](https://stevekinney.com/)
  Why selected: useful targeted supplement for render behavior and frontend performance reasoning.

---

## 7. Authentication, Authorization, and Multi-Tenancy

### Primary

- [OAuth 2 in Action](https://www.manning.com/books/oauth-2-in-action?query=OAuth+2+in+Action)
  Why selected: strong protocol-level resource for delegated identity and OAuth reasoning.

- [Web Security Academy](https://portswigger.net/web-security)
  Why selected: best practical resource for auth, authz, OAuth, API, and business-logic failure modes.

- [Building Multi-Tenant SaaS Architectures](https://www.oreilly.com/library/view/building-multi-tenant-saas/9781098140632/)
  Why selected: one of the few resources that treats multi-tenancy as a real architectural topic.

### Supplement

- [Role-Based Access Control, 2nd Edition](https://csrc.nist.gov/publications/detail/book/2007/role-based-access-control)
  Why selected: durable conceptual grounding for RBAC theory and constraints.

- [Guide to Attribute Based Access Control (ABAC) Definition and Considerations](https://csrc.nist.gov/publications/detail/sp/800-162/final)
  Why selected: useful conceptual supplement for richer policy models once RBAC foundations are clear.

- [Real-World Cryptography](https://www.manning.com/books/real-world-cryptography)
  Why selected: useful foundation for understanding the crypto primitives behind sessions, signatures, hashing, and key handling.

### Revisit Later

- [Zanzibar paper](https://pdos.csail.mit.edu/6.824/papers/zanzibar.pdf)
  Why selected: important deeper resource for relation-based authorization and consistency tradeoffs, but not a first-pass teaching source.

---

## 8. API, Contracts, and Integrations

### Primary

- [API Design Patterns](https://www.manning.com/books/api-design-patterns?query=api)
  Why selected: strong on API design patterns, resource modeling, partial updates, validation, and edge cases.

- [Designing Web APIs](https://www.oreilly.com/library/view/designing-web-apis/9781492026914/)
  Why selected: broad API lifecycle resource with strong coverage of developer experience and production-facing concerns.

### Supplement

- [Web API Design: The Missing Link](https://system-design.space/en/chapter/web-api-design-book/)
  Why selected: concise framing resource for resource-oriented API thinking.

- [Apollo Odyssey](https://www.apollographql.com/blog/introducing-odyssey-the-apollo-learning-platform/)
  Why selected: useful GraphQL-specific supplement after core API-contract thinking is established.

---

## 9. Asynchronous Systems and Distributed Workflow Thinking

### Primary

- [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/index.html)
  Why selected: durable pattern catalog for asynchronous messaging, routing, and integration design.

- [Designing Event-Driven Systems](https://benstopford.com/)
  Why selected: practical event-driven architecture resource with strong relevance to application-level distributed workflows.

### Supplement

- [Designing Data-Intensive Applications](https://dataintensive.net/)
  Why selected: cross-block core resource for consistency, coordination, and distributed state reasoning.

### Revisit Later

- [Temporal for Beginners: Durable Execution Fundamentals](https://www.udemy.com/course/temporal-for-beginners/)
  Why selected: useful implementation supplement for workflow orchestration after the core async concepts are already understood.

---

## 10. Testing and Quality Engineering

### Primary

- [Testing JavaScript](https://www.testingjavascript.com/)
  Why selected: strongest JavaScript-centric testing resource in the set for building a full-stack testing mindset rather than memorizing tool APIs.

- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html?source=post_page)
  Why selected: concise but high-value resource for test-layer tradeoffs and avoiding distorted test suites.

### Supplement

- [Contract Test](https://martinfowler.com/bliki/ContractTest.html)
  Why selected: compact conceptual resource for interface-boundary verification and when contract testing is necessary.

- [Pact Documentation](https://docs.pact.io/)
  Why selected: practical implementation reference for consumer-driven contract testing once the concept is already understood.

- [Testing Strategies in a Microservice Architecture](https://martinfowler.com/articles/microservice-testing/)
  Why selected: useful broader testing strategy reference for integration boundaries, contract verification, and end-to-end tradeoffs.

### Revisit Later

- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/latest/)
  Why selected: should be revisited here from a verification-method perspective, not only from a security perspective.

---

## 11. Search and Retrieval

### Primary

- [Relevant Search](https://www.manning.com/books/relevant-search)
  Why selected: strongest book in the set for relevance, ranking, query interpretation, synonyms, personalization, and treating search as a product capability instead of a storage add-on.

### Supplement

- [Meilisearch Relevancy Documentation](https://www.meilisearch.com/docs/learn/relevancy/relevancy)
  Why selected: useful implementation-facing reference for ranking rules, relevance tuning, and practical search behavior once the conceptual model is in place.

- [Typesense Ranking and Relevance](https://typesense.org/docs/guide/ranking-and-relevance.html)
  Why selected: strong practical explanation of ranking, tie-breaking, boosting, and relevance controls in a modern app-focused search engine.

### Revisit Later

- [Enterprise Search in Action](https://www.manning.com/books/enterprise-search-in-action-cx)
  Why selected: broader and heavier search architecture resource that becomes more useful once basic app-search capability is already understood.

---

## 12. Analytics and Experimentation

### Primary

- [Lean Analytics](https://www.oreilly.com/library/view/lean-analytics/9781449335687/)
  Why selected: still one of the best resources for metric selection, funnel thinking, cohort reasoning, and avoiding vanity metrics in product work.

- [Trustworthy Online Controlled Experiments](https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/trustworthy-online-controlled-experiments/BFFD7CC0B7325B5DCEEFFB1DD9401F7E)
  Why selected: strongest resource in the set for A/B testing, experimentation pitfalls, metric trustworthiness, and online experiment design at product scale.

### Supplement

- [Experiment Guide](https://experimentguide.com/)
  Why selected: practical companion site tied to the experimentation book with accessible material for applying the underlying concepts.

### Revisit Later

- [Implementing Analytics](https://www.oreilly.com/library/view/implementing-analytics/9780124016965/)
  Why selected: broader analytics implementation resource that is more useful once core product-metric and experimentation judgment already exists.

---

## 13. Billing, Entitlements, and Business Logic Economics

### Primary

- [Monetizing Innovation](https://www.wiley-vch.de/en/areas-interest/finance-economics-law/business-management-13ba/business-society-13ba7/monetizing-innovation-978-1-119-24086-0)
  Why selected: strongest pricing and packaging resource in the set.

- [Subscribed](https://www.simonandschuster.com/authors/Tien-Tzuo/234929878)
  Why selected: strong on subscription business model thinking and recurring revenue logic.

### Supplement

- [Stripe Subscriptions](https://docs.stripe.com/subscriptions?locale=en-GB)
  Why selected: implementation reference required for concrete recurring billing mechanics even though it is not the conceptual teaching resource.

- [Stripe Introduction to Recurring Billing](https://stripe.com/en-ca/guides/introduction-to-recurring-billing)
  Why selected: useful bridge between business billing concepts and implementation mechanics.

- [OpenView SaaS Pricing Resources](https://openviewpartners.com/saas-pricing/)
  Why selected: useful supplementary material for modern SaaS pricing and packaging thinking.

### Selection note

This block remains under-served by the market.
It still requires synthesis from other blocks, especially domain modeling, asynchronous systems, and product strategy.

---

## 14. Security, Privacy, and Compliance

### Primary

- [Security Engineering, 3rd Edition](https://www.oreilly.com/library/view/security-engineering-3rd/9781119642787/)
  Why selected: broad and serious security engineering resource covering systems, incentives, and adversarial design.

- [Web Security Academy](https://portswigger.net/web-security)
  Why selected: strongest practical hands-on application security resource in the set.

- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/latest/)
  Why selected: structured methodology for turning security awareness into actual testing practice.

### Supplement

- [OWASP ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/)
  Why selected: useful verification and control baseline for application security requirements.

- [NIST Privacy Engineering Program](https://www.nist.gov/privacy-engineering)
  Why selected: strong conceptual supplement for privacy-by-design and privacy risk thinking.

- [NIST Privacy Engineering Documents](https://www.nist.gov/itl/applied-cybersecurity/cybersecurity-and-privacy-applications/privacy-engineering-documents)
  Why selected: helpful for deeper privacy, retention, deletion, and governance work.

---

## 15. Reliability, Observability, and Operations

### Primary

- [Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/)
  Why selected: foundational resource for reliability, service ownership, and operational discipline.

- [The Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)
  Why selected: practical translation of SRE concepts into workflows and operational mechanisms.

- [Observability Engineering, 2nd Edition](https://www.oreilly.com/library/view/observability-engineering-2nd/9781098179915/)
  Why selected: strongest current resource for observability as a thinking discipline rather than a tooling category.

### Supplement

- [USE Method](http://www.brendangregg.com/usemethod.html)
  Why selected: compact but high-value operational framework for bottleneck analysis and system observation.

- [RED Method](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/)
  Why selected: durable service-metrics framing for baseline instrumentation.

---

## 16. Performance Engineering

### Primary

- [Release It! Second Edition](https://pragprog.com/titles/mnee2/release-it-second-edition/)
  Why selected: best production-oriented performance and stability book in the set for understanding bottlenecks, resource exhaustion, backpressure, and performance as part of system resilience.

- [Web Performance in Action](https://www.oreilly.com/library/view/web-performance-in/9781617293771/)
  Why selected: strongest app-focused frontend performance resource in the set, covering rendering, assets, critical-path optimization, and user-visible speed.

### Supplement

- [Systems Performance, 2nd Edition](https://www.brendangregg.com/systems-performance-2nd-edition-book.html)
  Why selected: deep systems-level resource for profiling, bottleneck analysis, operating system effects, and disciplined performance diagnosis.

- [High Performance Browser Networking](https://www.oreilly.com/library/view/high-performance-browser/9781449344757/)
  Why selected: valuable network-performance resource for understanding latency, transport behavior, and browser-network constraints that shape web-app speed.

- [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
  Why selected: current implementation reference for browser performance APIs, measurements, and platform-specific guidance.

---

## 17. Developer Experience and Tooling

### Primary

- [Software Engineering at Google](https://www.oreilly.com/library/view/software-engineering-at/9781492082781/)
  Why selected: strongest broad resource in the set for sustainable engineering practices, code health, tooling philosophy, documentation, and long-lived codebase discipline.

- [Accelerate](https://www.oreilly.com/library/view/accelerate/9781457191435/)
  Why selected: strong evidence-based resource for delivery performance, feedback loops, workflow quality, and engineering practices that affect developer productivity and release confidence.

### Supplement

- [Patterns for Managing Source Code Branches](https://martinfowler.com/articles/branching-patterns.html?_hsmi=87382959)
  Why selected: practical branching and integration strategy resource for keeping delivery flow healthy.

- [Branch By Abstraction](https://martinfowler.com/bliki/BranchByAbstraction.html)
  Why selected: useful technique for evolving systems safely without long-lived branch pain.

- [Nx](https://nx.dev/)
  Why selected: practical modern reference point for monorepo, workspace, and CI-scaling concerns in TypeScript-heavy full-stack codebases.

---

## 18. Delivery, Infrastructure, and Organizational Mechanics

### Primary

- [Terraform: Up and Running](https://www.terraformupandrunning.com/)
  Why selected: strong practical infrastructure-as-code resource with good treatment of modules, environments, and reuse.

- [Docker Mastery](https://www.bretfisher.com/docker-mastery/)
  Why selected: practical containerization course with strong delivery and local-to-deployment relevance.

- [Team Topologies](https://teamtopologies.com/book)
  Why selected: strong on ownership boundaries, platform thinking, and reducing cognitive load in delivery systems.

### Supplement

- [Kubernetes: Up and Running, 3rd Edition](https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/)
  Why selected: useful orchestration resource after container and deployment fundamentals are already solid.

- [Platform Engineering](https://www.oreilly.com/library/view/platform-engineering/9781098153632/)
  Why selected: useful later resource for internal platform thinking and developer-experience-aware infrastructure design.

---

## Notes

### Cross-block resources

Some resources appear in more than one conceptual area because they serve more than one role.
For example:

- `Designing Data-Intensive Applications` supports both data systems and asynchronous/distributed workflow reasoning.
- `Web Security Academy` supports both authentication/authorization and broader security work.

This is intentional.

### Non-canonical implementation references

A few implementation references remain necessary even though this curriculum strongly prefers books, courses, and long-form teaching materials.
The most obvious example is Stripe documentation for recurring billing mechanics.
These references should not replace the conceptual and systems-level resources.

### Future refinement

This file is the selected canon for now, not an untouchable final truth.
Future refinement should focus on:

- removing redundancy
- replacing weak resources if stronger ones are found
- clarifying study order
- identifying which blocks need explicit synthesis work because the market does not teach them cleanly
