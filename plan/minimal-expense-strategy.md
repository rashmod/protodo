# Minimal Expense Strategy

This document defines how to follow the project plan as a solo learning project while keeping expenses intentionally low.

The goal is not "free at all costs."
The goal is:

- spend only when the paid version teaches something the local or free version cannot
- keep the product real where that matters
- avoid infrastructure cosplay
- stay honest about what one person can operate

This strategy should be read together with:

- `planning-strategy.md`
- `execution-plan.md`
- `solo-feasibility-assessment.md`

---

## Core Policy

### 1. Local-first by default

Every feature should be developed and validated locally first unless the value of the feature depends on a real hosted environment.

Examples of features that often need live validation:

- auth callback behavior
- cookies and HTTPS behavior
- webhook delivery
- email delivery
- production deployment behavior

Everything else should begin locally.

### 2. Pay only for learning leverage

Before adding a paid service, ask:

What am I learning from paying for this that I cannot learn with a local setup, open-source tool, or free tier?

If the answer is weak, do not pay for it yet.

### 3. Prefer narrow real systems over broad fake scale

It is better to run one real production deployment, one real database, and one real backup flow than to pay for a large collection of production-shaped services that are barely used.

### 4. Hard budget discipline

This project should have explicit monthly budget ceilings by phase.

Suggested ceilings:

- Phase 1: up to `$25/month`
- Phase 2: up to `$75/month`
- Phase 3: up to `$150/month`
- Phase 4: up to `$250/month`
- Phase 5: up to `$400/month`

If a phase exceeds its ceiling, the default answer is not "increase budget."
The default answer is:

- remove unnecessary paid services
- move work back to local
- delay the paid feature
- replace the service with a cheaper alternative

### 5. Avoid paid complexity until the phase truly needs it

The lifecycle plan still governs scope.

Minimal expense does not mean skipping important capabilities.
It means implementing them with the cheapest serious approach that still teaches the underlying concept.

---

## Phase-by-Phase Strategy

## Phase 1 - MVP

### Goal

Build the product fully for real with near-minimal spend.

### Spend target

- Ideal: `$0-$15/month`
- Acceptable ceiling: `$25/month`

### Build locally

- App development
- Database during development
- Auth flows during development
- Task CRUD
- Session management
- Validation and security protections
- Unit tests
- Basic logging
- Backups and restore drills

### Pay for

- Domain name if you want real hosted validation
- A single cheap production deployment if you want the app publicly reachable

### Avoid paying for

- premium observability
- managed queues
- premium auth products
- multiple always-on environments
- advanced storage setups

### Phase 1 rule

If a capability can be learned locally in this phase, keep it local.

---

## Phase 2 - Early SaaS

### Goal

Build most of the team-product features for real without introducing unnecessary service sprawl.

### Spend target

- Ideal: `$20-$50/month`
- Acceptable ceiling: `$75/month`

### Build locally

- org/workspace model
- invite and membership logic
- RBAC
- audit logging implementation
- queue workers during development
- import/export flows
- telemetry event generation
- metrics and logging pipelines during development

### Pay for

- one real production app environment
- one real production database
- low-cost email delivery if needed
- low-cost error tracking or uptime monitoring if it teaches something useful

### Optional paid validation

- a dev/staging environment for deployment validation
- a low-cost queue or redis service if local-only operation stops teaching enough

### Avoid paying for

- enterprise email tooling
- multiple paid observability vendors
- premium analytics suites
- dedicated support tooling
- expensive managed workflow orchestration

### Phase 2 rule

Use paid services only when the hosted behavior itself is part of what needs to be learned.

---

## Phase 3 - Growth SaaS

### Goal

Build selected monetization and reliability capabilities for real, but with strong limits on operating scope.

### Spend target

- Ideal: `$50-$100/month`
- Acceptable ceiling: `$150/month`

### Build locally

- billing logic integration in test mode first
- feature flags
- kill switches
- AI integration experiments
- GraphQL implementation
- dead letter queues
- backpressure handling
- versioning and deprecation mechanics
- hard delete policies
- tracing and dashboards during development

### Pay for

