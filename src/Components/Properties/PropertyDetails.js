import React,{Component} from 'react'
import Search from '../search/search'
import Searching from '../search/Searching'
import axios from 'axios'
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%',
};
class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

    render(){
    return (
         
       <div className="container section project-details">
       <Searching/>
         <div className="card z-depth-0">
          <div className="card-content">
              <span className="card title">Property Name </span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure reiciendis ducimus asperiores nobis neque at a aperiam error esse sapiente, impedit dolores quod laboriosam est soluta corrupti earum perferendis sequi?</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {}</div>
            <div>2nd September,2am</div>
          </div>   
        </div>
        <div className="container section project-details">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.displayMarkers()}
        </Map>
          </div>  
       </div>
    )
}}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAGzWCQvETuEJhJxdZC8yh1FF_k3mfDbS4'
})(PropertyDetails);