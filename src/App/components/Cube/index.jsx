import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { MathUtils } from "three";

const Cube = () => {
    const [toggle, setToggle] = useState(true);
    let color = toggle ?  0xf57261 : 0x0055b3;
    const position = toggle ? [0, 0, 0] : [0, 0, 2];
    const cubeRef = useRef();

    useFrame(() => {
        cubeRef.current.rotation.y += 0.01;
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.z += 0.01;
    })

    return (
    <mesh onClick={() => setToggle(!toggle)} position={position} ref={cubeRef} rotation={[MathUtils.degToRad(45), 0, 0]}>
        <boxGeometry args={[1, 1, 1]}/>
        <meshMatcapMaterial color={color} opacity={0.5} transparent={true} wireframe={true}/>
    </mesh>
    )
}

export default Cube;