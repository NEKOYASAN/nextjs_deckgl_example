import { NextPage } from "next";
import {StaticMap} from 'react-map-gl';
import {useState} from "react";
import {GeoJsonLayer} from "@deck.gl/layers";
import {DeckGL} from "deck.gl";

const Page: NextPage = () => {
    const data = require('~/datas/data.json')
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 35.681236,
        longitude: 139.767125,
        zoom: 10
    });

    const layer = new GeoJsonLayer({
        data,
        filled: true,
        stroked: true,
        getLineWidth: 10,
        getLineColor: [255, 0, 0],
        getFillColor: () => {
            const rand = Math.floor(Math.random() * Math.floor(10))
            if (rand <= 5) {
                return [0, 0, 255]
            }
            return [255, 255, 255, 50]
        }
    })

    return (
        <DeckGL
            width={"100vw"}
            height={"100vh"}
            controller
            layers={[layer]}
            viewState={viewport}
            onViewStateChange={(viewState) => setViewport(viewState.viewState)}
        >
            <StaticMap
                width={100}
                height={100}
                mapStyle={'https://api.maptiler.com/maps/jp-mierune-dark/style.json?key=' + process.env.MAPTILER_ACCESS_TOKEN}
                mapboxApiAccessToken={process.env.MAPBOX_ACCESSS_TOKEN}
            />
        </DeckGL>
    )
}
export default Page;
