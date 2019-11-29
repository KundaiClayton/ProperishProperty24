import React, { Component } from 'react'
import {getJwt} from './jwt'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';

 class Authentication extends Component {
    constructor(props){
        super(props);
        this.state={
            user:undefined
        }
    }
    componentDidMount(){
        const jwt=getJwt();
        if(!jwt){
            this.props.history.push('/login');
        }
        Axios.get('https://hosting-property-clone.herokuapp.com/customers/authentication', {headers:{Authorization: `Bearer ${jwt}`}}).then(res=>this.setState({
            user:res.data
        })).catch(err=>{
            localStorage.removeItem('cool-jwt');
            this.props.history.push('/login');
    
    });
    }
    render() {
        if(this.user===undefined){
            return(
                <div><h1>loading...</h1></div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default withRouter(Authentication)