import React,{Component} from 'react'
import Search from '../search/search'
import Searching from '../search/Searching'
import axios from 'axios'
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'
import GoogleMapReact from 'google-map-react';
const mapStyles = {
  width: '50%',
  height: '40%',
};
var lat,lng,geometry;
class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
     posts:[],
      geometry:{},
      lat:null,
      lng:null
      
    }
  }
  componentDidMount(){
    var pathname=this.props.location.pathname;
      console.log(pathname.split('/'));
      let id =pathname.split('/')[2];
    axios.get(`https://hosting-property-clone.herokuapp.com/properties/${id}`).then(res=>{
        console.log(res)
        this.setState({
            posts: res.data
        })
    });axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:this.state.posts.location,
        key:'AIzaSyD1PXDtREIiE7ztzAVVUXIa4ikzy7KtEFs'
      }
    }).then(function(res){
      console.log(res);
      //log formatted address
      console.log(res.data.results[0].formatted_address);
      //console.log(res.data.results[0].geometry.location);
      //address Componets
     geometry=res.data.results[0].geometry.location;
      lat=geometry.lat;
      lng=geometry.lng;
       this.setState({
         lat:lat,
         lng:lng
       })
     console.log(this.state.lat);
     console.log(lng);
    
      
    }).catch(function(err){
      console.log(err);
    })
   
   
};
 geocode(){
  axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params:{
      address:this.state.posts.location,
      key:'AIzaSyD1PXDtREIiE7ztzAVVUXIa4ikzy7KtEFs'
    }
  }).then(function(res){
    console.log(res);
    //log formatted address
    console.log(res.data.results[0].formatted_address);
    //console.log(res.data.results[0].geometry.location);
    //address Componets
   geometry=res.data.results[0].geometry.location;
    lat=geometry.lat;
    lng=geometry.lng;
    var latnum=new Number(parseFloat(res.data.results[0].geometry.location.la)).toFixed(2);
    var lngnum=new Number(parseFloat(res.data.results[0].geometry.location.lng)).toFixed(2);
     this.setState({
       lat:lat,
       lng:lng
     })
   console.log(this.state.lat);
   console.log(lng);
  
    
  }).catch(function(err){
    console.log(err);
  })
  
} 
;

  displayMarkers = () => {
    return this.state.geometry.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.lat,
       lng: store.lng
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  };
 
  

    render(){
      let center={
        lat:51.527452,
        lng:-0.124975
     };
     
      const {posts}=this.state;
     var geometry;
     //this.geocode();
     /**
     geocode()
      
      function geocode(){
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
          params:{
            address:posts.location,
            key:'AIzaSyD1PXDtREIiE7ztzAVVUXIa4ikzy7KtEFs'
          }
        }).then(function(res){
          console.log(res);
          //log formatted address
          console.log(res.data.results[0].formatted_address);
          console.log(res.data.results[0].geometry.location);
          //address Componets
         geometry=res.data.results[0].geometry.location;
          lat=geometry.lat;
          lng=geometry.lng;
        
         console.log(lat);
         console.log(lng);
        
          
        }).catch(function(err){
          console.log(err);
        })
      } */
   // const {geometry}=this.state
    return (
         
       <div className="container section project-details">
      
         <div className="card z-depth-0">
         <div className="container" key={posts._id}>
            <div className="row">
                <div className="col">
                    <div className="blog-card blog-card-blog">
                        <div className="blog-card-image">
                        <div className="card text-center">
                            <div className="overflow">
                            <img src={posts.imageUrl} alt={`${posts.name} image`} className="movieImg"/>
                               
                            <div className="card-body text-dark">
                                <h4 className="card-text"> {posts.name}</h4>
                                <p className="card-text text-secondary">Location:{posts.location}</p>
                                <h6 className="card-text text-primary">Posted by:{posts.agent}</h6>
                                <p className="card-text text-danger">Price:{posts.price}</p>
                               
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="container section project-details">
      
       
       
         <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng}}
          
        >
        <Marker position={{
       lat:this.state.lat,
       lng: this.state.lng
     }}
     onClick={() => console.log("You clicked me!")} /> 
        </Map> {
        <GoogleMapReact
                center={center}
                zoom={5}
                >
                    
                         <Marker
                            key={this.state.geometry._id}
                            lat={this.state.lat}
                            lng={this.state.lng}
                           // position={post.location}
                           
                           
                        ></Marker>
                    
                </GoogleMapReact> 
                
                /** 
                 return(
           <div>
           <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: lat, lng: lng}}
        ><Marker  position={{
       lat: lat,
       lng: lng
     }}
     onClick={() => console.log("You clicked me!")} />
          {this.displayMarkers()}
        </Map>
           </div>
         )
         // this.setState({
           // geometry:res.data.results[0].geometry.location
            
       //   })
                */}

          </div>  
       </div>
    )
}}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1PXDtREIiE7ztzAVVUXIa4ikzy7KtEFs'
})(PropertyDetails);