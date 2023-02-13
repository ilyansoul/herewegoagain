import React, { useState } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../styles/MapStyles.css'
import EditLeft from "../Edit/EditLeft";
import axios from "axios";
import { Cookies } from "react-cookie";

const mapStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Localisation = (props) => {
  const [authorized, setAuthorized] = useState(false);
  const [lat, setLat] = useState(37.7749);
  const [lng, setLng] = useState(-122.4194);

  const handleAuthorize = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setAuthorized(true);

        axios.put('/api/store-location', { lat, lng  })
          .then(res => console.log(res.data))
          .catch(err => console.error(err));
      });
    }
  }

  return (
    <div className="map-styles">
      <EditLeft/>
      {!authorized &&
        <button className="map-display" onClick={handleAuthorize}>Position</button>
      }
      {authorized &&
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: lat,
            lng: lng
          }}
        />
      }
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDiBGD7ws6IPvTK2NpDLrBH2mfYC5dniZc'
})(Localisation);