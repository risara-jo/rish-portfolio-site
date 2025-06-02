// src/components/PostEffects.tsx not in use...
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function PostEffects() {
  return (
    <EffectComposer>
      <DepthOfField focusDistance={0.02} focalLength={0.01} bokehScale={2} height={480} />
      <Bloom
        blendFunction={BlendFunction.ADD}
        intensity={0.3}
        width={300}
        height={300}
        kernelSize={3}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.025}
      />
      <Noise opacity={0.02} />
      <Vignette eskil={false} offset={0.1} darkness={0.8} />
    </EffectComposer>
  )
}
