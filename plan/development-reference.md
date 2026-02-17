# Development Reference Guide

**Legend**

* **[CUSTOM]** → you implement semantics/logic
* **[LIB]** → in-process library/framework
* **[SERVICE]** → external/managed service
* **[HYBRID]** → CUSTOM semantics + LIB/SERVICE machinery

---

# Part 1: Build vs Buy Summary

## What You Always Build Yourself (Core Learning Targets)

These you implement yourself, regardless of phase or libraries/services:

* **Task domain logic** (states, recurrence later)
* **Multi-tenancy model** (org/workspace isolation rules)
* **RBAC → ABAC semantics** (policy evaluation logic; store policies in DB)
* **Entitlements** (plan → limits → enforcement points in API/UI/jobs)
* **Idempotency behavior** (key storage + replay semantics)
* **Webhook delivery semantics** (signing, retries, DLQ handling)
* **Backpressure policies** (what to drop/slow/deny and when)
* **Offline/conflict rules** (later phases)

## What You Use External Tools For (With Phase Transitions)

### Authentication & Session Management

* **Email + password auth**
  * Phase 1+: **[HYBRID]** (LIB: Auth.js/NextAuth; CUSTOM: user model)
* **OAuth (at least one provider)**
  * Phase 1-2: Not implemented
  * Phase 3+: **[LIB/SERVICE]** (Auth.js + OAuth providers)
* **Magic links**
  * Phase 1-2: Not implemented
  * Phase 3+: **[HYBRID]** (LIB: Auth.js; SERVICE: email provider)
* **Session management**
  * Phase 1+: **[LIB]** (Auth.js/NextAuth session store)
* **Password hashing**
  * Phase 1+: **[LIB]** (bcrypt/argon2 via Auth.js)
* **MFA**
  * Phase 1-3: Not implemented
  * Phase 4+: **[LIB/SERVICE]** (TOTP library; optional SMS/email service)

#### Auth Boundary (What To Buy vs Build)

**Buy (machinery):**

* Framework-level auth/session plumbing via Auth.js/NextAuth or Better Auth
* Password hashing primitives (bcrypt/argon2 libraries)
* OAuth protocol/provider integrations (at least one provider)
* Email delivery infrastructure for magic links/recovery/invites
* MFA crypto primitives (TOTP libraries) and optional SMS/email delivery

**Build (your semantics):**

* User/account domain model and account lifecycle rules
* Session inventory model (device/session list with revocation metadata)
* Session invalidation policy: logout current, logout all, forced revoke cases
* Suspicious-login/risk policies and resulting UX/actions
* Account recovery UX/policies (including anti-enumeration and abuse controls)
* Authorization semantics (RBAC/ABAC), org membership effects, and audit semantics

**Stop-building line for auth:**

* Do not implement OAuth, password hashing, OTP algorithms, token primitives, or email infrastructure from scratch.
* Always keep policy decisions and access semantics in application-owned code/tables.

### Database & ORM

* **Relational database**
  * Phase 1+: **[SERVICE]** (Postgres - local in Phase 1, managed later)
* **ORM + migrations**
  * Phase 1+: **[LIB]** (Prisma OR Drizzle + migration tool - pick one and stick to it)
* **Database backups**
  * Phase 1+: **[SERVICE]** (managed Postgres backups)
* **Point-in-time recovery**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (managed Postgres)
* **Read/write splitting**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (DB replicas) + **[CUSTOM]** (routing logic)

### Validation & API

* **Input validation**
  * Phase 1+: **[LIB]** (Zod)
* **REST API**
  * Phase 1+: **[LIB]** (Next.js route handlers)
* **GraphQL API**
  * Phase 1-2: Not implemented
  * Phase 3+: **[LIB]** (Yoga/Apollo) + **[CUSTOM]** (schema/resolvers)
* **API versioning**
  * Phase 1: Not implemented
  * Phase 2+: **[CUSTOM]** (policy) + **[LIB]** (routing support)

### Frontend State & Caching

* **Client-side caching**
  * Phase 1+: **[LIB]** (TanStack Query)
* **Optimistic updates**
  * Phase 1: Not implemented
  * Phase 2+: **[LIB]** (TanStack Query) + **[CUSTOM]** (correctness rules)

### Background Processing

* **Queues**
  * Phase 1: Not implemented
  * Phase 2+: **[LIB]** (BullMQ + Redis)
* **Email notifications**
  * Phase 1: Not implemented
  * Phase 2+: **[SERVICE]** (SendGrid/Mailgun/SES) + **[LIB]** (SDK)

### Payments & Billing

* **Payment processing**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (Stripe) + **[LIB]** (Stripe SDK)
* **Invoices & receipts**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (Stripe)
* **Proration**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (Stripe)
* **Coupons**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (Stripe)
* **Taxes**
  * Phase 1-3: Not implemented
  * Phase 5+: **[SERVICE]** (Stripe Tax or provider)
* **Dunning**
  * Phase 1-3: Not implemented
  * Phase 5+: **[SERVICE]** (Stripe dunning/retries) + **[CUSTOM]** (comms rules)

### Storage

* **File storage**
  * Phase 1: Local filesystem (or S3-compatible local like MinIO)
  * Phase 3+: **[SERVICE]** (S3/GCS)
* **Cold storage**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE]** (S3/GCS) + lifecycle rules

### Caching

* **Application caching**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (Redis)

### Search

* **Search index**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE]** (Meilisearch/Typesense/OpenSearch - pick one)

### Observability

* **Structured logging**
  * Phase 1: Minimal logging **[LIB]** (console/basic logger)
  * Phase 2+: **[LIB]** (pino) + **[CUSTOM]** (fields/standards)
* **Tracing**
  * Phase 1-2: Not implemented
  * Phase 3+: **[LIB]** (OpenTelemetry)
* **Metrics**
  * Phase 1: Not implemented
  * Phase 2: Basic metrics **[LIB]**
  * Phase 3+: **[HYBRID]** (LIB: OpenTelemetry; CUSTOM: what to measure)
* **Error tracking**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (Sentry)

### Testing

* **Linting**
  * Phase 1+: **[LIB]** (ESLint)
* **Unit tests**
  * Phase 1+: **[LIB]** (Vitest/Jest)
* **Integration tests**
  * Phase 1-2: Not implemented
  * Phase 3+: **[LIB]** (Vitest/Jest, Playwright/Cypress)
* **Load testing**
  * Phase 1-2: Not implemented
  * Phase 3+: **[LIB]** (k6/artillery)
* **Chaos testing**
  * Phase 1-3: Not implemented
  * Phase 4+: **[LIB]** + **[CUSTOM]** (scenarios)

### Infrastructure

* **Build pipelines**
  * Phase 1: Manual
  * Phase 2+: **[SERVICE]** (GitHub Actions) + config
* **Secrets management**
  * Phase 1: Environment variables
  * Phase 2+: **[SERVICE]** (cloud secrets) + **[CUSTOM]** (conventions)
* **Kubernetes**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE/PLATFORM]** (K8s) + **[CUSTOM]** (manifests)
* **CDN**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE]** (host-provided CDN)
* **IaC**
  * Phase 1-3: Not implemented
  * Phase 4+: **[LIB]** (Terraform/Pulumi) + **[CUSTOM]** (modules)
* **Load balancing**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE]**
* **Autoscaling**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE]**
* **Low-latency replication**
  * Phase 1-4: Not implemented
  * Phase 5+: **[SERVICE]** + **[CUSTOM]** (sync strategy)

### Security

* **TLS encryption**
  * Phase 1+: **[SERVICE]** (platform TLS)
* **Input sanitization**
  * Phase 1+: **[LIB]** (framework built-in)
* **CSRF / XSS / SQLi protection**
  * Phase 1+: **[LIB/FRAMEWORK]** (Next.js built-in)
* **Dependency scanning**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE]** (Dependabot/Snyk)
* **DDoS protection**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE]** (platform/cloud provider)
* **Encryption at rest**
  * Phase 1-3: Not implemented
  * Phase 4+: **[SERVICE]** (managed database/storage)

### Internationalization

* **i18n**
  * Phase 1-3: Not implemented
  * Phase 4+: **[LIB]** (i18next/next-intl)
* **Date/time/timezone handling**
  * Phase 1-3: Not implemented
  * Phase 4+: **[LIB]** (date-fns/luxon) + **[CUSTOM]** (rules)

### Analytics

* **Event tracking**
  * Phase 1: Not implemented
  * Phase 2+: **[HYBRID]** (CUSTOM: taxonomy; SERVICE: PostHog/Segment)
* **Funnels**
  * Phase 1-2: Not implemented
  * Phase 3+: **[SERVICE]** (analytics platform)
* **A/B testing**
  * Phase 1-4: Not implemented
  * Phase 5+: **[SERVICE/LIB]** (flags + experimentation) + **[CUSTOM]** (metrics)

---

# Part 2: Detailed Feature Catalog

## AI & Smart Features

* ai integration — **[HYBRID]** (CUSTOM: prompts, guardrails, eval; SERVICE: model API; LIB: SDK)
* Natural language input parsing — **[HYBRID]** (CUSTOM: intent schema + rules; SERVICE: model)
* auto-categorization — **[HYBRID]** (CUSTOM: taxonomy + thresholds; SERVICE: model/embeddings)
* summarize tasks — **[HYBRID]** (CUSTOM: formatting + policies; SERVICE: model)

---

## Payments & Billing

* payment integration — **[SERVICE]** (Stripe) + **[LIB]** SDK
* free vs paid users — **[CUSTOM]** (entitlements model) + **[SERVICE]** (Stripe as source of truth for subscription state)
* usage limits — **[CUSTOM]** (metering + enforcement) + **[LIB/SERVICE]** (Redis for counters optional)
* feature gating — **[CUSTOM]** (entitlements evaluation)
* subscription lifecycle — **[HYBRID]** (SERVICE: Stripe lifecycle; CUSTOM: mapping to product access)
* invoices and receipts — **[SERVICE]** (Stripe)
* proration — **[SERVICE]** (Stripe)
* taxes — **[SERVICE]** (Stripe Tax or provider)
* dunning — **[SERVICE]** (Stripe dunning / retries) + **[CUSTOM]** comms rules
* billing webhooks — **[HYBRID]** (CUSTOM: signature verify + idempotent handlers; SERVICE: Stripe events)
* referrals — **[CUSTOM]** (rules) + **[SERVICE/LIB]** (payments tie-in optional)
* coupons — **[SERVICE]** (Stripe coupons/promo codes)

---

## Background Processing & Notifications

