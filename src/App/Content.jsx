import Cube from "./components/Cube/index";
import { useControls } from "leva";
import { Stats, OrbitControls } from "@react-three/drei";

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

    const { showAxesHelper, showGridHelper } = useControls(
        "helpers",
        {
            showAxesHelper: {
                label: "Axes",
                value: false,
            },
            showGridHelper: {
                label: "Grid",
                value: false,
            }
        }
    )

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
        <Cube />
    </>
    );
}

export default Content;