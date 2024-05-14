import { useTexture } from '@react-three/drei'
import { BackSide } from 'three'

export default function SphereEnv() {
    const map = useTexture('assets/textures/space14.png')
    return (
        <mesh>
            <sphereGeometry args={[500, 50, 50]} />
            <meshBasicMaterial 
                side={BackSide}
                map = {map}
            />
        </mesh>
    )
}