import React from "react";
import axios from 'axios';
class AddLeave extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username: "",
            dt: "",
            des:"",
            employee_id: ""
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
        const{username,dt,des,employee_id} = this.state;
        console.log(username,dt,des,employee_id)
        axios
          .post(
              "http://localhost:8080/addLeave",
              {
                      username: username,
                      dt: dt,
                      des: des,
                      employee:{
                          id:employee_id
                          
                      } 
              },
              {withCredentials: true}
          )
          .then(response => {
               console.log("res from login", response);
          })
          .catch(error => {
              console.log("login error", error);
          });
        event.preventDefault();  
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Apply for a leave</h1>
                    <br></br>
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
                      type = "date"
                      name = "dt"
                      placeholder = "Date"
                      value = {this.state.dt}
                      onChange = {this.handleChange}
                      required
                      /> 
                      <br></br>
                      <br></br>
                      <input
                      type = "text"
                      name = "des"
                      placeholder = "Reason"
                      value = {this.state.des}
                      onChange = {this.handleChange}
                      required
                      /> 
                      <br></br>
                      <br></br>
                      <input
                      type = "id"
                      name = "employee_id"
                      placeholder = "Id"
                      value = {this.state.employee_id}
                      onChange = {this.handleChange}
                      required
                      /> 
                      <br></br>
                      <br></br>
                      </div>
                      <button type="submit"  className="btn btn-dark btn-lg btn-block" >Apply</button>  
                </div>
                </form>
            </div>
        )
    }
}

export default AddLeave