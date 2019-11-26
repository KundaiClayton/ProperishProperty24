import React, { Component } from 'react'
import PropertyList from '../Properties/PropertyList'
import {connect} from 'react-redux'
import Search from '../search/search'
import Searching from '../search/Searching'
import './PropertyView.css'


class PropertyView extends Component{
    render(){
        const {property}=this.props;
        return(
           
            <div className="dashboard container-fluid ">
            <div><Searching/></div>
             <div className="container">
                <div className="row">
                 <div className="col">
                     <div className="blog-card blog-card-blog">
                         <div className="blog-card-image">
                         <PropertyList property={property}/>
                        
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