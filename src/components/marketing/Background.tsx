import Grainient from './Grainient';

const Background = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
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
        noiseScale={0}
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
  );
}

export default Background