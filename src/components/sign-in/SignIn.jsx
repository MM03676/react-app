import React, { Component } from 'react';
import CustomInput from '../custom-input/CustomInput';
import CustomButton from '../custom-button/CustomButton';
import './sign-in.scss';

export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        handleChange={this.handleChange}
                        label="Email"
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        required
                    />
                    <CustomInput 
                        handleChange={this.handleChange}
                        label="Password"
                        type="password" 
                        name="password" 
                        value={this.state.password}
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
