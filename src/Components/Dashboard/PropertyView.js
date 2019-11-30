import React, { Component } from 'react'
import PropertyList from '../Properties/PropertyList'
import {connect} from 'react-redux'
import Search from '../search/search'
import Searching from '../search/Searching'
import './PropertyView.css'
import SearchBar from '../Properties/SearchBar'
import axios from 'axios'

class PropertyView extends Component{
    constructor(props){
        super(props)
        this.state={
          posts:[]
          ,query:null
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
      }
      changeHandler(e){
        
          this.setState({query: e.target.value});
      }
      onSubmit(e){
        e.preventDefault();
        
        var query=this.state.query;
        var api=`https://hosting-property-clone.herokuapp.com/properties/search/${this.state.query}`
        axios.get(`https://hosting-property-clone.herokuapp.com/properties/search/${this.state.query}`).then(res=>this.setState({
          posts:res.data
          
        }))
       // console.log(query);
        
      }
     
      
    render(){
        const {property}=this.props;
        const {posts}=this.state;
        const query=this.state;
        console.log(this.state.query);
        
        var propList=posts.map((post)=>
        <div className="container" key={post._id}>
            <div className="row">
                <div className="col">
                    <div className="blog-card blog-card-blog">
                        <div className="blog-card-image">
                        <div className="card text-center">
                            <div className="overflow">
                            <img src={post.imageUrl} alt={`${post.name} image`} className="movieImg"/>
                               
                            <div className="card-body text-dark">
                                <h4 className="card-text"> {post.name}</h4>
                                <p className="card-text text-secondary">Location:{post.location}</p>
                                <h6 className="card-text text-primary">Posted by:{post.agent}</h6>
                                <p className="card-text text-danger">Price:{post.price}</p>
                                <a href={`/property/${post._id}`} className="btn btn-outline-success">Details</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          
          
        </div>)
        function rend(){
            if(query["query"]==null){
                return <PropertyList/>
             }else if(posts.length==0){
                return <div className=" text-center text-danger"><h2>Oooops Couldnt find the property</h2></div>
             }else {
             
             
              return <ul>{propList}</ul>
             }
              
          };
        console.log(posts);
        console.log(propList)
        return(
           
            <div className="dashboard container-fluid ">
            {/** <div><Searching/></div>*/}
            <form onSubmit={this.onSubmit} className="">
                  <SearchBar handler={this.changeHandler} value={this.state.query} />
            </form>
             
                <div className="row">
                 <div className="col">
                     <div className="blog-card blog-card-blog">
                         <div className="blog-card-image">
                        
                              <ul>
                                 {rend()}
                                  
                              </ul>
                            
                         </div>
                        
                     </div>
                   
                 </div>
                </div>
                </div>
            
        )
    }
}
const mapStateToProps=(state)=>{
    return{
       property:state.property.properties
    }
}

export default connect(mapStateToProps)(PropertyView)

/** if(!posts.includes(query)){
               return <ul>{propList}</ul>
               
              } else if(query==" " || posts.includes(query)===false){
                return <PropertyList/>
              }else{
                return <ul>{propList}</ul>
              } */