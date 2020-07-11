import React, {Component} from 'react';
import axios from 'axios'


export default class NewStudent extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    async handleSubmit(){
        const newStudent = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
        const {data} = await axios.post("/student", newStudent)
        console.log("data in handleSubmit", data)
        this.props.addStudent(data)

    }
    render(){

        return (
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="First Name">First Name:</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="firstName"
                value={this.state.firstName}
              ></input>
              <label htmlFor="Last Name">Last Name:</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="lastName"
                value={this.state.lastName}
              ></input>
              <label htmlFor="Email">Email</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="email"
                value={this.state.email}
              ></input>
              <button type="submit">Submit</button>

              
            </form>
          );

    }
    

}