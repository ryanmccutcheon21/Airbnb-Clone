import ReactMapGL from 'react-map-gl'
import { useState } from 'react'

function Map() {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zome: 11,
    })

    return <ReactMapGL
        mapStyle='mapbox://styles/ryan-mccutcheon21/cl5rhgdgn000214nxrpcf1zi3'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >

    </ReactMapGL>
}

export default Map