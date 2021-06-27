import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Data from './data/doctors.json';

function App() {

  //Declare centered coordinates
  var centerLat = Data.results[0].latitude;
  var centerLong = Data.results[0].longitude;

  //Get current Year
  const currentDate = new Date().getFullYear()

  return (
    <React.Fragment>
      <MapContainer center={[centerLat, centerLong]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Data.results.map(doc => {
          
          //Convert json date string into date
          const doctorAge = new Date(doc.date_of_birth).getFullYear();
          const doctorExperience = new Date(doc.practice_start_date).getFullYear();
       
    
          return (
            <Marker key={doc.id} position={[doc.latitude, doc.longitude]}>
              <Popup >
                <img style={{ 'width': '50px', 'height': '50px' }} src="" alt="" />
                <h3>{doc.first_name + " " + doc.last_name}</h3><br />
                {doc.street_address + " " + doc.city + ", " + doc.country}<br />
                <h5>{currentDate - doctorAge}{" ετών, "} {currentDate - doctorExperience}{" χρόνια εμπειρίας "} {doc.languages}</h5>
              </Popup>
            </Marker>
          );
        })}

      </MapContainer>
    </React.Fragment>

  );
}

export default App;
