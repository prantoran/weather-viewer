import React, {Component} from 'react';


export default class GoogleMap extends Component {

    componentDidMount() {
        console.log("lat:", this.props.lat, " lon:", this.props.lon);
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    
    render() {
        //this.refs.map
        return <div ref="map" />;
    }
}