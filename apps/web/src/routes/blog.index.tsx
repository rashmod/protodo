import { createFileRoute, Link } from '@tanstack/react-router';

import { allBlogs } from '~/content-collections';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '~/lib/site';

const canonical = `${SITE_URL}/blog`;
const pageTitle = `Blog | ${SITE_TITLE}`;

export const Route = createFileRoute('/blog/')({
    head: () => ({
        links: [{ rel: 'canonical', href: canonical }],
        meta: [
            { title: pageTitle },
            { name: 'description', content: SITE_DESCRIPTION },
            {
                property: 'og:image',
                content: `${SITE_URL}/images/lagoon-1.svg`,
            },
        ],
    }),
    component: BlogIndex,
});

function BlogIndex() {
    const postsByDate = Array.from(
        new Map(
            [...allBlogs]
                .sort(
                    (a, b) =>
                        new Date(b.pubDate).valueOf() -
                        new Date(a.pubDate).valueOf()
                )
                .map((post) => [post.slug, post])
        ).values()
    );

    const featured = postsByDate[0];
    const posts = postsByDate.slice(1);

    if (!featured) {
        return <div>No featured post found</div>;
    }

    return (
        <main className="mx-auto max-w-6xl px-4 pt-14 pb-8">
            <section className="mb-4">
                <p className="text-primary mb-2 text-xs font-semibold tracking-widest uppercase">
                    Latest Dispatches
                </p>
                <h1 className="text-foreground m-0 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                    Blog
                </h1>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <article className="border-border bg-card text-card-foreground rounded-2xl border p-5 shadow-sm sm:p-6 lg:col-span-2">
                    {featured.heroImage ? (
                        <img
                            src={featured.heroImage}
                            alt=""
                            className="mb-4 h-44 w-full rounded-xl object-cover xl:h-60"
                        />
                    ) : null}
                    <h2 className="text-foreground m-0 text-2xl font-semibold">
                        <Link
                            to="/blog/$slug"
                            params={{ slug: featured.slug }}
                            className="hover:text-primary text-inherit no-underline"
                        >
                            {featured.title}
                        </Link>
                    </h2>
                    <p className="text-muted-foreground mt-3 mb-2 text-base">
                        {featured.description}
                    </p>
                    <p className="text-muted-foreground m-0 text-xs">
                        {new Date(featured.pubDate).toLocaleDateString()}
                    </p>
                </article>

                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="border-border bg-card text-card-foreground hover:bg-accent/40 rounded-2xl border p-5 shadow-sm transition-colors sm:last:col-span-2 lg:last:col-span-1"
                    >
                        {post.heroImage ? (
                            <img
                                src={post.heroImage}
                                alt=""
                                className="mb-4 h-44 w-full rounded-xl object-cover"
                            />
                        ) : null}
                        <h2 className="text-foreground m-0 text-2xl font-semibold">
                            <Link
                                to="/blog/$slug"
                                params={{ slug: post.slug }}
                                className="hover:text-primary text-inherit no-underline"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-muted-foreground mt-2 mb-2 text-sm">
                            {post.description}
                        </p>
                        <p className="text-muted-foreground m-0 text-xs">
                            {new Date(post.pubDate).toLocaleDateString()}
                        </p>
                    </article>
                ))}
            </section>
        </main>
    );
}
