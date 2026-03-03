import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Slot as SlotPrimitive } from 'radix-ui';

import { cn } from '@protodo/ui';

export const buttonVariants = cva(
    "focus-visible:border-violet-500 focus-visible:ring-violet-500/50 aria-invalid:ring-rose-500/20 dark:aria-invalid:ring-rose-500/40 aria-invalid:border-rose-500 inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default:
                    'bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 shadow-xs',
                destructive:
                    'bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400 shadow-xs',
                outline:
                    'bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-100 dark:bg-zinc-900/30 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 shadow-xs',
                secondary:
                    'bg-emerald-100 text-emerald-900 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-100 dark:hover:bg-emerald-800/50 shadow-xs',
                ghost: 'hover:bg-amber-100 hover:text-amber-900 dark:hover:bg-amber-900/30 dark:hover:text-amber-100',
                link: 'text-cyan-600 dark:text-cyan-400 underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-9 px-4 py-2 has-[>svg]:px-3',
                sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
                lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
                icon: 'size-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? SlotPrimitive.Slot : 'button';

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}
