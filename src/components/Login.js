import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as  Switch, Route,Redirect } from "react-router-dom";
import Home from './Home'


export default class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            username: "",
            password: "",
            login:false,
            store:null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        const{username,password} = this.state;
        //console.log(username,password)
        axios
          .post(
              "http://localhost:8080/login",
              {
                      body:JSON.stringify(this.state),  
                      username: username,
                      password: password
                  
              },
              {withCredentials: true}
          )
          .then(response => {
               console.log("res from login", response);
               window.location.href='/home'
           
          })
        
          .catch(error => {
              console.log("login error", error);
          });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h3>Log in</h3>
                <div className="form-group">
                    <input
                      type = "text"
                      name = "username"
                      placeholder = "Username"
                      value = {this.state.username}
                      onChange = {this.handleChange}
                      required
                      /> 
                      <br></br>
                      <br></br>

                    <input
                      type = "password"
                      name = "password"
                      placeholder = "Password"
                      value = {this.state.password}
                      onChange = {this.handleChange}
                      required
                      />  
                      <br></br>
                      <br></br>
                      </div>

                    <button type="submit"  className="btn btn-outline-dark" >Login</button>

                </form>
            </div>
        );
    }
}