- real production hosting with enough capacity to behave predictably
- real billing provider usage in test mode, then limited live mode if needed
- real error tracking or observability if it meaningfully improves learning
- low-cost object storage if file handling is part of the phase

### Optional paid validation

- low-cost cache/redis
- limited staging environment
- small-scale load testing infrastructure

### Avoid paying for

- expensive enterprise observability
- large multi-environment fleets
- unnecessary managed databases purely for architecture aesthetics
- premium AI infra unless the AI feature itself is the learning goal

### Phase 3 rule

Pay for reliability and monetization validation only where the live behavior matters.
Do not pay to imitate scale you do not have.

---

## Phase 4 - Scale SaaS

### Goal

Learn the technical mechanisms of scale without pretending to operate a large-scale SaaS.

### Spend target

- Ideal: `$75-$150/month`
- Acceptable ceiling: `$250/month`

### Build locally

- load generation
- failure injection
- autoscaling experiments where possible
- horizontal scaling experiments
- large dataset simulation
- deployment strategy experiments
- runbooks
- incident exercises

### Pay for

- only the infrastructure needed to validate a specific scaling or deployment concept
- short-lived environments for benchmarks or migration rehearsals
- bounded monitoring if it helps analyze experiments

### Avoid paying for

- permanent overprovisioned infrastructure
- multi-region production environments running continuously
- enterprise monitoring stacks
- expensive replicas or clusters with no real learning payoff

### Phase 4 rule

Prefer temporary experiments over permanent infrastructure.
Time-box expensive tests and shut them down.

---

## Phase 5 - Enterprise & Global SaaS

### Goal

Learn the architecture and constraints of enterprise/global systems with minimal recurring cost.

### Spend target

- Ideal: `$100-$200/month`
- Acceptable ceiling: `$400/month`

### Build locally

- governance models
- retention and deletion workflows
- access control models
- auditability features
- compliance mapping documents
- regional architecture planning
- SLA and operational documentation

### Pay for

- only narrow prototypes that require real regional or vendor behavior
- short-lived regional deployment tests
- targeted experiments for latency, residency, or failover understanding

### Avoid paying for

- sustained multi-region deployments
- compliance vendors
- expensive enterprise security products
- production-grade global routing setups as always-on infrastructure

### Phase 5 rule

This phase should be architecture-heavy and prototype-light, not infrastructure-heavy.

---

## Recommended Cost Mindset By Capability

## Build cheaply but seriously

- authentication
- authorization
- APIs
- task product features
- multi-tenancy
- queues
- webhooks
- billing logic
- feature flags
- audit logs
- CI/CD
- backups and restore drills

## Spend only when live behavior matters

- email delivery
- webhook validation
- production cookie/auth behavior
- deployment rollouts
- billing provider live flows
- object storage
- uptime/error monitoring

## Usually not worth paying for early

- premium analytics platforms
- multiple observability products
- enterprise auth vendors
- advanced infrastructure automation
- constant staging fleets
- heavy multi-region infrastructure
- enterprise compliance tooling

---

## Recommended Operating Model

Use a three-layer model:

- local as the main development environment
- one cheap production deployment for reality checks
- temporary experimental environments only when a specific learning objective needs them

This is usually enough for a solo project.

---

## Spending Triggers

A paid service is justified when at least one of these is true:

- the feature cannot be meaningfully learned locally
- the hosted behavior is itself the subject of learning
- the service replaces substantial complexity that is not useful to rebuild
- the paid version enables a realistic validation that materially changes design decisions

If none of these are true, do not pay for it.

---

## Anti-Patterns

Avoid these:

- paying for multiple services that solve the same problem
- running permanent infrastructure for occasional experiments
- buying premium SaaS tools before basic workflows exist
- introducing scale-oriented services before bounded single-node operation is understood
- confusing a production-shaped architecture with actual learning progress

---

## Practical Interpretation

If this strategy is followed seriously:

- Phase 1 can be done almost free or very cheap
- Phase 2 can still stay inexpensive
- Phase 3 is where recurring spend becomes noticeable but still manageable
- Phase 4 and Phase 5 should increase thoughtfulness more than they increase monthly spend

That is the right outcome for a solo learning project.
