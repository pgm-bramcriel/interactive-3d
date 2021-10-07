import { useEffect, useRef } from "react";
import { DoubleSide, MathUtils } from "three";
import { Circle, Text, Cone, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import MathCircle from "../../utils/MathCircle/Index";

const HH = 12;
const MM = 60;
const SS = 60;

const HAND = {
    HH: {
        LENGTH: 0.75,
        COLOR: "green",
        THICKNESS: 0.25
    },
    MM: {
        LENGTH: 1.75,
        COLOR: "red",
        THICKNESS: 0.20

    },
    SS: {
        LENGTH: 2.75,
        COLOR: "blue",
        THICKNESS: 0.15

    }
};

const ClockAnalogue = (props) => {
    const clockRef = useRef();
    const handHourRef = useRef();
    const handMinuteRef = useRef();
    const handSecondRef = useRef();

    useEffect(() => {
        if (clockRef.current) {
            clockRef.current.rotation.x = MathUtils.degToRad(-30);
        }
    }, []);

    useFrame(() => {
        const d = new Date();
        if (clockRef.current) {
            // clockRef.current.text = new Date().toLocaleTimeString();
        }
        if(handHourRef.current) {
            handHourRef.current.rotation.z = MathUtils.degToRad(
                d.getHours() * -(360 / HH));
        }
        if(handMinuteRef.current) {
            handMinuteRef.current.rotation.z = MathUtils.degToRad(
                d.getMinutes() * -(360 / MM));
        }
        if(handSecondRef.current) {
            handSecondRef.current.rotation.z = MathUtils.degToRad(
                d.getSeconds() * -(360 / SS));
        }

    });

    return (
    <group ref={clockRef} fontSize={2} {...props}>
        <group position={[0, 0, -0.005]}>
            <Circle args={[3, 60]}>
                <meshBasicMaterial side={DoubleSide} wireframe={false}/>
            </Circle>
        </group>
        <group position={[0, -0.5, 0]}>
            <Text color={"black"} fontSize={0.3}>Klokje</Text>
        </group>
        <group rotation={[90, 0, 0].map((deg) => MathUtils.degToRad(deg))}>
            <Cone args={[0.25, 0.7, 12]}>
                <meshBasicMaterial color={"white"}/>
            </Cone>
        </group>
        <group rotation={[0, 0, 90].map((deg) => MathUtils.degToRad(deg))}>
            <group ref={handSecondRef}>
                <Box args={[HAND.SS.LENGTH, HAND.SS.THICKNESS, 0.1]} color={HAND.SS.COLOR} position={[1.25, 0, 0.1/2]}>
                    <meshBasicMaterial color="red"/>
                </Box>
            </group>
            <group ref={handMinuteRef}>
                <Box args={[HAND.MM.LENGTH, HAND.MM.THICKNESS, 0.1]} color={HAND.MM.COLOR} position={[0.75, 0, 0.1/2 + 0.1]}>
                    <meshBasicMaterial color="blue"/>
                </Box>
            </group>
            <group ref={handHourRef}>
                <Box args={[HAND.HH.LENGTH, HAND.HH.THICKNESS, 0.1]} color={HAND.HH.COLOR} position={[0.25, 0, 0.1/2 + 0.2]}>
                    <meshBasicMaterial color="green"/>
                </Box>
            </group>
            <group>
                {Array(HH).fill(null).map((value, index) => {
                    const c = new MathCircle(2.75);
                    const angle = (index * 360) / HH;
                    const {x, y} = c.getCoordinates(angle);
                    return <Text scale={Array(3).fill(2)} color="black" key={index} position={[x, y, 0.01]}>{12-index}</Text>
                })};
            </group>
        </group>
    </group>
    );
};

export default ClockAnalogue;