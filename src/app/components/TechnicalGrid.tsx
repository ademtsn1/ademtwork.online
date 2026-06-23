export function TechnicalGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.015]">
      {/* Precise grid lines - like a design tool canvas */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 0, 0.8) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(255, 107, 0, 0.8) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Secondary grid for precision */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 0, 0.4) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(255, 107, 0, 0.4) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  );
}
