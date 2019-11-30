import React from 'react'
import  { NavLink } from 'react-router-dom'
import '../../Search.css';
const LoggedIn = () => {
    return (
        <ul  className="right nav-links ">
        <li ><NavLink to='/' className="grey-text text-darken-2">Properties</NavLink></li>
            <li><NavLink to='/' className="grey-text text-darken-2">LogOut</NavLink></li>
            <li><NavLink to='/' className="grey-text text-darken-2">LogIn</NavLink></li>
            <li><NavLink to='/registration' className="grey-text text-darken-2">Sign Up</NavLink></li>
            {/*<li><NavLink to='/' className='btn btn-floating lighten-5'>Avatar</NavLink></li> */}
            {/*<li><i className="burger" class="fa fa-bars"></i></li>*/}
        </ul>
    )
}

export default LoggedIn
