import React ,{Component}from 'react'
import PropertySummary from './PropertySummary'
import Axios from 'axios'
import GoogleMapReact from 'google-map-react'
import {GoogleComponent} from 'react-google-location'
import marker from './marker'
import './marker.css'
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react'
const api="AIzaSyAWraluZ5kfqYzn5F3U5K4W0TJVyGOaUPU"
class PropertyList extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            place:null
        };
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
                    <div className="card text-center" key={post._id}>
                        <div className="overflow">
                        <img src={post.imageUrl} alt={`${post._id} image`} className="movieImg"/>
                        <div></div>    
                        <div className="card-body text-dark">
                            <h4 className="card-text"> {post.name}</h4>
                            <h6 className="card-text text-primary">Posted by:{post.agent}</h6>
                            <p className="card-text text-secondary">Location:{post.location}</p>
                            <p className="card-text text-danger">Price:{post.price}</p>
                           
                            <a href={`/property/${post._id}`} className="btn btn-outline-success">Details</a>
                        </div>
                        </div>
                        <div className="map">
                        <GoogleMapReact
                center={center}
   zoom={5}
                >
                    {this.state.posts.map((post) => {
                        return <Marker
                            key={post._id}
                            lat={post.lat}
                            lng={post.lng}
                           // position={post.location}
                            text={post.agent}
                           
                        ></Marker>
                    })}
                </GoogleMapReact>

            </div>
            <div>
          

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
                            key={stadium._id}
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
    apiKey: 'AIzaSyAWraluZ5kfqYzn5F3U5K4W0TJVyGOaUPU'
  })( PropertyList);