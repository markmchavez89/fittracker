import React, { useState, Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function SignUp() {

    const [signUp, setSignUp] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: ""
    })

    function handleChange(event) {
        const newValue = event.target.value;
        const inputName = event.target.name;

        setSignUp(prevValue => {
        if(inputName === "fullName") {
            return {
            fullName: newValue,
            userName: prevValue.userName,
            email: prevValue.email,
            password: prevValue.password
            }
        }else if(inputName === "userName") {
            return {
            fullName: prevValue.fullName,
            userName: newValue,
            email: prevValue.email,
            password: prevValue.password
            }
        }else if(inputName === "email") {
            return {
            fullName: prevValue.fullName,
            userName: prevValue.userName,
            email: newValue,
            password: prevValue.password
            }
        }else if(inputName === "password") {
            return {
            fullName: prevValue.fullName,
            userName: prevValue.userName,
            email: prevValue.email,
            password: newValue
            }
        }
        })
    }

    function onSubmit(event) {
        event.preventDefault()

        const registered = {
        fullName: signUp.fullName,
        userName: signUp.userName,
        email: signUp.email,
        password: signUp.password
        }

        axios.post('http://localhost:3001/app/signup', registered).then(res => console.log(res.data));

        //this would redirect user to homepage =>
        //window.location = "/"
        setSignUp(() => {
        return {
            fullName: "",
            userName: "",
            email: "",
            password: ""
        }
        })
    }
    return (
        <div className="App">
        <div className="container">
          <h1>Hello {signUp.fullName}</h1>
          <div className="form-div">
            <form onSubmit={onSubmit}>
              <input 
              type="text"
              name="fullName" 
              placeholder="Full Name" 
              onChange={handleChange} 
              value={signUp.fullName} 
              className="form-control form-group" 
              />
              <input 
              type="text"
              name="userName"
              placeholder="Username" 
              onChange={handleChange} 
              value={signUp.userName} 
              className="form-control form-group" 
              />
              <input 
              type="text"
              name="email"
              placeholder="Email" 
              onChange={handleChange} 
              value={signUp.email} 
              className="form-control form-group" 
              />
              <input 
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange} 
              value={signUp.password} 
              className="form-control form-group" 
              />
              <button type="submit" className="btn btn-primary btn-block" value="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SignUp;