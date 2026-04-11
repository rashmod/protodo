# Low-Cost Learning Plan

This document adapts the lifecycle-based execution plan into a low-cost learning path.

The goal is to follow the original planning ideology without turning the roadmap into a requirement to spend money early. Each phase should still satisfy its original "Usable means", but every item should be approached with one of four labels:

- `Build`: implement now because the phase is not honestly usable without it.
- `Simulate`: exercise the workflow locally, with sandbox accounts, mocks, stubs, or cheap substitutes.
- `Document`: write the design, constraints, migration path, or operational policy without implementing the full system yet.
- `Defer`: intentionally skip until a later phase, real user pressure, or real revenue justifies it.

## Cost Rules

- Build for the current phase, not for the final phase.
- Design for the next phase, not for all future phases.
- Prefer local-first and free-tier-first tools.
- Prefer a monolith, one relational database, and one deployment target until the plan forces more complexity.
- Use real paid services only when the learning goal requires real-world validation.
- A phase is complete when its "Usable means" is true, not when every bullet has enterprise-grade depth.

---

# Phase 1 — MVP (Foundational Product)

## Objective

Learn how to ship a real single-user SaaS foundation cheaply.

## Build

- Email + password authentication
- User/account model
- Session management
- Task CRUD
- REST API
- Pagination
- Input validation
- Responsive UI
- Error boundaries
- Soft deletes
- Relational database
- TLS in local development
- Password hashing
- Core input sanitization and CSRF / XSS / SQLi protections
- Manual deployments
- Local HTTPS development domain with trusted certs

## Simulate

- Session inventory + device visibility
- Explicit session invalidation rules
- Account recovery UX/policies
- Basic reminders
- Basic client-side caching
- Backups and restore drills

## Document

- Account lifecycle rules
- Recovery abuse controls and anti-enumeration approach
- Manual restore procedure
- Single-region assumptions
- Security boundaries for MVP

## Defer

- Anything related to orgs, RBAC / ABAC, OAuth, magic links, audit logs
- Production-grade observability stacks
- Zero-downtime deployments
- Anything beyond basic unit tests and linting

## Cheap Execution Notes

- Run Postgres locally and use one cheap hosted Postgres only when you need a deployed environment.
- Use local HTTPS and a custom local domain exactly as the main plan requires.
- Use logs, database inspection, and simple admin scripts instead of paid ops tooling.
- Keep reminders best-effort; a cron job or lightweight background process is enough.

---

# Phase 2 — Early SaaS (Team Product)

## Objective

Learn collaboration, tenant isolation, and the first operational jump without adopting expensive infrastructure.

## Build

- Org / workspace model
- Tenant isolation
- Invite flow
- Org membership
- Basic RBAC
- Queues, but in the simplest practical form
- Async reminders
- Email notifications
- Sorting and filtering
- Coarse rate limiting
- Idempotent writes
- Accessibility baseline
- Event tracking at a minimal level
- Multi-environment setup: local / dev / prod
- Repeatable deployments
- Structured logging
- Basic metrics

## Simulate

- Session revocation on membership or role changes
- Suspicious login detection + handling
- Audit semantics and logs
- Retry strategies
- Basic webhooks
- Frontend telemetry
- Bug report UI
- Import / export across all listed formats
- Data migration tooling

## Document

- Sharding strategy
- Authorization semantics with org membership effects
- Queue retry and failure policy
- Webhook signing and replay strategy
- Local HTTPS bootstrap process
- Architecture diagrams
- Secrets management approach

## Defer

- Fine-grained RBAC or any ABAC-like depth
- Expensive notification infrastructure
- Heavy observability platforms
- Full operational hardening beyond what small-team usability requires

## Cheap Execution Notes

- A database-backed job table is acceptable before adopting dedicated queue infrastructure.
- Use one transactional email provider only when you need real invites or notifications; until then, use local inbox tooling or provider sandboxes.
- Keep audit logs in your main database before introducing external log pipelines.

---

# Phase 3 — Growth SaaS (Monetized & Reliable)

## Objective

Learn monetization and reliability patterns, but do not assume you must run a fully scaled paid SaaS stack.

## Build

- Subscription lifecycle in sandbox and then minimal live form if needed
- Free vs paid users
- Usage limits
- Feature gating
- Billing webhooks
- Feature flags
- Kill switches
- Error tracking
- Monitoring and alerting at a basic but real level
- Integration tests

## Simulate

- Invoices & receipts
- Proration
- Coupons
- AI integration
- Task summarization
- Natural language input parsing
- Auto-categorization
- OAuth provider integration
- Magic links
- Dead letter queues
- Backpressure handling
- GraphQL API
- Hard deletes
- Caching
- Read / write splitting
- Point-in-time recovery
- File storage
- NoSQL DB usage
- Load testing
- Incident process, postmortems, and status page

## Document

- API versioning strategy
- Graceful deprecation paths
- Event-driven architecture boundaries
- Data retention policy
- On-call rotation design
- Funnel, cohort, churn, retention, and adoption metric definitions
- Calendar integration architecture
- Threat modeling process
- Compliance document outlines

## Defer

- Anything that requires meaningful scale before it provides value
- Expensive AI usage in production
- Architectural diversification without a clear bottleneck
- Full analytics stack or warehouse-grade reporting

