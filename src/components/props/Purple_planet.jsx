/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 purple_planet.glb 
Author: Yo.Ri (https://sketchfab.com/grox777)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/purple-planet-264eb22207184fc99a5e3b1279a763b8
Title: Purple Planet
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function PurplePlanet(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/models/purple_planet.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} rotation-x={Math.PI +0.4} rotation-z={Math.PI +0.3}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Planet" rotation={[0, 0, Math.PI / 2]}>
              <group name="Clouds_0" rotation={[0, 0, -Math.PI / 2]} scale={1.013}>
                <mesh name="Clouds_0_0" geometry={nodes.Clouds_0_0.geometry} material={materials.Clouds_0} />
              </group>
              <mesh name="Planet_0" geometry={nodes.Planet_0.geometry} material={materials.PurplePlanet} />
            </group>
            <group name="Clouds_1" scale={1.019}>
              <mesh name="Clouds_1_0" geometry={nodes.Clouds_1_0.geometry} material={materials.Clouds_1} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/models/purple_planet.glb')
