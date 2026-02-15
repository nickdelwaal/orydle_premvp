import { cn } from "@/lib/utils";

export function SerratedDivider({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("serrated-divider", className)} />;
}
