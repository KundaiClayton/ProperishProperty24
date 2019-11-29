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
          ,query:""
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
        console.log(query);
        
      }
      componentDidMount(){
          
          
        var api=`https://hosting-property-clone.herokuapp.com/properties/search/${this.state.query}`
        axios.get(`https://hosting-property-clone.herokuapp.com/properties/search/${this.state.query}`).then(res=>this.setState({
          posts:res.data
          
        }))
      } 
    render(){
        const {property}=this.props;
        const {posts}=this.state;
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
                                <a href={'/property'} className="btn btn-outline-success">Details</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          
          
        </div>)
        console.log(posts);
        console.log(propList)
        return(
           
            <div className="dashboard container-fluid ">
            {/** <div><Searching/></div>*/}
            <form onSubmit={this.onSubmit} className="">
                  <SearchBar handler={this.changeHandler} value={this.state.query} />
            </form>
             <div className="container">
                <div className="row">
                 <div className="col">
                     <div className="blog-card blog-card-blog">
                         <div className="blog-card-image">
                        
                              <ul>
                                  <PropertyList/>
                                  {propList}
                              </ul>
                            
                         </div>
                        
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