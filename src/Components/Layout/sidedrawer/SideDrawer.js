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
   function closeMenu(){
    drawerClasses='side-drawer'
   }
    return(
    <nav className={drawerClasses}>
    <div>
        <ul>
            <div></div>
        {/**<LoggedIn onClick={props.click}/>*/}
        <ul  className="right nav-links ">
        <li ><NavLink to='/' onClick={props.click} className="grey-text text-darken-2">Properties</NavLink></li>
            <li><NavLink to='/' className="grey-text text-darken-2">LogOut</NavLink></li>
            <li><NavLink to='/' className="grey-text text-darken-2">LogIn</NavLink></li>
            <li><NavLink to='/registration' className="grey-text text-darken-2">Sign Up</NavLink></li>
            {/*<li><NavLink to='/' className='btn btn-floating lighten-5'>Avatar</NavLink></li> */}
            {/*<li><i className="burger" class="fa fa-bars"></i></li>*/}
        </ul>
        <NavLink to="/propView"></NavLink>
        </ul>
  
    </div>
 </nav>);
    
};

export default sideDrawer;