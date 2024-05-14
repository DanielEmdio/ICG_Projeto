import React from 'react'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import SphereEnv from './components/SphereEnv'
import { Ship } from './components/Space_ship'
import { Space } from './components/Space_station_3'
import { Blackhole } from './components/props/Gargantua_the_black_hole'
import { PurplePlanet } from './components/props/Purple_planet'
import { Galaxy } from './components/props/Need_some_space'
import { Asteroid_base } from './components/props/Asteroid_base'
import { Targets } from './components/Targets'
import { Amongus } from './components/props/Among_us'



function App() {

  return (
    <>
      <SphereEnv />

      
      <Environment background={false} files={"assets/textures/envmap.hdr"} />

      <PerspectiveCamera makeDefault position={[0, 10, 10]} />
      {/*<OrbitControls target={[0, -100, 0]}/>*/}
     {/*<axesHelper args={[10]} position={[10, 2, 160]} /> */}
      
      
      <Space scale={3} position={[0, -10, -10]}/>
      <Ship scale={0.3} position={[-0.02, 0, 0]}/> 
      
      
      <Blackhole scale={25} position={[0, 490, 0]}/>
      <PurplePlanet scale={100} position={[0, -400, 0]}/>
      <Asteroid_base scale={10} position={[13, -30, 165]}/>
      <Amongus scale={0.1} position={[0, -10, -10]} ></Amongus>
     

      <Galaxy scale={250} position={[-380,-370,360]}/>
      
      <Targets/>
    

      <directionalLight
        castShadow
        color={"#f3d29a"}
        intensity={0.5}
        position={[10, 5, 4]}
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6.2}
        shadow-camera-right={6.4}
      />
    </>
  )
}

export default App

// Arcos, planetas , fogo