* queues for background tasks — **[SERVICE/LIB]** (Redis + BullMQ) or managed queue
* reminders — **[CUSTOM]** (scheduling semantics) + **[LIB/SERVICE]** (queue + cron/scheduler)
* email notification — **[SERVICE]** (SendGrid/Mailgun/SES) + **[LIB]**
* event driven architecture — **[HYBRID]** (CUSTOM: event contracts; LIB: emitter/queue/topic)
* retry strategies — **[CUSTOM]** (policy) + **[LIB]** (queue retry mechanics)
* dead letter queues — **[LIB/SERVICE]** (queue DLQ feature) + **[CUSTOM]** handling workflow
* Backpressure handling — **[CUSTOM]** (rules) + **[LIB/SERVICE]** (rate limit/queue controls)

---

## Multi-tenancy

* multi tenancy support — **[CUSTOM]** (data model + isolation rules) + **[LIB]** (ORM support)

  * sharding strategy — **[CUSTOM]** (design + routing) + **[SERVICE]** (DB infra when real)

---

## Authentication & Authorization

* production grade authentication — **[HYBRID]** (LIB: Auth.js; CUSTOM: policies, user model)

  * email password — **[HYBRID]** (LIB: auth framework; LIB: hashing)
  * oauth (at least one provider) — **[LIB/SERVICE]** (Auth.js + OAuth providers)
  * magic links — **[HYBRID]** (LIB: Auth.js; SERVICE: email)
  * mfa — **[LIB/SERVICE]** (TOTP library; optional service for SMS/email)
  * session management — **[LIB]** (Auth.js/session store)
  * token rotation — **[HYBRID]** (LIB: JWT/session; CUSTOM: rotation policy)
  * rbac and abac — **[CUSTOM]** (policy model + evaluator)
  * org/workspace — **[CUSTOM]** (tenant model)
  * invite flow — **[CUSTOM]** (workflow) + **[SERVICE]** (email)
  * audit logs — **[HYBRID]** (CUSTOM: schema + what to log; LIB: logger + DB)

---

## Frontend

* component design system — **[LIB/FRAMEWORK]** (shadcn/ui or similar) + **[CUSTOM]** conventions
* frontend theming — **[LIB]** (Tailwind/themes) + **[CUSTOM]** tokens
* accessibility — **[HYBRID]** (LIB: accessible components; CUSTOM: app-level discipline)
* responsive design — **[LIB/FRAMEWORK]** (CSS framework) + **[CUSTOM]**
* offline support — **[HYBRID]** (LIB: service worker tooling; CUSTOM: offline rules/conflicts)
* error boundaries — **[FRAMEWORK]** (React) + **[CUSTOM]**
* performance budgets (LCP, CLS) — **[HYBRID]** (LIB: web-vitals tooling; CUSTOM: budgets/enforcement)
* client side caching — **[LIB]** (TanStack Query) + **[CUSTOM]** cache rules
* telemetry on frontend — **[HYBRID]** (SERVICE: Sentry/PostHog/etc; CUSTOM: events schema)
* bug report on frontend — **[SERVICE/LIB]** (Sentry) + **[CUSTOM]** UX
* optimistic updates — **[LIB]** (TanStack Query) + **[CUSTOM]** correctness rules
* lazy-loading, virtualization, debounced searches — **[LIB]** (React lazy + react-virtual, debounce util)

---

## API

* rest api — **[FRAMEWORK]** (Next.js routes/Fastify/etc)
* graphql api — **[LIB]** (Yoga/Apollo) + **[CUSTOM]** schema/resolvers
* api versioning — **[CUSTOM]** (policy) + **[FRAMEWORK]** routing support
* pagination, sorting and filtering — **[CUSTOM]** semantics + **[LIB]** ORM/query builder
* rate limiting — **[HYBRID]** (CUSTOM: policy; LIB/SERVICE: Redis limiter)
* idempotency — **[CUSTOM]** (keys + storage + replay semantics)
* webhooks — **[CUSTOM]** (signing/verification + delivery semantics) + **[LIB/SERVICE]** queue/email optional
* data validation — **[LIB]** (Zod)
* graceful deprecation paths — **[CUSTOM]** (policy + comms) + **[FRAMEWORK]** version routing

---

## Feature Management

* feature flag use — **[HYBRID]** (CUSTOM: flag model; LIB/SERVICE: flag store)
* feature kill switches — **[HYBRID]** (CUSTOM: enforcement points; LIB/SERVICE: flag system)

---

## Data Management

* soft and hard deletes — **[CUSTOM]** (semantics + policies) + **[LIB]** ORM support

---

## Storage & Databases

* storage → cold storage — **[SERVICE]** (S3/GCS) + lifecycle rules
* relational db — **[SERVICE]** (Postgres) + **[LIB]** ORM
* nosql db — **[SERVICE]** (Redis/Dynamo/etc) used selectively
* search index — **[SERVICE]** (Meilisearch/Typesense/OpenSearch)
* caching — **[SERVICE]** (Redis)
* file storage — **[SERVICE]** (S3/GCS)
* point-in-time recovery — **[SERVICE]** (managed Postgres) + config
* read / write spliting — **[SERVICE]** (DB replicas) + **[CUSTOM]** routing logic
* index bloat and vacuuming — **[SERVICE]** (Postgres ops) + **[CUSTOM]** runbooks/alerts
* hot users — **[CUSTOM]** detection logic + **[SERVICE]** metrics
* hot partitions — **[CUSTOM]** partitioning strategy + **[SERVICE]** DB ops

---

## Backup & Recovery

