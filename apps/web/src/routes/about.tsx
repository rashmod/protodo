import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
    component: About,
});

function About() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <section className="border-border bg-card text-card-foreground rounded-2xl border p-6 shadow-sm sm:p-8">
                <img
                    src="/images/lagoon-about.svg"
                    alt=""
                    className="mb-6 h-56 w-full rounded-2xl object-cover"
                />
                <p className="text-primary mb-2 text-xs font-semibold tracking-widest uppercase">
                    About
                </p>
                <h1 className="text-foreground mb-3 font-serif text-4xl font-bold sm:text-5xl">
                    Built for shipping fast.
                </h1>
                <p className="text-muted-foreground m-0 max-w-3xl text-base leading-8">
                    TanStack Start gives you type-safe routing, server
                    functions, and modern SSR defaults so you can focus on
                    product work instead of framework glue.
                </p>
            </section>
        </main>
    );
}
