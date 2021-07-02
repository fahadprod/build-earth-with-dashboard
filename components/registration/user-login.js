import React, {Fragment, useState, useEffect} from "react";
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import {showSuccessMessage, showErrorMessage} from '../../helpers/alerts';
import { authenticate, isAuth } from '../../helpers/auth';

const link = require('../commons/api');


const UserLogin= (props) => {
    const [state, setState] = useState({
        email: '',
        password: '',
        success: '',
        error: '',
        buttonText: 'Login'
    })

    useEffect(()=>{
        isAuth() && Router.push('/');
    }, []);

    const onChange= (e) => setState({ ...state, [e.target.name]: e.target.value, error: '', buttonText: 'Login' })
    const {
        email,
        password,
        success,
        error,
        buttonText
    }= state

    const handleSubmit = async e =>{
        e.preventDefault();
        setState({...state, buttonText:'Logging'});
        try{
            const response = await axios.post(`${link.API_SERVER}/api/login`, {
                email,
                password
            })
            console.log(response);
            // if (response.status == 200) {
            //     console.log("yes");
            //     console.log(localStorage.getItem('role'))
            // }
            // else {
            //     console.log("No")
            // }
                // if(isAuth() && isAuth().role === 'admin'){
                //     return Router.push('/admin')
                // } else if(iaAuth() && isAuth().role === 'subscriber'){
                //     return Router.push('/')
                // } else if(isAuth() && isAuth().role === 'dealer-subscriber'){
                //     return Router.push('/dealer')
                // } else if(isAuth() && isAuth().role === 'staff-subscriber'){
                //     return Router.push('/staff')
                // } else {
                //     return fasle
                // }
            authenticate(response, () =>
              isAuth() && isAuth().role == "dealer"
                ? Router.push("/dashboard")
                : Router.push("/dashboard")
            );
            // authenticate(response, () =>  Router.push('/')) 
        }
        catch(error){
            console.log(error);
            setState({...state,
                buttonText:'Login',
                error: error.response.data.error
            });
        }
    }
        return (
            <Fragment>
                
                <div className="base-container container-height" ref={props.containerRef}>
                    {success && showSuccessMessage(success)}
                {error && showErrorMessage(error)}
                <br/>
                    <div className="header">LOGIN FORM <hr /> </div>
                    <form onSubmit={handleSubmit}>
                        <div className="content">
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            value={email} 
                                            onChange={e => onChange(e)}
                                            type="Email" 
                                            placeholder="Type your Email" 
                                            name="email"
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input 
                                            value={password} 
                                            onChange={e => onChange(e)}
                                            type="password" 
                                            name="password"
                                            placeholder="Type your Password" 
                                            required 
                                        />
                                    </div>
                                </div>
                        </div>
                            <div className="footer1">
                                <button type="submit" className="btn">{buttonText}</button>
                            </div>
                    </form>
                </div>
            </Fragment>
        );
    
}
export default UserLogin