import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  readonly children: React.ReactNode;
  readonly id: string;
  readonly className?: string;
}

export default function SectionLayout({
  children,
  id,
  className,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto mt-28 flex min-h-dvh flex-1 scroll-mt-32 flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
}
