import React from 'react'
import  { NavLink } from 'react-router-dom'




const LoggedOut = () => {

   
    return (
        <ul className="right nav-links" >
            <li><NavLink to='/login' className="grey-text text-darken-2">LogIn</NavLink></li>
            <li><NavLink to='/registration' className="grey-text text-darken-2">Sign Up</NavLink></li>
            {/*<li><i class="fa fa-bars"></i></li>*/}
        </ul>
    )
}

export default LoggedOut
