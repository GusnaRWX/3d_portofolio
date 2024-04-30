/* eslint-disable react/no-unknown-property */
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./shop/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor={'white'}/>
      <spotLight
       position={[-20, 50, 10]}
       angle={0.12}
       penumbra={1}
       intensity={1}
       castShadow
       shadow-mapSize={1024}
       />
      <primitive
     object={earth.scene}
     scale={40}
     position-y={-3}
     position-x={0}
    />
    </mesh>

  )
}

const EarthCanvas = () => {
  return (
    <Canvas
     shadows
     frameloop="demand"
     camera={{ position: [20, 3, 5], fov: 25 }}
     gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
         autoRotate
         enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default EarthCanvas