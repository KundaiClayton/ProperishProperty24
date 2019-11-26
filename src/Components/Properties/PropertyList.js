import React ,{Component}from 'react'
import PropertySummary from './PropertySummary'
import Axios from 'axios'
import GoogleMapReact from 'google-map-react'
import {GoogleComponent} from 'react-google-location'
import marker from './marker'
import './marker.css'
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'
const api="AIzaSyAWraluZ5kfqYzn5F3U5K4W0TJVyGOaUPU"

/**const PropertyList=({property})=>{
    return(
        <div className="project-list section">
           {property && property.map(property=>{
               return(
                   <PropertySummary property={property} key={property.id}/>
               )
           })}
        </div>    
    )
}*/


class PropertyList extends Component{
    state={
        posts:[],
        place:null
    }
    componentDidMount(){
        Axios.get('https://hosting-property-clone.herokuapp.com/properties').then(res=>{
            console.log(res)
            this.setState({
                posts: res.data
            })
        })
    }
    //converts address to long and latitude
    selectLocation=(location)=>{
        this.setState({
         
        })
    }
    render(){
        
        let center={
            lat:51.527452,
            lng:-0.124975
         };
         

         
        const {posts}=this.state;
        const propList=posts.length?(
            posts.map(post=>{
                return(
                    <div className="card text-center">
                        <div className="overflow">
                        <img src={post.imageUrl} alt={`${post.name} image`} className="movieImg"/>
                        <div></div>    
                        <div className="card-body text-dark">
                            <h4 className="card-text"> {post.name}</h4>
                            <h6 className="card-text text-primary">Posted by:{post.agent}</h6>
                            <p className="card-text text-secondary">Location:{post.location}</p>
                            <p className="card-text text-danger">Price:{post.price}</p>
                           
                            <a href={'/property'} className="btn btn-outline-success">Details</a>
                        </div>
                        </div>
                        <div className="map">
                <GoogleMapReact
                center={center}
   zoom={5}
                >
                    {this.state.posts.map((stadium) => {
                        return <Marker
                            key={stadium.name}
                            lat={stadium.lat}
                            lng={stadium.lng}
                            text={stadium.capacity}
                            selected={stadium === this.state.selectedStadium}
                        ></Marker>
                    })}
                </GoogleMapReact>

            </div>
            <div>
            <GoogleComponent
                        apiKey={api}
                        language={'en'}
                        country={'country:in|country:us'}
                        coordinates={true}
                        onChange={(e)=>{this.setState({place:e})}}
                        />

            </div>
                 
                    </div>
                )
            })
        ):(
            <div className="card-title center">No Properties to preview</div>
        )
        return(
            <div>
               {propList}
               <div className="map">
                <GoogleMapReact
                    
                >
                    {this.state.posts.map((stadium) => {
                        return <Marker
                            key={stadium.name}
                            lat={stadium.lat}
                            lng={stadium.lng}
                            text={stadium.capacity}
                            selected={stadium === this.state.selectedStadium}
                        ></Marker>
                    })}
                </GoogleMapReact>
            </div>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyAGzWCQvETuEJhJxdZC8yh1FF_k3mfDbS4'
  })( PropertyList);