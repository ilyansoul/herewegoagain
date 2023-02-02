import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../styles/MapStyles.css'
import EditLeft from "../Edit/EditLeft";

const mapStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

class Localisation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 37.7749,
            lng: -122.4194,
            authorized: false
        };
    }

    handleAuthorize = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    authorized: true
                });
            });
        }
    }

    render() {
        return (
            <div className="map-styles">
                <EditLeft/>
                {!this.state.authorized &&
                    <button className="map-display" onClick={this.handleAuthorize}>Position</button>
                }
                {this.state.authorized &&
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                            lat: this.state.lat,
                            lng: this.state.lng
                        }}
                    />
                }
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDiBGD7ws6IPvTK2NpDLrBH2mfYC5dniZc'
})(Localisation);