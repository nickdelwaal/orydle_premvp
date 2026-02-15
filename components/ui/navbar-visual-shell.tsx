import { cn } from "@/lib/utils";

export function NavbarVisualShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("navbar-visual-shell", className)}>{children}</div>;
}
