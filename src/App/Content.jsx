import { useControls } from "leva";
import { Stats, OrbitControls } from "@react-three/drei";

import Cube from "./components/Cube/index";
import ClockDigital from "./components/Clock/Digital";
import ClockAnalogue from "./components/Clock/Analogue";

const components = [
    "Cube",
    "ClockAnalogue",
    "ClockDigital"
];

const Content = () => {

    const { showStats } = useControls(
        "general",
        {
            showStats: {
                label: "stats",
                value: false,
            }
        }
    )

    const { showAxesHelper, showGridHelper, useComponent } = useControls("helpers", {
            showAxesHelper: {
                label: "Axes",
                value: false,
            },
            showGridHelper: {
                label: "Grid",
                value: false,
            },
            useComponent: {
                label: "Component",
                options: components,
                value: "Cube",
            }
        }
    );

    
function showComponents(name) {
    return useComponent === name;
}

    return (
    <>
        <OrbitControls
            enableRotate={true}
            enablePan={true}
            enableZoom={true}
        />
        { showAxesHelper && <axesHelper /> }
        { showGridHelper && <gridHelper /> }
        { showStats && <Stats /> }

        {showComponents("Cube") &&  <Cube /> }
        {showComponents("ClockAnalogue") &&  <ClockAnalogue /> }
        {showComponents("ClockDigital") &&  <ClockDigital /> }
    </>
    );
}

export default Content;