import React from 'react'
import './SideDrawer.css'
import LoggedIn from '../LoggedIn'
import LoggedOut from '../LoggedOut'
import  { NavLink } from 'react-router-dom'

const sideDrawer =props=>{

    let drawerClasses='side-drawer';
    if(props.show){
        drawerClasses='side-drawer open';
    };

    return(
    <nav className={drawerClasses}>
    <div>
        <ul>
            <div></div>
        <LoggedIn onClick={props.click}/>
       
        <NavLink to="/propView">Home</NavLink>
        </ul>
  
    </div>
 </nav>);
    
};

export default sideDrawer;