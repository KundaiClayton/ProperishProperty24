import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './signin.css'

class SignUp extends Component {
    state={
        "firstName": "",
           "lastName": "",
            "email": "",
            "password": "",
            "showAlert":false
       
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
  
        axios.post('https://hosting-property-clone.herokuapp.com/Customers', {

           "firstName": this.state.firstName,
           "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password
            

          
        
        })
          .then((response) => {
            this.props.history.push('/')
          }, (error) => {
            console.log(error);
            alert('user already exists')
          });
    }
    render() {
        const { email, password,firstName,lastName } = this.state;
        const isEnabled = email.length > 0 && password.length > 6 && firstName.length >0 &&lastName.length >0;
        
        return (
            <div>
            <div className="contain"><h5 className="txt">Sign Up</h5> </div>
            <div className='container card'>
                <form onSubmit={this.handleSubmit} className='white'>
                <div className="input-field">
                        <label htmlFor="firstName">firstName</label>
                        <input type='text' id='firstName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">lastName</label>
                        <input type='text' id='lastName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <button className="register btn blue darken-4 z-depth-0" disabled={!isEnabled} >Register</button>
                    </div>
                    <div className="input-field">
                        <Link to={'/'} className="back btn red darken-3 z-depth-0 " >Back</Link>
                    </div>
                </form>   
            </div>
            </div>
        )
    }
}

export default SignUp