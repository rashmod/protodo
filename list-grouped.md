# Production todo app - Grouped by Scope

## App-Specific Features

These features are specific to a todo list application and its core functionality.

### AI & Smart Features
- ai integration
- Natural language input parsing
- auto-categorization
- summarize tasks

### User Features
- user published pages like notion
- templates or workflows
- changelog ux
- onboarding flow
- user feedback mechanism
- user feature request board

### Integrations
- third party integration in the app
- sdk for third party integration
- calendar integrations
- import/export (csv, json, xml)

### Collaboration & Real-time
- collaboration
- realtime presence
- offline sync conflict resolution
- CRDT / Operational Transformation for conflict-free sync at scale.
- Decentralized/offline-first architecture (replication & peer sync).

### Frontend (App-Specific)
- Performance: lazy-loading, virtualization for long lists, debounced searches.

---

## Non-App-Specific (General Production Concerns)

These are general production engineering concerns that apply to any SaaS application in production.

### Payments & Billing
- payment integration
- free vs paid users
- usage limits
- feature gating
- subscription lifecycle
- invoices and receipts
- proration
- taxes
- dunning
- billing webhooks
- referrals
- coupons

### Background Processing & Notifications
- queues for background tasks
- reminders
- email notification
- event driven architecture
- retry strategies
- dead letter queues
- Backpressure handling

### Multi-tenancy
- multi tenancy support
  - sharding strategy

### Authentication & Authorization
- production grade authentication
  - email password
  - oauth
  - magic links
  - mfa
  - session management
  - token rotation
  - rbac and abac
  - org/workspace
  - invite flow
  - audit logs

### Frontend (General)
- component design system
- frontend theming
- accessibility
- responsive design
- offline support
- error boundaries
- performance budgets (LCP, CLS)
- client side caching
- telemetry on frontend
- bug report on frontend
- optimistic updates

### API
- rest api
- graphql api
- api versioning
- pagination, sorting and filtering
- rate limiting
- idempotency
- webhooks
- data validation
- graceful deprecation paths

### Feature Management
- feature flag use
- feature kill switches

### Data Management
- soft and hard deletes

### Storage & Databases
- storage → cold storage
- relational db
- nosql db
- search index
- caching
- file storage
- point-in-time recovery
- read / write spliting
- index bloat and vacuuming
- hot users
- hot partitions

### Backup & Recovery
- backup and restore
  - user level data backup and restore
  - system automated backups and tested restore procedures
- data migration
- data retention policy

### Infrastructure & Deployment
- multi env setup
- kubernetes
- pr preview deployments
- load balancing
- cdn
- autoscaling
- blue/green and canary deployments
- IaC
- zero downtime (deployments and migrations)
- rollback strategy (deployments and migrations)
- optional: bring your own infra like db or something
- Multi-region active-active deployments with low-latency sync.
- cold start mitigation

### Observability & Monitoring
- structured logging
- metrics (RED, USE)
- tracing
- error tracking
- SLOs / SLIs
- alerting and on call rotation
- runbooks
- performance monitoring
- cost monitoring
- error budget policies

### Testing & Quality Assurance
- linting
- testing
- load testing
- chaos testing
- build pipelines

### Incident Management
- incident management
- postmortems
- maintenance windows
- status page

### Security
- secrets management
  - secrets rotation
- threat modeling
- input sanitization
- CSRF / XSS / SQLi protection
- dependency scanning
- vulnerability disclosure policy
- pen tests reports
- audit trails
- zero trust assumptions
- tls encryption
- encryption at rest
- ddos protection
- content security policy

### Compliance & Privacy
- gdpr (right to be forgotten)
- gdpr / ccpa flows
- data residency
- consent management
- privacy policy
- terms of service
- soc2 controls mapping
- access reviews
- incident disclosure process
- data processing agreements
- retention and deletion schedules
- data anonymization

### Internationalization
- internationlization
- rtl languages
- date/time/timezone handling
- currency support
- locale based sorting
- translation workflows
- feature availability by region
- legal text per region

### Analytics & Product Metrics
- event tracking
- funnels
- cohort analysis
- a/b testing
- feature adoption metrics
- churn tracking
- retention curves
- north star metrics
- Product metrics
- data warehouse

### Admin & Operations
- admin dashboard
- impersonation
- customer support workflows
- ticketing integration
- SLA tracking
- knowledge base
- cost controls

### Reliability & Resilience
- circuit breakers
- graceful degradation

### Advanced Architecture
- Formal verification for critical scheduling / recurrence engine.
- vendor lock in migration plan
- scalability limits

### Process & Documentation
- rfc process
- architecture diagram
- release notes automation
