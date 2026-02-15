import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: "black" | "zinc";
    id?: string;
}

export function Section({
    children,
    className,
    background = "black",
    id,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-32 md:py-48",
                background === "black" ? "bg-black" : "bg-zinc-950",
                className
            )}
        >
            {children}
        </section>
    );
}
