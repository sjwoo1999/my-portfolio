import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    className,
    children,
    colSpan = 1,
    rowSpan = 1,
    href,
}: {
    className?: string;
    children: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    href?: string;
}) => {
    const Component = href ? "a" : "div";

    return (
        <Component
            href={href}
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-white/20",
                colSpan === 2 && "md:col-span-2",
                colSpan === 3 && "md:col-span-3",
                rowSpan === 2 && "row-span-2",
                className
            )}
        >
            {children}
        </Component>
    );
};
