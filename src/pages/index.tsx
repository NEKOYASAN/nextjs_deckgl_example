import { NextPage } from "next";
import ReactMapGL from 'react-map-gl';
import {useState} from "react";

const Page: NextPage = () => {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 35.681236,
        longitude: 139.767125,
        zoom: 10
    });

    return (
        <ReactMapGL
            {...viewport}
            width={"100vw"}
            height={"100vh"}
            mapStyle={'https://api.maptiler.com/maps/jp-mierune-dark/style.json?key=' + process.env.MAPTILER_ACCESS_TOKEN}
            mapboxApiAccessToken={process.env.MAPBOX_ACCESSS_TOKEN}
            onViewportChange={nextViewport => setViewport(nextViewport)}
        />
    )
}
export default Page;