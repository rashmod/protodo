import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@protodo/ui/components/button';

export const Route = createFileRoute('/')({ component: App });

function App() {
    return (
        <main className="mx-auto max-w-6xl px-4 pt-14 pb-8">
            <section className="border-border bg-card text-card-foreground relative overflow-hidden rounded-3xl border px-6 py-10 shadow-sm sm:px-10 sm:py-14">
                <div className="bg-primary/20 pointer-events-none absolute -top-24 -left-20 h-56 w-56 rounded-full blur-2xl" />
                <div className="bg-chart-2/25 pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full blur-2xl" />
                <p className="text-primary mb-3 text-xs font-semibold tracking-widest uppercase">
                    TanStack Start Base Template
                </p>
                <h1 className="text-foreground mb-5 max-w-3xl font-serif text-4xl leading-[1.02] font-bold tracking-tight sm:text-6xl">
                    Island hours, but for product teams.
                </h1>
                <p className="text-muted-foreground mb-8 max-w-2xl text-base sm:text-lg">
                    A tropical, breathable app starter with full-document SSR,
                    server functions, streaming, and type-safe routing. Calm on
                    the eyes. Fast in production.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a
                        href="/blog"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-2.5 text-sm font-semibold no-underline transition"
                    >
                        Explore Posts
                    </a>
                    <a
                        href="https://tanstack.com/router"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-full border px-5 py-2.5 text-sm font-semibold no-underline transition"
                    >
                        Router Guide
                    </a>
                    <Button>Click me</Button>
                    <Button variant="destructive">Click me</Button>
                    <Button variant="outline">Click me</Button>
                    <Button variant="secondary">Click me</Button>
                    <Button variant="ghost">Click me</Button>
                    <Button variant="link">Click me</Button>
                    <Button size="sm">Click me</Button>
                    <Button size="lg">Click me</Button>
                    <Button size="icon">Click me</Button>
                </div>
            </section>

            <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    [
                        'Type-Safe Routing',
                        'Routes and links stay in sync across every page.',
                    ],
                    [
                        'Server Functions',
                        'Call server code from your UI without creating API boilerplate.',
                    ],
                    [
                        'Streaming by Default',
                        'Ship progressively rendered responses for faster experiences.',
                    ],
                    [
                        'Tailwind Native',
                        'Design quickly with utility-first styling and custom tokens.',
                    ],
                ].map(([title, desc]) => (
                    <article
                        key={title}
                        className="border-border bg-card text-card-foreground hover:bg-accent/40 rounded-2xl border p-5 shadow-sm transition-colors"
                    >
                        <h2 className="text-foreground mb-2 text-base font-semibold">
                            {title}
                        </h2>
                        <p className="text-muted-foreground m-0 text-sm">
                            {desc}
                        </p>
                    </article>
                ))}
            </section>

            <section className="border-border bg-card text-card-foreground mt-8 rounded-2xl border p-6 shadow-sm">
                <p className="text-primary mb-2 text-xs font-semibold tracking-widest uppercase">
                    Quick Start
                </p>
                <ul className="text-muted-foreground m-0 list-disc space-y-2 pl-5 text-sm">
                    <li>
                        Edit <code>src/routes/index.tsx</code> to customize the
                        hero and product narrative.
                    </li>
                    <li>
                        Update <code>src/components/Header.tsx</code> and{' '}
                        <code>src/components/Footer.tsx</code> for brand links.
                    </li>
                    <li>
                        Add routes in <code>src/routes</code> and tweak visual
                        tokens in <code>@protodo/tailwind-config/theme</code>.
                    </li>
                </ul>
            </section>
        </main>
    );
}
