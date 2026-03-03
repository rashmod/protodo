import type { ReactNode } from 'react';

export function MdxCallout({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <aside className="not-prose border-border bg-muted/30 my-6 rounded-xl border p-4">
            <p className="text-primary mb-2 text-xs font-semibold tracking-widest uppercase">
                {title}
            </p>
            <div className="text-muted-foreground text-sm leading-7">
                {children}
            </div>
        </aside>
    );
}
