import { MDXContent } from '@content-collections/mdx/react';
import { createFileRoute, notFound } from '@tanstack/react-router';

import { MdxCallout } from '~/components/MdxCallout';
import { MdxMetrics } from '~/components/MdxMetrics';
import { allBlogs } from '~/content-collections';
import { SITE_URL } from '~/lib/site';

export const Route = createFileRoute('/blog/$slug')({
    loader: ({ params }) => {
        const post = Array.from(
            new Map(
                [...allBlogs]
                    .sort(
                        (a, b) =>
                            new Date(b.pubDate).valueOf() -
                            new Date(a.pubDate).valueOf()
                    )
                    .map((entry) => [entry.slug, entry])
            ).values()
        ).find((entry) => entry.slug === params.slug);
        if (!post) throw notFound();
        return post;
    },
    head: ({ loaderData, params }) => {
        const title = loaderData?.title ?? 'Post';
        const description = loaderData?.description ?? '';
        const image = loaderData?.heroImage ?? '/images/lagoon-1.svg';
        return {
            links: [
                { rel: 'canonical', href: `${SITE_URL}/blog/${params.slug}` },
            ],
            meta: [
                { title },
                { name: 'description', content: description },
                {
                    property: 'og:image',
                    content: image.startsWith('http')
                        ? image
                        : `${SITE_URL}${image}`,
                },
            ],
        };
    },
    component: BlogPost,
});

function BlogPost() {
    const post = Route.useLoaderData();

    return (
        <main className="mx-auto max-w-5xl px-4 pt-16 pb-12">
            <article className="border-border bg-card text-card-foreground rounded-2xl border p-6 shadow-sm sm:p-8">
                {post.heroImage ? (
                    <img
                        src={post.heroImage}
                        alt=""
                        className="mb-6 h-64 w-full rounded-2xl object-cover"
                    />
                ) : null}
                <p className="text-primary mb-2 text-xs font-semibold tracking-widest uppercase">
                    Post
                </p>
                <h1 className="text-foreground mb-3 font-serif text-4xl font-bold sm:text-5xl">
                    {post.title}
                </h1>
                <p className="text-muted-foreground mb-6 text-sm">
                    {new Date(post.pubDate).toLocaleDateString()}
                </p>
                <div className="prose prose-neutral prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-strong:text-foreground prose-a:text-primary dark:prose-invert max-w-none">
                    {post.mdx ? (
                        <MDXContent
                            code={post.mdx}
                            components={{ MdxCallout, MdxMetrics }}
                        />
                    ) : (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.html ?? '',
                            }}
                        />
                    )}
                </div>
            </article>
        </main>
    );
}
