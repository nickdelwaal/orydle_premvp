import { cn } from "@/lib/utils";

export function CatalogLabel({
  figureId,
  className,
}: {
  figureId: string;
  className?: string;
}) {
  return (
    <div className={cn("catalog-label", className)}>
      <div className="mb-1 flex items-center justify-between gap-3 text-[9px] uppercase tracking-[0.18em] text-white/75">
        <span>Fig. No</span>
        <span className="catalog-label-dot" />
      </div>
      <div className="text-[11px] tracking-[0.14em] text-white">{figureId}</div>
    </div>
  );
}
