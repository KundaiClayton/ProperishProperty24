import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import map from '../assets/map.png'
import '../../Search.css';
import axios from "axios"
class Searching extends Component {
  constructor(){
    super()
    this.state={
      posts:[]
    }
    this.onSubmit=this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    var query=this.input.value;
    console.log(query)
    ;this.componentDidMount(query)
  }
  componentDidMount(query){
    var api=`https://hosting-property-clone.herokuapp.com/properties/search/${query}`
    axios.get(api).then(res=>this.setState({
      posts:res.data
    }))
  } 

 

  render(){
    const{posts}=this.state;
    var movieList=posts.map((post)=>
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
  return (
    <div className="App">
    
     <div className="blue darken-4">
       <div className="container">
         <div className="row">
         <h2 className="heading" >Find Property for Sale</h2>
           <form onSubmit={this.onSubmit} className="col-12">
           <div className="maps" style={{float:"right"}}><img className="mapimg" src={map}/></div>
             <input className="col-12 form-control" placeholder="Search Property..." id="search-input" ref={input=>this.input=input }/>
             
           </form>
          
         </div>
       </div>
     </div>
     <div>
             <ul>{movieList}</ul>
              </div>
    </div>
  );
}
}

export default Searching;