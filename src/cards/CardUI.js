import React from 'react'
import img1 from '../assets/property1.jpeg'
import umg2 from '../assets/property2.jpeg'

const Card=props=>{
return(
  <div className="card text-center">
    <div className="overflow" >
     <img src={img1} alt="image 1"/>
    </div>
    <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a quae quidem pariatur ducimus debitis eligendi maiores repudiandae deserunt nobis beatae, illo perferendis sed iusto veniam quo, neque esse aperiam!</p>
        <a href="#"className="btn btn-outline-success">Go Anywhere</a>
    </div>
  </div> 
  
);
}
export default Card;