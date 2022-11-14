import React, { useContext, useRef, useState } from "react";
import classes from './Login.module.css';
import Button from "../UI/Button";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');
    const history = useHistory();
    const authCntx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const emailEntered = emailInputRef.current.value;
        const passwordEntered = passwordInputRef.current.value;
        setIsLoading(true);
        fetch('https://identitytoolkit.googleapi.com/v1/accounts:signInWithPassword?key=ba65703a64004c4db858c49a0304e6c9',
    {
        method: 'POST',
        body: JSON.stringify({
            email: emailEntered,
            password: passwordEntered,
            returnSecureToken: true
        }),
        headers:
        {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        setIsLoading(false);
        if(res.ok){
            return res.json();
        }else{
            return res.json().then((data) => {
                throw new Error(data.error.message);
            })
        }
    })
    .then((data) => {
        authCntx.login(data.idToken);
        history.replace('/store');
    })
    .catch((err) => {
        alert(err);
    })       
};

return(
    <section className={classes.wrapper}>
        <h1>LOGIN</h1>
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
                {!isLoading && <Button>Login</Button>}
                {isLoading && <p>Sending request...</p>}
            </form>
    </section>
    );
};

export default Login;