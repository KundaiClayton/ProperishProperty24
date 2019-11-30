import React from 'react'
import './SideDrawer.css'
import LoggedIn from '../LoggedIn'
import LoggedOut from '../LoggedOut'

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
       
        <a href="/propView">Home</a>

        </ul>
  
    </div>
 </nav>);
    
};

export default sideDrawer;