## Cheap Execution Notes

- Use payment-provider sandboxes first.
- Implement one paid plan before building a complex pricing matrix.
- Treat GraphQL as optional unless it solves a real problem.
- Use simple feature flags from your database or config before buying a feature-management platform.

---

# Phase 4 — Scale SaaS (Operationally Mature)

## Objective

Learn operational maturity patterns mostly through design, experiments, and selective implementation.

## Build

- Performance improvements that the actual app already needs
- Lazy loading
- Virtualization for long lists
- Debounced searches
- Performance budgets in a lightweight form
- A small design system if the app complexity now justifies it

## Simulate

- Basic ABAC
- Realtime presence
- Offline sync (non-CRDT)
- Conflict resolution
- Circuit breakers
- Graceful degradation
- MFA
- Token rotation
- Dependency scanning
- Secrets rotation
- Translation workflows
- Ticketing integration
- Chaos testing

## Document

- Kubernetes
- Autoscaling
- Load balancing
- CDN strategy
- Blue/green and canary deployments
- Zero-downtime deployments and migrations
- Rollback strategies
- PR preview deployments
- Infrastructure as Code
- Bring-your-own-infra support
- Search indexing
- Cold storage
- Hot partition handling
- Offline support architecture
- SLOs / SLIs
- Error budgets
- Cost monitoring
- Runbooks
- DDoS protection
- Encryption at rest
- Right to be forgotten
- Consent management
- Timezone, time, and date handling rules
- Customer support workflows
- Knowledge base
- Maintenance windows
- RFC process

## Defer

- Full scale-platform operations unless you actually have scale
- Expensive multi-service infrastructure
- Formal support operations before real support demand exists

## Cheap Execution Notes

- This phase is primarily a study phase unless your real traffic forces otherwise.
- Prefer ADRs, diagrams, tabletop incident exercises, and local experiments over full rollout.
- Build only the performance and frontend maturity work that your real app already needs.

---

# Phase 5 — Enterprise & Global SaaS

## Objective

Treat this phase mainly as advanced study unless you have enterprise customers or regional compliance pressure.

## Build

- Only the subset directly required by real customers or legal obligations

## Simulate

- GDPR / CCPA request flows
- Data anonymization
- Access reviews
- Audit trails
- Impersonation
- Taxes, dunning, referrals
- A/B testing
- Third-party integrations
- Admin dashboard concepts

## Document

- Data residency model
- Retention and deletion schedules
- DPAs
- Incident disclosure process
- SOC2 controls mapping
- Zero-trust assumptions
- Pen test process
- Vulnerability disclosure policy
- Content Security Policy
- RTL language support plan
- Currency support
- Locale-based sorting
- Regional feature availability
- Legal text by region
- Data warehouse design
- SDK strategy
- User-published pages architecture
- Feature request board policy
- SLA tracking
- Cost controls
- CRDT / Operational Transformation
- Decentralized / offline-first sync
- Multi-region active-active
- Low-latency replication
- Cold start mitigation
- Formal verification for critical scheduling / recurrence logic
- Vendor lock-in migration plan
- Documented scalability limits
- Release notes automation

## Defer

- Enterprise operations and multi-region implementation before real enterprise demand exists
- Compliance work that has no user, legal, or contractual trigger
- Deep collaboration architecture that your product does not yet need

## Cheap Execution Notes

- Most of this phase should be design documents, checklists, threat models, and architectural studies.
- Do not pay to operate enterprise-grade systems only to say you touched them.

---

# Cross-Cutting Guidance

## Testing & QA

- `Build`: linting, unit tests, integration tests where they protect core workflows
- `Simulate`: load tests, failure drills, recovery drills
- `Document`: test strategy per phase
- `Defer`: expensive test infrastructure until it solves an actual risk

## Security

- `Build`: authentication basics, secure defaults, validation, password hashing, TLS
- `Simulate`: incident drills, suspicious login handling, key rotation exercises
- `Document`: threat models, control maps, future policies
- `Defer`: enterprise controls until legally or operationally required

## Observability

- `Build`: logs, a few core metrics, basic error tracking once needed
- `Simulate`: alert thresholds and incident routing
- `Document`: SLOs, dashboards, escalation paths
- `Defer`: large observability spend before the app has meaningful traffic

## Backup & Recovery

- `Build`: backups and restore steps for the current data model
- `Simulate`: restore drills on sample environments
- `Document`: RPO / RTO targets by phase
- `Defer`: expensive disaster recovery setups until later phases

## Documentation

- `Build`: setup docs, runbooks for the current phase, ADRs for major choices
- `Simulate`: onboarding flows, support docs, postmortem templates
- `Document`: future architecture and migration plans
- `Defer`: heavy process overhead that exceeds the current team size

---

# Recommended Working Method

For each phase, execute in this order:

1. Make the product honestly usable for that phase.
2. Build only the items that are required to support that truth.
3. Simulate workflows that are educational but too expensive to fully run.
4. Document the next layer of maturity so future work has a clear path.
5. Defer anything that is only justified by hypothetical future scale.

If a task does not improve current-phase usability, teach a clearly relevant concept, or reduce near-term rework, it should probably not be implemented yet.