* backup and restore — **[HYBRID]**

  * user level data backup and restore — **[CUSTOM]** (export/import semantics) + **[SERVICE]** storage
  * system automated backups and tested restore procedures — **[SERVICE]** + **[CUSTOM]** runbooks/tests
* data migration — **[HYBRID]** (LIB: migration tool; CUSTOM: rollout plan)
* data retention policy — **[CUSTOM]** (policy) + **[SERVICE]** storage/DB enforcement

---

## Infrastructure & Deployment

* multi env setup — **[CUSTOM]** (env strategy) + **[SERVICE]** hosting
* kubernetes — **[SERVICE/PLATFORM]** (K8s) + **[CUSTOM]** manifests
* pr preview deployments — **[SERVICE]** (Vercel/Render/etc) + config
* load balancing — **[SERVICE]**
* cdn — **[SERVICE]**
* autoscaling — **[SERVICE]**
* blue/green and canary deployments — **[SERVICE]** + **[CUSTOM]** rollout policy
* IaC — **[LIB]** (Terraform/Pulumi) + **[CUSTOM]** modules
* zero downtime (deployments and migrations) — **[HYBRID]** (CUSTOM: strategy; SERVICE: platform)
* rollback strategy (deployments and migrations) — **[CUSTOM]** + **[SERVICE]** support
* bring your own infra — **[CUSTOM]** abstraction + docs
* Multi-region active-active — **[SERVICE]** + **[CUSTOM]** data strategy
* Low-latency replication — **[SERVICE]** + **[CUSTOM]** sync strategy
* cold start mitigation — **[CUSTOM]** strategy + **[SERVICE]** platform features

---

## Observability & Monitoring

* structured logging — **[LIB]** (pino) + **[CUSTOM]** fields/standards
* metrics (RED, USE) — **[HYBRID]** (LIB: OpenTelemetry; CUSTOM: what to measure)
* tracing — **[LIB]** (OpenTelemetry)
* error tracking — **[SERVICE]** (Sentry)
* SLOs / SLIs — **[CUSTOM]** definitions + **[SERVICE/LIB]** dashboards/alerts
* alerting and on call rotation — **[SERVICE]** (PagerDuty/Opsgenie or simulated) + **[CUSTOM]** rotations/runbooks
* runbooks — **[CUSTOM]**
* performance monitoring — **[SERVICE]** (APM) + **[CUSTOM]** thresholds
* cost monitoring — **[SERVICE]** (cloud billing tools) + **[CUSTOM]** budgets
* error budget policies — **[CUSTOM]**

---

## Testing & Quality Assurance

* linting — **[LIB]**
* testing — **[LIB]** (Vitest/Jest, Playwright/Cypress)
* load testing — **[LIB]** (k6/artillery)
* chaos testing — **[LIB]** + **[CUSTOM]** scenarios
* build pipelines — **[SERVICE]** (GitHub Actions) + config

---

## Incident Management

* incident management — **[CUSTOM]** process + **[SERVICE]** paging/status tools
* postmortems — **[CUSTOM]**
* maintenance windows — **[CUSTOM]** policy + comms
* status page — **[SERVICE]** (Statuspage) or **[CUSTOM]** simple page

---

## Security

* secrets management — **[SERVICE]** (cloud secrets) + **[CUSTOM]** conventions

  * secrets rotation — **[HYBRID]** (CUSTOM: policy; SERVICE: automation)
* threat modeling — **[CUSTOM]**
* input sanitization — **[LIB]**
* CSRF / XSS / SQLi protection — **[LIB/FRAMEWORK]**
* dependency scanning — **[SERVICE]** (Dependabot/Snyk)
* vulnerability disclosure policy — **[CUSTOM]**
* pen tests reports — **[CUSTOM]** (simulated) / **[SERVICE]** (optional)
* audit trails — **[HYBRID]** (CUSTOM: schema; LIB: logger + DB)
* zero trust assumptions — **[CUSTOM]**
* tls encryption — **[SERVICE]** (platform TLS)
* encryption at rest — **[SERVICE]**
* ddos protection — **[SERVICE]**
* content security policy — **[CUSTOM]** headers + **[FRAMEWORK]** support

---

## Compliance & Privacy

Mostly **[CUSTOM]** (docs + workflows) + **[SERVICE]** where enforcement is infra

* gdpr right to be forgotten — **[CUSTOM]** workflow + **[SERVICE]** deletions
* gdpr / ccpa flows — **[CUSTOM]**
* data residency — **[SERVICE]** + **[CUSTOM]** routing/policy
* consent management — **[CUSTOM]** + **[LIB]** UI
* privacy policy — **[CUSTOM]**
* terms of service — **[CUSTOM]**
* soc2 controls mapping — **[CUSTOM]**
* access reviews — **[CUSTOM]**
* incident disclosure process — **[CUSTOM]**
* data processing agreements — **[CUSTOM]**
* retention and deletion schedules — **[CUSTOM]** + **[SERVICE]** lifecycle configs
* data anonymization — **[CUSTOM]** algorithms + **[LIB]** helpers

---

## Internationalization

* i18n — **[LIB]** (i18next/next-intl)
* rtl languages — **[LIB]** + **[CUSTOM]** styling
* date/time/timezone handling — **[LIB]** (date-fns/luxon) + **[CUSTOM]** rules
* currency support — **[LIB]** (Intl APIs) + **[CUSTOM]** formatting rules
* locale based sorting — **[LIB]** (Intl.Collator) + **[CUSTOM]**
* translation workflows — **[SERVICE]** (Crowdin/Lokalise) optional + **[CUSTOM]** process
* feature availability by region — **[CUSTOM]** + **[LIB]** flags
* legal text per region — **[CUSTOM]**

