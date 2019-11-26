import React, { Component } from 'react'
import {getJwt} from './jwt'
import Axios from 'axios';

export default class Authentication extends Component {
    constructor(props){
        super(props);
        this.state={
            user:undefined
        }
    }
    componentDidMount(){
        const jwt=getJwt();
        if(!jwt){
            this.props.history.push('/Login');
        }
        Axios.get('/getUser/', {headers:{Authorization: `Bearer ${jwt}`}}).then(res=>res.setState({
            user:res.data
        })).catch(err=>{
            localStorage.removeItem('cool-jwt');
            this.props.history.push('/Login');
    
    });
    }
    render() {
        if(this.user==undefined){
            return(
                <div><h1>loading</h1></div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
