import { cn } from "@/lib/utils";

export default function SectionLayout({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto flex min-h-dvh flex-1 scroll-mt-32 flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
}