---

## Analytics & Product Metrics

* event tracking — **[HYBRID]** (CUSTOM taxonomy; SERVICE: PostHog/Segment)
* funnels — **[SERVICE]** (analytics platform)
* cohort analysis — **[SERVICE]**
* a/b testing — **[SERVICE/LIB]** (flags + experimentation) + **[CUSTOM]** metrics
* feature adoption metrics — **[HYBRID]**
* churn tracking — **[HYBRID]**
* retention curves — **[SERVICE]**
* north star metrics — **[CUSTOM]** definition + **[SERVICE]** dashboards
* product metrics — **[HYBRID]**
* data warehouse — **[SERVICE]** (BigQuery/Snowflake/Postgres warehouse)

---

## Admin & Operations

* admin dashboard — **[CUSTOM]** UI + **[FRAMEWORK]**
* impersonation — **[CUSTOM]** security rules + audit
* customer support workflows — **[CUSTOM]** process + **[SERVICE]** tools
* ticketing integration — **[SERVICE]** (Zendesk/Jira) + **[CUSTOM]** glue
* SLA tracking — **[CUSTOM]** rules + **[SERVICE]** dashboards
* knowledge base — **[SERVICE]** (HelpCenter) or **[CUSTOM]**
* cost controls — **[CUSTOM]** policies + **[SERVICE]** budgets/limits

---

## Collaboration & Real-time

* collaboration — **[CUSTOM]** semantics + **[LIB]** realtime transport
* realtime presence — **[LIB/SERVICE]** (WebSocket/SSE) + **[CUSTOM]**
* offline sync conflict resolution — **[CUSTOM]**
* CRDT / OT — **[LIB]** (Yjs/Automerge) + **[CUSTOM]** integration rules
* decentralized/offline-first architecture — **[CUSTOM]** design + **[LIB]** replication tooling

---

## Integrations

* third party integration in the app — **[HYBRID]** (CUSTOM: contracts; SERVICE: providers)
* sdk for third party integration — **[CUSTOM]** (SDK design) + **[LIB]** build tooling
* calendar integrations — **[SERVICE]** (Google/Microsoft APIs) + **[CUSTOM]**
* import/export (csv, json, xml) — **[LIB]** parsers + **[CUSTOM]** mapping rules

---

## User Features

* user published pages like notion — **[CUSTOM]** feature + **[SERVICE]** storage/CDN optional
* templates or workflows — **[CUSTOM]**
* changelog ux — **[CUSTOM]** + **[SERVICE]** optional
* onboarding flow — **[CUSTOM]**
* user feedback mechanism — **[SERVICE]** (Canny) optional + **[CUSTOM]**
* user feature request board — **[SERVICE]** optional + **[CUSTOM]**

---

## Reliability & Resilience

* circuit breakers — **[LIB]** patterns + **[CUSTOM]** thresholds/policies
* graceful degradation — **[CUSTOM]**

---

## Advanced Architecture

* formal verification (scheduling/recurrence) — **[LIB]** tooling + **[CUSTOM]** specs
* vendor lock in migration plan — **[CUSTOM]**
* scalability limits — **[CUSTOM]**

---

## Process & Documentation

* rfc process — **[CUSTOM]**
* architecture diagram — **[CUSTOM]**
* release notes automation — **[SERVICE/LIB]** (CI tooling) + **[CUSTOM]** format

---

# Part 3: Phase-Based Roadmap

# Phase 1 — MVP (Foundational Product)

### Authentication & Authorization

* Email + password — **[HYBRID]** (LIB: Auth.js/NextAuth + hashing, CUSTOM: user model)
* Session management — **[LIB]** (Auth.js/NextAuth)
* Single user only — **[CUSTOM]**
* No orgs — **[CUSTOM]**
* No RBAC / ABAC — **[CUSTOM]**
* No OAuth, no magic links — **[CUSTOM]**
* No audit logs — **[CUSTOM]**

### Core Product

* Task CRUD — **[CUSTOM]**
* Collaboration explicitly not present — **[CUSTOM]**
* Basic reminders (best-effort) — **[CUSTOM]** (simple scheduler) + **[LIB]** (cron/timers)

### API

* REST API — **[LIB]** (Next.js route handlers)
* Pagination — **[CUSTOM]**
* Input validation — **[LIB]** (Zod)
* No versioning guarantees — **[CUSTOM]**

### Frontend

* Responsive UI — **[LIB]** (Tailwind CSS)
* Error boundaries — **[LIB]** (React)
* Basic client-side caching — **[LIB]** (TanStack Query)

### Data Management

* Soft deletes only — **[CUSTOM]**

### Storage & Databases

* Relational DB — **[SERVICE]** (Postgres - local)
* Single region — **[SERVICE]**
* ORM — **[LIB]** (Prisma OR Drizzle - pick one)

### Infrastructure & Deployment

* Single environment — **[CUSTOM]**
* Manual deployments — **[CUSTOM]**
* No zero-downtime requirement — **[CUSTOM]**

### Security

* TLS — **[SERVICE]** (platform TLS)
* Password hashing — **[LIB]** (via Auth.js)
* Input sanitization — **[LIB]** (framework built-in)
* CSRF / XSS / SQLi protection — **[LIB]** (Next.js built-in)

