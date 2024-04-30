/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Computers = ({
  isMobile
}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <>
    <mesh>
      <hemisphereLight intensity={4} groundColor={'black'}/>
      <pointLight intensity={1}/>
      <spotLight
       position={[-20, 50, 10]}
       angle={0.12}
       penumbra={1}
       intensity={1}
       castShadow
       shadow-mapSize={1024}
       />
      <primitive
       object={computer.scene}
       scale={isMobile ? 0.7 : 0.75}
       position={isMobile ? [0, -2.5, -2.2] : [0, -3.27, -1.5]}
       rotation={[0, 0, -0.1]}
      />
    </mesh>
    </>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 500px)`)

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <>
    <Canvas
     frameloop="demand"
     shadows
     camera={{ position: [20, 3, 5], fov: 25 }}
     gl={{ preserveDrawingBuffer: true }}
     height={500}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
         enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>
    </Canvas>
    </>
  )
}

export default ComputerCanvas