import Grainient from './Grainient';

// Points in a 100x100 viewBox — easier to reason about as percentages
const chartPoints = [
  [0, 85], [10, 70], [22, 78], [35, 48], [48, 55],
  [58, 32], [70, 40], [80, 15], [92, 25], [100, 8],
];

const polyline = chartPoints.map(p => p.join(',')).join(' ');
const areaClose = ` 100,100 0,100`;

// Bar heights (0–100), one per bar, representing values
const barData = [40, 65, 30, 75, 50, 85, 60, 90, 70, 95];
const barWidth = 7;
const barGap = 3;

export const BarChartOverlay = () => (
  <div style={{
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: '35vw',
    height: '45vh',
    pointerEvents: 'none',
    zIndex: -1,
  }}>
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ mixBlendMode: 'screen', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="barFadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="barFadeBottom" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.3" />
        </linearGradient>
        <mask id="barFadeMask">
          <rect x="0" y="0" width="100" height="100" fill="url(#barFadeRight)" />
        </mask>
      </defs>
      <g mask="url(#barFadeMask)" opacity="0.07">
        {barData.map((h, i) => {
          const x = i * (barWidth + barGap) + barGap;
          return (
            <rect
              key={i}
              x={x}
              y={100 - h}
              width={barWidth}
              height={h}
              fill="white"
              fillOpacity="0.9"
              rx="1"
            />
          );
        })}
      </g>
    </svg>
  </div>
);

export const ChartOverlay = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '60vw',
    pointerEvents: 'none',
    zIndex: -1,
  }}>
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ mixBlendMode: 'screen', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="fadeMask">
          <rect x="0" y="0" width="100" height="100" fill="url(#fadeLeft)" />
        </mask>
      </defs>
      <g mask="url(#fadeMask)" opacity="0.05">
        {[25, 50, 75].map(y => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="white" strokeWidth="0.3" strokeDasharray="1.5 2.5" />
        ))}
        <polygon points={polyline + areaClose} fill="white" fillOpacity="0.12" />
        <polyline
          points={polyline}
          fill="none"
          stroke="white"
          strokeWidth="0.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {chartPoints.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="white" fillOpacity="0.8" />
        ))}
      </g>
    </svg>
  </div>
);

const Background = () => {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: -2 }}>
        <Grainient
          color1="#3a427a"
          color2="#594a8c"
          color3="#9353b4"
          timeSpeed={1}
          colorBalance={0}
          warpStrength={1.4}
          warpFrequency={10}
          warpSpeed={2}
          warpAmplitude={77}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={1}
          grainAmount={0}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={0.85}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <ChartOverlay />
      <BarChartOverlay />
    </>
  );
}

export default Background