### Backup & Recovery

* Basic backups — **[SERVICE]** (managed Postgres)
* Manual restore — **[CUSTOM]**

### Testing & QA

* Linting — **[LIB]** (ESLint)
* Basic unit tests — **[LIB]** (Vitest/Jest)

### Observability

* Minimal logging — **[LIB]** (console/basic logger)

---

# Phase 2 — Early SaaS (Team Product)

### Multi-Tenancy

* Org / workspace model — **[CUSTOM]**
* Tenant isolation — **[CUSTOM]**
* Sharding strategy defined — **[CUSTOM]**

### Authentication & Authorization

* Invite flow — **[CUSTOM]** + **[SERVICE]** (email provider: SendGrid/Mailgun/SES)
* Org membership — **[CUSTOM]**
* Basic RBAC — **[CUSTOM]**
* Audit logs — **[HYBRID]** (CUSTOM schema + LIB: pino logging)

### Background Processing & Notifications

* Queues — **[LIB]** (BullMQ + Redis - local redis is fine)
* Async reminders — **[HYBRID]** (CUSTOM: scheduling semantics; LIB: queue)
* Email notifications — **[SERVICE]** (SendGrid/Mailgun/SES) + **[LIB]** (SDK)
* Retry strategies — **[CUSTOM]** (policy) + **[LIB]** (queue retry mechanics)

### API

* Sorting & filtering — **[CUSTOM]** + **[LIB]** (ORM query builder)
* Rate limiting (coarse) — **[HYBRID]** (CUSTOM: policy; LIB/SERVICE: Redis limiter)
* Idempotent writes — **[CUSTOM]**
* Basic webhooks — **[CUSTOM]** (signing/verification + delivery semantics)

### Frontend

* Optimistic updates — **[LIB]** (TanStack Query) + **[CUSTOM]** (correctness rules)
* Accessibility baseline — **[LIB]** (accessible components) + **[CUSTOM]** (app-level discipline)
* Frontend telemetry — **[HYBRID]** (SERVICE: Sentry/PostHog; CUSTOM: events schema)
* Bug report UI — **[HYBRID]** (SERVICE/LIB: Sentry; CUSTOM: UX)

### Analytics & Product Metrics

* Event tracking — **[HYBRID]** (CUSTOM: taxonomy; SERVICE: PostHog/Segment)

### Integrations

* Import/export CSV/JSON/XML — **[LIB]** (parsers) + **[CUSTOM]** (mapping rules)

### Process & Documentation

* Architecture diagrams — **[CUSTOM]**

### Infrastructure

* Multi-environment — **[CUSTOM]** (env strategy)
* Build pipelines — **[SERVICE]** (GitHub Actions) + config
* Repeatable deployments — **[CUSTOM]**

### Security

* Secrets management — **[SERVICE]** (cloud secrets) + **[CUSTOM]** (conventions)

### Observability

* Structured logging — **[LIB]** (pino) + **[CUSTOM]** (fields/standards)
* Basic metrics — **[LIB]** (OpenTelemetry basics)

### Backup & Recovery

* Data migration tooling — **[HYBRID]** (LIB: migration tool; CUSTOM: rollout plan)

---

# Phase 3 — Growth SaaS (Monetized & Reliable)

### Payments & Billing

* Subscription lifecycle — **[HYBRID]** (SERVICE: Stripe lifecycle; CUSTOM: mapping to product access)
* Free vs paid users — **[CUSTOM]** (entitlements model) + **[SERVICE]** (Stripe as source of truth)
* Usage limits — **[CUSTOM]** (metering + enforcement) + **[LIB/SERVICE]** (Redis for counters)
* Feature gating — **[CUSTOM]** (entitlements evaluation)
* Invoices & receipts — **[SERVICE]** (Stripe)
* Proration — **[SERVICE]** (Stripe)
* Coupons — **[SERVICE]** (Stripe)
* Billing webhooks — **[HYBRID]** (CUSTOM: signature verify + idempotent handlers; SERVICE: Stripe events)

### AI & Smart Features

* AI integration — **[HYBRID]** (CUSTOM: prompts, guardrails, eval; SERVICE: model API; LIB: SDK)
* Task summarization — **[HYBRID]** (CUSTOM: formatting + policies; SERVICE: model)
* Natural language input parsing — **[HYBRID]** (CUSTOM: intent schema + rules; SERVICE: model)
* Auto-categorization — **[HYBRID]** (CUSTOM: taxonomy + thresholds; SERVICE: model/embeddings)

### Authentication & Authorization

* OAuth (at least one provider) — **[LIB/SERVICE]** (Auth.js + OAuth providers)
* Magic links — **[HYBRID]** (LIB: Auth.js; SERVICE: email)

### Feature Management

* Feature flags — **[HYBRID]** (CUSTOM: flag model; LIB/SERVICE: flag store)
* Kill switches — **[HYBRID]** (CUSTOM: enforcement points; LIB/SERVICE: flag system)

### Background Processing

* Event-driven architecture — **[CUSTOM]** (event contracts) + **[LIB]** (emitter/queue/topic)
* DLQs — **[LIB]** (queue DLQ feature) + **[CUSTOM]** (handling workflow)
* Backpressure handling — **[CUSTOM]** (rules) + **[LIB/SERVICE]** (rate limit/queue controls)

### API

