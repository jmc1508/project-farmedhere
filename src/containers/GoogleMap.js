import React, { Component } from 'react';
import {Header} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'


const AnyReactComponent = () => 

    <div>
        <Header>FARMED HERE</Header>

    </div>
const apiKey=process.env.REACT_APP_GOOGLEMAPS_KEY

class GoogleMap extends Component {
    

    render() {
        
        const center={lat:1.830254, lng:102.952180}
        const zoom =11
        return (
            <div className='bodyGoogleMaps'>
                <GoogleMapReact 
                bootstrapURLKeys={{key:apiKey}}
                defaultCenter={center}
                defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={center.lat}
                        lng={center.lng}
                        text="My Marker"
                    />

                    
                </GoogleMapReact>

            </div>
        );
    }
}

export default GoogleMap;