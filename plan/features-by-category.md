## 1. Product features (customer-facing value)

Things users directly experience or buy for.

### AI & Smart Features

* ai integration
* Natural language input parsing
* auto-categorization
* summarize tasks

### User Features

* user published pages like notion
* templates or workflows
* changelog ux
* onboarding flow
* user feedback mechanism
* user feature request board

### Collaboration & Real-time

* collaboration
* realtime presence
* offline sync conflict resolution
* CRDT / Operational Transformation
* decentralized / offline-first architecture

### Internationalization (user-facing aspect)

* internationalization
* rtl languages
* date/time/timezone handling
* currency support
* locale based sorting
* feature availability by region

---

## 2. Platform capabilities (technical foundation)

Everything that makes the product work, scale, and stay alive.

### Payments & Billing (platform side)

* payment integration
* free vs paid users
* usage limits
* feature gating
* subscription lifecycle
* invoices and receipts
* proration
* taxes
* dunning
* billing webhooks
* referrals
* coupons

### Background Processing & Notifications

* queues for background tasks
* reminders
* email notification
* event driven architecture
* retry strategies
* dead letter queues
* backpressure handling

### Authentication & Authorization

* email/password
* oauth
* magic links
* mfa
* session management
* token rotation
* rbac / abac
* org/workspace
* invite flow
* audit logs

### Frontend Platform

* component design system
* theming
* accessibility
* responsive design
* offline support
* error boundaries
* performance budgets
* client-side caching
* telemetry
* bug reporting
* optimistic updates
* lazy-loading, virtualization, debouncing

### API

* REST / GraphQL
* versioning
* pagination, sorting, filtering
* rate limiting
* idempotency
* webhooks
* validation
* graceful deprecation

### Data & Storage

* soft / hard deletes
* relational DB
* NoSQL
* search index
* caching
* file storage
* cold storage
* PITR
* read/write splitting
* index maintenance
* hot users / partitions

### Infrastructure & Deployment

* multi-env setup
* Kubernetes
* preview deployments
* load balancing
* CDN
* autoscaling
* blue/green & canary
* IaC
* zero-downtime deploys & migrations
* rollback strategies
* bring-your-own infra
* multi-region active-active
* cold start mitigation

### Reliability & Resilience

* circuit breakers
* graceful degradation

### Advanced Architecture

* formal verification
* vendor lock-in migration plans
* scalability limits

---

## 3. Business & Go-to-Market Operations (missing category)

This is the **“how the company runs and grows”** layer.

### Analytics & Product Metrics

* event tracking
* funnels
* cohort analysis
* A/B testing
* feature adoption
* churn tracking
* retention curves
* north star metrics
* data warehouse

### Admin & Operations

* admin dashboard
* impersonation
* customer support workflows
* ticketing integrations
* SLA tracking
* knowledge base
* cost controls

### Integrations

* third-party integrations
* SDKs
* calendar integrations
* import/export

---

## 4. Org / Process Controls (governance & safety)

How the company avoids lawsuits, outages, and chaos.

### Observability & Monitoring

* structured logging
* metrics (RED / USE)
* tracing
* error tracking
* SLOs / SLIs
* alerting & on-call
* runbooks
* performance monitoring
* cost monitoring
* error budgets

### Testing & Quality Assurance

* linting
* testing
* load testing
* chaos testing
* build pipelines

### Incident Management

* incident response
* postmortems
* maintenance windows
* status page

### Security

* secrets management & rotation
* threat modeling
* input sanitization
* CSRF / XSS / SQLi protection
* dependency scanning
* vuln disclosure
* pen tests
* audit trails
* zero trust
* TLS
* encryption at rest
* DDoS protection
* CSP

### Compliance & Privacy

* GDPR / CCPA
* right to be forgotten
* data residency
* consent management
* privacy policy
* ToS
* SOC2 mapping
* access reviews
* incident disclosure
* DPAs
* retention & deletion schedules
* anonymization

### Backup & Recovery

* backup & restore (user + system)
* tested restore procedures
* data migration
* retention policies

### Process & Documentation

* RFC process
* architecture diagrams
* release notes automation