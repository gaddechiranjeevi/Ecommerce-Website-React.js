import React, { Fragment, useContext, useRef } from "react";
import classes from './Login.module.css';
import Button from "../UI/Button";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import axios from "axios";

const Login = () => {

    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');
    const history = useHistory();
    const authCntx = useContext(AuthContext);

    const submitHandler = async(event) => {
        event.preventDefault();

        const emailEntered = emailInputRef.current.value;
        const passwordEntered = passwordInputRef.current.value;
        try {
            const response = await axios.post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDWh-HNvbkUvfvAzeqUNVk-zChPEvOXPE',
                {
                    email: emailEntered,
                    password: passwordEntered,
                    returnSecureToken: true
                }
            );

            const token = response.data.idToken;
            const email = response.data.email;

            authCntx.login(token, email);
            history.replace('/store');   
            console.log("Login Success")
            localStorage.setItem('email', response.data.email.replace('@','').replace('.', ''))

            } catch (err) {
                console.log(err);
                alert(err);
            }
    };

return(
    <Fragment>
    <section className={classes.wrapper}>
        <h1>User Login</h1>
            <form onSubmit={submitHandler} className={classes['login-form']}>
                <label htmlFor="email-id">Email ID</label>
                <input type="email" id="email" 
                    required 
                    ref={emailInputRef} 
                    placeholder="enter your email..." 
                />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" 
                required 
                ref={passwordInputRef} 
                placeholder="enter password..." 
                />
                <Button>Login</Button>
            </form>
    </section>
    </Fragment>
    );
};

export default Login;