* API versioning — **[CUSTOM]** (policy) + **[LIB]** (routing support)
* Graceful deprecation — **[CUSTOM]** (policy + comms) + **[LIB]** (version routing)
* GraphQL API — **[LIB]** (Yoga/Apollo) + **[CUSTOM]** (schema/resolvers)

### Data Management

* Hard deletes — **[CUSTOM]** (semantics + policies) + **[LIB]** (ORM support)

### Storage & Databases

* Caching — **[SERVICE]** (Redis)
* Read/write splitting — **[SERVICE]** (DB replicas) + **[CUSTOM]** (routing logic)
* Point-in-time recovery — **[SERVICE]** (managed Postgres) + config
* File storage — **[SERVICE]** (S3/GCS)
* NoSQL DB (selective) — **[SERVICE]** (Redis/Dynamo/etc)

### Observability & Monitoring

* Tracing — **[LIB]** (OpenTelemetry)
* Error tracking — **[SERVICE]** (Sentry)
* Metrics (RED/USE) — **[HYBRID]** (LIB: OpenTelemetry; CUSTOM: what to measure)
* Monitoring & alerting — **[SERVICE]** (OpenTelemetry + collector/export)
* On-call rotation — **[CUSTOM]** (rotations/runbooks)

### Analytics & Product Metrics

* Funnels — **[SERVICE]** (analytics platform)
* Cohort analysis — **[SERVICE]**
* Feature adoption — **[HYBRID]**
* Churn & retention — **[HYBRID]**
* Product metrics — **[HYBRID]**

### User Features

* Onboarding flow — **[CUSTOM]**
* Templates/workflows — **[CUSTOM]**
* User feedback — **[HYBRID]** (SERVICE: Canny optional; CUSTOM)
* Changelog UX — **[CUSTOM]** + **[SERVICE]** optional

### Integrations

* Calendar integrations — **[SERVICE]** (Google/Microsoft APIs) + **[CUSTOM]**

### Security

* Threat modeling — **[CUSTOM]**

### Compliance & Privacy

* Privacy policy — **[CUSTOM]**
* Terms of service — **[CUSTOM]**
* Data retention policy — **[CUSTOM]** + **[SERVICE]** (storage/DB enforcement)

### Testing & QA

* Integration tests — **[LIB]** (Vitest/Jest, Playwright/Cypress)
* Load testing — **[LIB]** (k6/artillery)

### Incident Management

* Incident process — **[CUSTOM]** + **[SERVICE]** (paging/status tools)
* Postmortems — **[CUSTOM]**
* Status page — **[SERVICE]** (Statuspage) or **[CUSTOM]** simple page

---

# Phase 4 — Scale SaaS (Operationally Mature)

### Authentication & Authorization

* Basic ABAC — **[CUSTOM]** (policy model + evaluator)

### Infrastructure & Deployment

* Kubernetes — **[SERVICE/PLATFORM]** (K8s) + **[CUSTOM]** (manifests)
* Autoscaling — **[SERVICE]**
* Load balancing — **[SERVICE]**
* CDN — **[SERVICE]** (host-provided)
* Blue/green & canary — **[SERVICE]** + **[CUSTOM]** (rollout policy)
* Zero-downtime deployments/migrations — **[HYBRID]** (CUSTOM: strategy; SERVICE: platform)
* Rollback strategies — **[CUSTOM]** + **[SERVICE]** support
* PR preview deployments — **[SERVICE]** (Vercel/Render/etc) + config
* IaC — **[LIB]** (Terraform/Pulumi) + **[CUSTOM]** (modules)
* Bring-your-own-infra — **[CUSTOM]** (abstraction + docs)

### Storage & Databases

* Search index — **[SERVICE]** (Meilisearch/Typesense/OpenSearch - pick one)
* Cold storage — **[SERVICE]** (S3/GCS) + lifecycle rules
* Index bloat & vacuuming — **[SERVICE]** (Postgres ops) + **[CUSTOM]** (runbooks/alerts)
* Hot user / partition handling — **[CUSTOM]** (detection logic/partitioning strategy) + **[SERVICE]** (metrics/DB ops)

### Frontend

* Design system — **[LIB]** (shadcn/ui) + **[CUSTOM]** (conventions)
* Theming — **[LIB]** (Tailwind/themes) + **[CUSTOM]** (tokens)
* Offline support — **[HYBRID]** (LIB: service worker tooling; CUSTOM: offline rules/conflicts)
* Performance budgets — **[HYBRID]** (LIB: web-vitals tooling; CUSTOM: budgets/enforcement)
* Lazy loading / virtualization / debounce — **[LIB]** (React lazy + react-virtual, debounce util)

### Collaboration & Real-time

* Collaboration features — **[CUSTOM]** (semantics) + **[LIB]** (realtime transport)
* Realtime presence — **[LIB/SERVICE]** (WebSocket/SSE) + **[CUSTOM]**
* Offline sync — **[CUSTOM]** (conflict resolution)
* Conflict resolution — **[CUSTOM]**

### Reliability & Resilience

* Circuit breakers — **[LIB]** (patterns) + **[CUSTOM]** (thresholds/policies)
* Graceful degradation — **[CUSTOM]**

### Observability

* SLOs / SLIs — **[CUSTOM]** (definitions) + **[SERVICE/LIB]** (dashboards/alerts)
* Error budgets — **[CUSTOM]** (policies)
* Performance monitoring — **[SERVICE]** (APM) + **[CUSTOM]** (thresholds)
* Cost monitoring — **[SERVICE]** (cloud billing tools) + **[CUSTOM]** (budgets)
* Runbooks — **[CUSTOM]**

