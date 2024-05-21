import { useFrame } from "@react-three/fiber";
import { useState, useMemo, useEffect } from "react";
import { Quaternion, TorusGeometry, Vector3 } from "three";
import { mergeBufferGeometries } from "three-stdlib";
import { shipPosition } from "./Space_ship";
import { useTexture } from '@react-three/drei';

function randomPoint(scale) {
  return new Vector3(
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
    Math.random() * 2 - 1
  ).multiply(scale || new Vector3(1, 1, 1));
}

const TARGET_RAD = 5;


export function Targets({ targets, setTargets }) {
  useEffect(() => {
    const arr = [];

    for (let i = 0; i < 10; i++) {
      arr.push({
        center: randomPoint(new Vector3(60, 30, 60)).add(
          new Vector3(1, -11 + Math.random() * 2, -10)
        ),
        direction: randomPoint().normalize(),
      });
    }

    setTargets(arr);
  }, []);

  const geometry = useMemo(() => {
    let geo;

    targets.forEach((target) => {
      const torusGeo = new TorusGeometry(TARGET_RAD, 0.08, 8, 25);
      torusGeo.applyQuaternion(
        new Quaternion().setFromUnitVectors(
          new Vector3(0, 0, 1),
          target.direction
        )
      );
      torusGeo.translate(target.center.x, target.center.y, target.center.z);

      if (!geo) geo = torusGeo;
      else geo = mergeBufferGeometries([geo, torusGeo]);
    });

    return geo;
  }, [targets]);

  useFrame(() => {
    targets.forEach((target, i) => {
      const v = shipPosition.clone().sub(target.center);
      const dist = target.direction.dot(v);
      const projected = shipPosition
        .clone()
        .sub(target.direction.clone().multiplyScalar(dist));

      const hitDist = projected.distanceTo(target.center);
      if (hitDist < TARGET_RAD && Math.abs(dist) < 0.05) {
        target.hit = true;
      }
    });

    const atLeastOneHit = targets.find((target) => target.hit);
    if (atLeastOneHit) {
      setTargets(targets.filter((target) => !target.hit));
    }
  });

  const map = useTexture('assets/textures/orange.png')  

  return (
    geometry && (
      <mesh geometry={geometry}>
        <meshStandardMaterial roughness={0.5} metalness={0.5} />
        <meshBasicMaterial map = {map}/>
      </mesh>
    )
  );
}