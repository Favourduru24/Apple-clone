// import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
// import Lights from './Lights'
// import Phone from './Phone'
// import * as THREE from 'three'
// import { Suspense } from "react"
// import Loader from "./Loader"

// const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}) => {
//   return (
//     <View
//     index={index}
//     id={gsapType}
//     className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
//     >
//       <ambientLight intensity={5}/>
//       <PerspectiveCamera makeDefault position={[0, 0, 4]} />
//       <Lights/>
//       <OrbitControls 
//       makeDefault 
//       ref={controlRef}
//       enableZoom={false}
//       enablePan={false}
//       rotateSpeed={0.4}
//       target={new THREE.Vector3(0, 0, 0)}
//       onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
//       />

//       <group ref={groupRef} name={`${index === 1} ? 'small' : 'large' `} position={[0, 0, 0]}>
//       <Suspense fallback={<Loader/>} 
//       >
//           <Phone 
//           scale={index === 1 ? [16, 16 ,16] : [17, 17, 17]}
//           item={item}
//           size={size}
//           />
//       </Suspense>
//       </group>
//     </View>
//   )
// }

// export default ModelView

import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import Phone from './Phone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}>
          <Phone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView