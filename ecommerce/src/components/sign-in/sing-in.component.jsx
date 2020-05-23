import React, { Component } from 'react';

import './sing-in.component.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {

    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        };

    }


    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    };


    render() {
        return (
            <div className="sign-in">
            <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text"
                    name="email"
                    value={this.state.email}
                    label="Email"
                    onChange={this.handleChange} />

                    <FormInput type="password"
                    name="password"
                    value={this.state.password}
                    label="Password"
                    onChange={this.handleChange} />

                    <div className="buttons">
                    <CustomButton type="submit">
                        Sign in
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSingIn>
                        Sign in with Google
                    </CustomButton>
                    </div>
                    
                </form>      
            </div>
        )
    }
}

export default  SignIn;