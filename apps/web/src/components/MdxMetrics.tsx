export function MdxMetrics({
    items,
}: {
    items: Array<{ label: string; value: string }>;
}) {
    return (
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="border-border bg-muted/30 rounded-xl border px-4 py-3"
                >
                    <p className="text-muted-foreground m-0 text-xs tracking-[0.12em] uppercase">
                        {item.label}
                    </p>
                    <p className="text-foreground m-0 mt-1 text-lg font-semibold">
                        {item.value}
                    </p>
                </div>
            ))}
        </div>
    );
}
