import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ClockDigital = (props) => {
    const clockRef = useRef();

    useEffect(() => {
        if (clockRef.current) {
            clockRef.current.rotation.x = MathUtils.degToRad(-30);
        }
    }, []);

    useFrame(() => {
        // let d = new Date();

        // const HH = d.getHours();
        // const MM = d.getMinutes();
        // const SS = d.getSeconds();

        if (clockRef.current) {
            clockRef.current.text = new Date().toLocaleTimeString();
        }
    });

    return <Text ref={clockRef} fontSize={2} {...props}/>
};

export default ClockDigital;