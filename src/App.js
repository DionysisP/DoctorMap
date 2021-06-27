import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Data from './data/doctors.json';

function App() {

  var centerLat = Data.results[1].latitude;
  var centerLong = Data.results[1].longitude;





  return (
    <React.Fragment>
      <MapContainer center={[centerLat, centerLong]} zoom={13} scrollWheelZoom={true}>
        
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.9744464, 23.7478837]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </React.Fragment>
  );
}

export default App;
