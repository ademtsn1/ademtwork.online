import { TechnicalGrid } from './TechnicalGrid';

export function GridBackground() {
  return (
    <>
      <TechnicalGrid />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(255, 107, 0, 0.02) 0%, transparent 60%)',
          }}
        />

        {/* Vignette effect for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(0, 0, 0, 0.7) 100%)',
          }}
        />

        {/* Top gradient fade for navbar */}
        <div
          className="absolute top-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.98) 0%, transparent 100%)',
          }}
        />
      </div>
    </>
  );
}
