import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../assets/property1.jpeg'
import axios from 'axios'

import Search from '../search/search'



const projectSummary=({property})=>{
  {/**
  <div className="post card" key={post.id}>
                        <div className="card-content">
                            <p>{post.name}</p>
                            <img src={post.imageUrl} alt={`${post.name} image`} className="movieImg"/>
                            <span>{post.imageUrl}</span>
                            <p>{post.price}</p>
                            <p>{post.location}</p>
                            
                        </div>
                    </div>
                    
   */}
 
    return(
        
         <div className="card text-center">
    <div className="overflow" >
     {<img src={img1} alt="image 1"/>}
     <div ></div>
          
    </div>
    <div className="card-body text-dark">
        <h4 className="card-title">{property.title}</h4>
        <p className="card-text text-secondary">Posted by :</p>
        <a href={'/property'} className="btn btn-outline-success">Details</a>
      
    </div>
  </div> 
  
    )

}
export default projectSummary


