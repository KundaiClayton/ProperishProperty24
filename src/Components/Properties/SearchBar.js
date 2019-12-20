import React, { Component } from 'react'
import map from '../assets/map.png'
import '../../Search.css';


export default class SearchBar extends Component {


    render() {
        return (
            <div>
            <div className="App">
    
    <div className="blue darken-4">
      <div className="container">
        <div className="row">
        <h2 className="heading" >Find Property for Sale</h2>
          
          <div className="maps" style={{float:"right"}}><img className="maping" src={map}/></div>
            <input onChange={this.props.handler} 
               value={this.props.value}
               className="col-12 form-control"
               placeholder="Search Property ..." 
               id="search-input" 
               
               />
            
          
         
        </div>
      </div>
    </div>
    </div>
    </div>
    
        )
    }
}
