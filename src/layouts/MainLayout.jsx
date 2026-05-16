export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white overflow-hidden">

      {/* Global subtle glow */}
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-400/10 blur-[120px] pointer-events-none" />

      {/* <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      /> */}

      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
