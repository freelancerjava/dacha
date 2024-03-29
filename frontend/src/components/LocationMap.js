// import React from 'react';
// import PropTypes from 'prop-types';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// const LocationMap = () => {
//     const position = [51.505, -0.09]
//     return (
//   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//   <TileLayer
//     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   <Marker position={position}>
//     <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>
//   </Marker>
// </MapContainer>
//     );
// };

// LocationMap.propTypes = {};

// export default LocationMap;   
// https://www.erichowey.dev/writing/advanced-mapping-with-gatsby-and-react-leaflet/

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
export default class LocationMap extends Component {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    if (typeof window !== 'undefined') {
      return (<>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
        </Map>
      </>)
    }
    return null
  }
}