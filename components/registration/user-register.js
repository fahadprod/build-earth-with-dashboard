import {Fragment ,useState, useEffect} from 'react';
import axios from 'axios';
import Router from 'next/router';
import {showSuccessMessage, showErrorMessage} from '../../helpers/alerts';
import { isAuth } from '../../helpers/auth';
import { useForm } from "react-hook-form";

const link = require("../commons/api");



const UserRegister = (props) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        cellPhone: '',
        cnicNumber: '',
        city: '',
        country: '',
        role: '',
        success: '',
        error: '',
        buttonText: 'Register'
    });
    useEffect(()=>{
        isAuth() && Router.push('/');
    }, []);
    const handleChange = (name) => (e) => {
        setState({...state, [name]: e.target.value, error:'', success:'', buttonText:'Register' })
    }
    const { firstName, lastName, email, password, address, cellPhone, cnicNumber, city, country, role, error, success, buttonText } = state;
   
    const handleSubmit = async (e) => {
       e.preventDefault();
       setState({ ...state, buttonText: "Registering" });
       try {
         const response = await axios.post(`${link.API_SERVER}/api/register`, {
           firstName,
           lastName,
           email,
           password,
           address,
           cellPhone,
           cnicNumber,
           city,
           country,
           role,
         });

         setState({
           ...state,
           firstName: "",
           lastName: "",
           email: "",
           password: "",
           address: "",
           cellPhone: "",
           cnicNumber: "",
           city: "",
           country: "",
           role: "",
           buttonText: "Submitted",
           success: response.data.message,
         });
       } catch (error) {
         setState({
           ...state,
           buttonText: "Register",
           error: error.response.data.error,
         });
       }
     };

    return (
      <Fragment>
        <div className="base-container" ref={props.containerRef}>
          {success && showSuccessMessage(success)}
          <div className="header">
            REGISTRATION FORM <hr />
          </div>
          {error && showErrorMessage(error)}
          <form onSubmit={handleSubmit}>
            <div className="content">
              <div className="form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    label="First Name"
                    
                    placeholder="Enter your first name"
                    value={firstName}
                    name="firstName"
                    onChange={handleChange("firstName")}
                    required
                  />
                  
                </div>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    name="lastName"
                    onChange={handleChange("lastName")}
                    required
                  />
                 
                </div>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    
                    placeholder="Enter your email address"
                    value={email}
                    name="email"
                    onChange={handleChange("email")}
                    required
                  />
                 
                </div>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    name="password"
                    onChange={handleChange("password")}
                    required
                  />
                  
                </div>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    name="address"
                    onChange={handleChange("address")}
                    required
                  />
                  
                </div>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="cellPhone">Cell#</label>
                  <input
                    id="cellPhone"
                    type="text"
                    placeholder="Enter your cellphone number"
                    value={cellPhone}
                    name="cellPhone"
                    onChange={handleChange("cellPhone")}
                    required
                  />
                  
                 
                </div>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="cnicNumber">CNIC#</label>
                  <input
                    id="cnicNumber"
                    type="text"
                    placeholder="Enter your cnic number"
                    value={cnicNumber}
                    name="cnicNumber"
                    onChange={handleChange("cnicNumber")}
                    required
                  />
                  
                </div>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="city">City#</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    value={city}
                    name="city"
                    onChange={handleChange("city")}
                    required
                  />
                </div>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    type="text"
                    
                    placeholder="Enter your country"
                    value={country}
                    name="country"
                    onChange={handleChange("country")}
                    required
                  />
                  
                </div>
              </div>
              <div className="form-group" style={{ textAlign: "initial" }}>
                <label htmlFor="role">
                  <h4>Role</h4>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="exampleRadios1"
                    value="staff"
                    onChange={handleChange("role")}
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Staff
                  </label>
                  
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="exampleRadios2"
                    value="dealer"
                    onChange={handleChange("role")}
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    Dealer
                  </label>
                  
                </div>
              </div>
            </div>
            <div className="footer1">
              <button type="submit" className="btn">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
}
export default UserRegister