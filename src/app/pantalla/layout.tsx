export default function PantallaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-dvh bg-fondo-pantalla bg-cover bg-no-repeat">
      <div className="absolute left-0 top-0 min-h-dvh w-full bg-black bg-opacity-70">
        {children}
      </div>
    </main>
  );
}
