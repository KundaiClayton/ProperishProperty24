import React,{Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import  { NavLink } from 'react-router-dom'
import Search from '../search/search'
import Searching from '../search/Searching'
import axios from 'axios'
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'
import GoogleMapReact from 'google-map-react';
import { GoogleMap } from "react-google-maps";
import './marker.css'
const mapStyles = {
  width: '70%',
  height: '40%',
};
var geom;
class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
     posts:[],
     //geom:{}
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
    });
    
   
};
//geocode

  Clicked=()=>{
    
    alert('coming soon');
  }

    render(){
      let center={
        lat:51.527452,
        lng:-0.124975
     };
     
      const {posts}=this.state;
      const {geom}=this.state
     // const lat=this.state;
    //  const lng=this.state;
      
   //  const {geometry}=this.state;
     //this.geocode()
     
    //console.log(geometry)
      
      function geocode(){
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
          params:{
            address:posts.location,
            key:'AIzaSyD1PXDtREIiE7ztzAVVUXIa4ikzy7KtEFs'
          }
        }).then((res)=>{
          console.log(res);
          //log formatted address
          console.log(res.data.results[0].formatted_address);
          console.log(res.data.results[0].geometry.location);
          console.log(res.data.results[0].place_id);
          //address Componets
          var latnum=new Number(parseFloat(res.data.results[0].geometry.location.la)).toFixed(2);
          var lngnum=new Number(parseFloat(res.data.results[0].geometry.location.lng)).toFixed(2);
         // console.log(latnum)
          geom=res.data.results[0].geometry.location;
          var lat=geom.lat;
          var lng=geom.lng;
         var key=res.data.results[0].place_id
         console.log(geom);
         console.log(lng);
        return(
            <div className="map">
      
        
      <Map
        key={this.key}
        google={this.props.google}
        zoom={8}
       
        initialCenter={geom}
      
      >
      <Marker position={geom}
   onClick={() => console.log("boop")} /> 
      </Map> 
      


        </div>  
        )
          
        }).catch(function(err){
          console.log(err);
        })
      } 
   // const {geometry}=this.state
    return (
        
       <div className="container section project-details">
      
         
                        <div className="card text-center">
                            <div className="overflow">
                            <img src={posts.imageUrl} alt={`${posts.name} image`} className="movieImg"/>
                               
                            <div className="card-body text-dark">
                                <h4 className="card-text"> {posts.name}</h4>
                                <p className="card-text text-secondary">Location:{posts.location}</p>
                                <h6 className="card-text text-primary">Posted by:{posts.agent}</h6>
                                <p className="card-text text-danger">Price:{posts.price}</p>
                                <NavLink to={`/propView`} className="btn btn-outline-success">Back</NavLink>
                                <div>...{JSON.stringify(this.geom)}</div>
                               <ul>{console.log(this.geom)}</ul>
                                {geocode()}
                            </div>
                            
                            </div>
                            <div className="map">
      
        
        <Map
          key={this.key}
          google={this.props.google}
          zoom={8}
         
          initialCenter={geom}
        
        >
        <Marker position={geom}
     onClick={() => console.log("boop")} /> 
        </Map> 
        


          </div>   
          <button onClick={this.Clicked} className="btn btn-outline-success">Book Viewing</button>
                        </div>
                        </div>
                   
        
        
    )
}}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1PXDtREIiE7ztzAVVUXIa4ikzy7KtEFs'
})(PropertyDetails);

