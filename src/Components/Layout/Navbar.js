import React from 'react'
import {Link} from 'react-router-dom'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import logo from '../assets/logo.png'
import './Navbar.css'
import DrawerToggleButton from './sidedrawer/DrawerToggleButton'



const Navbar=props=>{
    return(
        <nav className=" nav-wrapper">
            <div className=" toolbar_navigation">
            <div className="burger">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
                <Link to='/' className="brand-logo" ><img src={logo}/></Link>
                <div className="spacer"></div>
                <div className="toolbar_navigation-items">
                <LoggedIn/>
               {/**<LoggedOut/> */} 
                </div>
                
                
            </div>
        </nav>
    )
}
export default Navbar