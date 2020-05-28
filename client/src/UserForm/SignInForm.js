import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {loginUser} from './ApiCalls.js';

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

      //  this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(e)=> {
       const name = e.target.name;
       const value = e.target.value;
       this.setState({
        [name] : value
       });
    }
/*
    handleSubmit= (e) => {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }*/

     onLoginUser= async(e) => {
        e.preventDefault();
        var loginData = {
          "email": this.state.email,
          "password": this.state.password
        }
        var response = await loginUser(loginData);
         console.log(response);
         alert(JSON.stringify(response)); // for convert the json data into string
        console.log('The form was submitted with the following data:');
        console.log(loginData);
    }


    render() {
        return (
        <div className="FormCenter">
            <form className="FormFields" onSubmit={this.onLoginUser}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
