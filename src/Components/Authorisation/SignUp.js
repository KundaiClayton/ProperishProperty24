import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './signin.css'

class SignUp extends Component {
    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post(`https://hosting-property-clone.herokuapp.com/customers`, {
            email: this.state.email,
            password: this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName

          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }
    render() {
        return (
            <div>
            <div className="contain"><h5 className="txt">Sign Up</h5> </div>
            <div className='container card'>
                <form onSubmit={this.handleSubmit} className='white'>
                    
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">firstName</label>
                        <input type='text' id='firstName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">lastName</label>
                        <input type='text' id='lastName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue darken-4 z-depth-0">Register</button>
                    </div>
                    <div className="input-field">
                        <Link to={'/login'} className="back btn red darken-3 z-depth-0 " >Back</Link>
                    </div>
                </form>   
            </div>
            </div>
        )
    }
}

export default SignUp