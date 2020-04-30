import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {createUser} from './ApiCalls.js';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            id: '', 
            email: '',
            password: '',
            name: '',
            number: '',
            hasAgreed: false
        };
    }

    handleChange= (e) => {
       const name= e.target.name;
       const value = e.target.value && e.target.type==='checkbox' ? e.target.checked : e.target.value ;
       this.setState({
        [name] : value
       });
    }

  /*  handleSubmit=(e)=> {
        e.preventDefault();
         
        const data = {name:this.state.name, email:this.state.email , password:this.state.password, id: this.state.id, number: this.state.number}

    fetch('http://localhost:3000/users', { method: 'POST', 

    body: JSON.stringify(data), // data can be `string` or {object}!

    headers:{ 'Content-Type': 'application/json',
              'Accept': 'application/json'} })

    .then(res => res.json())

    .catch(error => console.error('Error:', error))

    .then(response => console.log('Success:', response));
   }*/
/*
        console.log('The form was submitted with the following data:');
        console.log(this.state);*/

    onCreateUser = async() => {
      var UserData = {
        //this.state;
        "name" : this.state.name,
        "id" : this.state.id,
        "email" : this.state.email,
        "number" : this.state.number,
        "password" : this.state.password
        };

      await createUser(UserData);
      console.log(UserData);
      alert('the data is submit');
      }

    componentDidMount() {
      this.onCreateUser();
    }

    render() {
        return (
        <div className="FormCenter">
            <form className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Your Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Mobile Number</label>
                <input type="del" id="number" className="FormField__Input" placeholder="Enter your contact number" name="number" value={this.state.number} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button onClick={this.onCreateUser} className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
