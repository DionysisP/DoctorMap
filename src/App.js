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

          const doctorAge = doc.date_of_birth[0] + doc.date_of_birth[1] + doc.date_of_birth[2] + doc.date_of_birth[3];
          const doctorExperience = doc.practice_start_date[0] + doc.practice_start_date[1] + doc.practice_start_date[2] + doc.practice_start_date[3];
          return (
    
            <Marker key={doc.id} position={[doc.latitude, doc.longitude]}>
              <Popup >
                <img style={{'width': '50px', 'height': '50px'}} src=""></img>
                <h3>{doc.first_name + " " + doc.last_name}{<br></br>}</h3>
                {doc.street_address + " " + doc.city + ", " + doc.country}{<br></br>}
                {currentDate - doctorAge}{" ετών "}
                {currentDate - doctorExperience}{" χρόνια εμπειρίας "}
                {doc.languages}
              </Popup>
            </Marker>
          );
        })}

      </MapContainer>
    </React.Fragment>

  );
}

export default App;