### Security

* MFA — **[LIB/SERVICE]** (TOTP library; optional SMS/email service)
* Token rotation — **[HYBRID]** (LIB: JWT/session; CUSTOM: rotation policy)
* Dependency scanning — **[SERVICE]** (Dependabot/Snyk)
* Secrets rotation — **[HYBRID]** (CUSTOM: policy; SERVICE: automation)
* DDoS protection — **[SERVICE]** (platform/cloud provider)
* Encryption at rest — **[SERVICE]** (managed database/storage)

### Compliance & Privacy

* Right to be forgotten — **[CUSTOM]** (workflow) + **[SERVICE]** (deletions)
* Consent management — **[CUSTOM]** + **[LIB]** (UI)

### Internationalization

* Translation workflows — **[SERVICE]** (Crowdin/Lokalise) optional + **[CUSTOM]** (process)
* Date / time / timezone handling — **[LIB]** (date-fns/luxon) + **[CUSTOM]** (rules)

### Admin & Operations

* Support workflows — **[CUSTOM]** (process) + **[SERVICE]** (tools)
* Ticketing integration — **[SERVICE]** (Zendesk/Jira) + **[CUSTOM]** (glue)
* Knowledge base — **[SERVICE]** (HelpCenter) or **[CUSTOM]**

### Testing & QA

* Chaos testing — **[LIB]** + **[CUSTOM]** (scenarios)

### Incident Management

* Maintenance windows — **[CUSTOM]** (policy + comms)

### Process & Documentation

* RFC process — **[CUSTOM]**

---

# Phase 5 — Enterprise & Global SaaS

### Compliance & Privacy

* GDPR / CCPA flows — **[CUSTOM]**
* Data residency — **[SERVICE]** + **[CUSTOM]** (routing/policy)
* Data anonymization — **[CUSTOM]** (algorithms) + **[LIB]** (helpers)
* Retention & deletion schedules — **[CUSTOM]** + **[SERVICE]** (lifecycle configs)
* DPAs — **[CUSTOM]**
* Incident disclosure — **[CUSTOM]**
* SOC2 mapping — **[CUSTOM]**
* Access reviews — **[CUSTOM]**

### Security

* Zero-trust assumptions — **[CUSTOM]**
* Audit trails everywhere — **[HYBRID]** (CUSTOM: schema; LIB: logger + DB)
* Pen test reports — **[CUSTOM]** (simulated) / **[SERVICE]** (optional)
* Vulnerability disclosure — **[CUSTOM]**
* CSP — **[CUSTOM]** (headers) + **[FRAMEWORK]** (support)

### Internationalization

* RTL languages — **[LIB]** + **[CUSTOM]** (styling)
* Currency support — **[LIB]** (Intl APIs) + **[CUSTOM]** (formatting rules)
* Locale-based sorting — **[LIB]** (Intl.Collator) + **[CUSTOM]**
* Feature availability by region — **[CUSTOM]** + **[LIB]** (flags)
* Legal text per region — **[CUSTOM]**

### Analytics & Product Metrics

* A/B testing — **[SERVICE/LIB]** (flags + experimentation) + **[CUSTOM]** (metrics)
* North star metrics — **[CUSTOM]** (definition) + **[SERVICE]** (dashboards)
* Data warehouse — **[SERVICE]** (BigQuery/Snowflake/Postgres warehouse)

### Integrations

* Third-party integrations — **[HYBRID]** (CUSTOM: contracts; SERVICE: providers)
* SDK for third parties — **[CUSTOM]** (SDK design) + **[LIB]** (build tooling)

### User Features

* Published pages — **[CUSTOM]** + **[SERVICE]** (storage/CDN optional)
* Feature request board — **[HYBRID]** (SERVICE: optional; CUSTOM)

### Admin & Operations

* Admin dashboard — **[CUSTOM]** (UI) + **[FRAMEWORK]**
* Impersonation — **[CUSTOM]** (security rules + audit)
* SLA tracking — **[CUSTOM]** (rules) + **[SERVICE]** (dashboards)
* Cost controls — **[CUSTOM]** (policies) + **[SERVICE]** (budgets/limits)

### Payments & Billing

* Taxes — **[SERVICE]** (Stripe Tax or provider)
* Dunning — **[SERVICE]** (Stripe dunning/retries) + **[CUSTOM]** (comms rules)
* Referrals — **[CUSTOM]** (rules) + **[SERVICE/LIB]** (payments tie-in optional)

### Collaboration & Real-time

* CRDT / OT — **[LIB]** (Yjs/Automerge) + **[CUSTOM]** (integration rules)
* Decentralized sync — **[CUSTOM]** (design) + **[LIB]** (replication tooling)

### Infrastructure

* Multi-region active-active — **[SERVICE]** + **[CUSTOM]** (data strategy)
* Low-latency replication — **[SERVICE]** + **[CUSTOM]** (sync strategy)
* Cold start mitigation — **[CUSTOM]** (strategy) + **[SERVICE]** (platform features)

### Advanced Architecture

* Formal verification — **[LIB]** (tooling) + **[CUSTOM]** (specs)
* Vendor lock-in migration plan — **[CUSTOM]**
* Scalability limits — **[CUSTOM]**

### Process & Documentation

* Release notes automation — **[SERVICE/LIB]** (CI tooling) + **[CUSTOM]** (format)
