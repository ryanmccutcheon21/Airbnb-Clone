import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as React from 'react'
import getCenter from 'geolib/es/getCenter'

function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = React.useState({

    })

    // transform the search results object { lat: 45.23423523, long: 23.249340 } into the { latitude: 52.148590, longitude: 13.349528 } object
    // ({}) direct returns an object everytime map loops through
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    // console.log(coordinates)

    // latitude and longitude of the center of location coordinates
    const center = getCenter(coordinates)
    // console.log(center)

    const [viewport, setViewport] = React.useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    return (<ReactMapGL
        mapStyle='mapbox://styles/ryan-mccutcheon21/cl5rhgdgn000214nxrpcf1zi3'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        // onViewportChange={(nextViewport) => setViewport(nextViewport.viewport)}
        onMove={evt => setViewport(evt.viewport)}

    >
        {searchResults.map((result) => (
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p onClick={() => setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce' aria-label='push-pin' role="img">
                        📍
                    </p>
                </Marker>
                {/* The popup that should show if we click on a marker */}
                {selectedLocation.long === result.long ? (
                    <Popup
                        closeOnClick={true}
                        onClose={() => setSelectedLocation({})}
                        latitude={result.lat}
                        longitude={result.long}
                    >
                        {result.title}
                    </Popup>
                ) : (false)}
            </div>
        ))}
    </ReactMapGL>
    )
}

export default Map