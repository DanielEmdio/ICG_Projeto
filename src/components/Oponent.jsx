/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\star_ship.glb 
Author: ilinart1 (https://sketchfab.com/ilinart1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-ship-005223fd29ae4b2a8d20e6c054e4c0dc
Title: Star_ship
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, BoxGeometry, MeshBasicMaterial, CatmullRomCurve3 } from 'three';
import { easeCubic } from 'd3-ease';
import { useContext } from 'react';
import { TargetsContext } from './TargetsContext';


export function Oponent(props) {
  const { nodes, materials } = useGLTF('assets/models/star_ship.glb')

  const targets = useContext(TargetsContext);
  console.log(targets);
  const points = useMemo(() => {
    if (!targets) {
      return [];
    }
    
    
    const points = targets.map(target => new Vector3(target.center.x, target.center.y, target.center.z));

    // Add the first point at the end to create a loop
    points.unshift(new Vector3(11, -26, 160));
    points.push(points[0]);


    return points;

  }, [targets]);
  /*
  const points = useMemo(() => [
    new Vector3(11, -26, 160),
    new Vector3(-10, 0, 10),
    new Vector3(-5, 5, 5),
    new Vector3(0, 0, 0),
    new Vector3(5, -5, 5),
    new Vector3(10, 0, 10),
    new Vector3(15, 5, 15),
    new Vector3(20, 0, 20),
  ], []);
  */

  const curve = useMemo(() => new CatmullRomCurve3(points), [points]);

  const meshRef = useRef();
 

  let t = 0;
  useFrame((state) => {
    t = (t + 2.5 * state.clock.getDelta()) % 1;
    const easedT = easeCubic(t); // Apply the easing function
    const point = curve.getPoint(easedT);
    const nextPoint = curve.getPoint((easedT + 0.01) % 1); // Get the next point on the curve

    meshRef.current.position.set(point.x, point.y, point.z);
    meshRef.current.lookAt(nextPoint.x, nextPoint.y, nextPoint.z); // Orient the model towards the next point
    meshRef.current.rotation.y += Math.PI; // Rotate the model 180 degrees
    meshRef.current.rotation.x -= 0.15; // Rotate the model 180 degrees
  });

  return (
    <group {...props} dispose={null}>
      <group ref={meshRef}>
        <mesh geometry={nodes.set1_rama_low_Texter_set_1_0.geometry} material={materials.Texter_set_1} scale={0.002} />
        <mesh geometry={nodes.set2_gun2_crep_low_Textur_set_2_0.geometry} material={materials.Textur_set_2} scale={0.002}/>
        <mesh geometry={nodes.set3_engine_back_low1_textur_set_3_0.geometry} material={materials.textur_set_3} scale={0.002}/>
        S
      </group>
    </group>
  )
}

useGLTF.preload('assets/models/star_ship.glb')