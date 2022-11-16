import { useRef } from 'react';
import Button from '../UI/Button';
import classes from './ContactUs.module.css';
import axios from 'axios';

const ContactUs = (props) => {
    const nameRef = useRef('');
    const emailIdRef = useRef('');
    const phoneNumberRef = useRef('');

    const userInfoHandler = async(event) => {
        event.preventDefault();

        try {
            const userInfo = {
                name: nameRef.current.value,
                emailId: emailIdRef.current.value,
                phoneNumber: phoneNumberRef.current.value
            }
        const res = await axios.post(
            'https://e-commerce-af028-default-rtdb.firebaseio.com/userInfo.json',
            userInfo
        )
        console.log(res);
    } catch (err) {
        console.log(err);
      }
};

    return (
        <section className={classes.wrapper}>
            <h1>Contact Us</h1>
            <div className={classes.control}>
                <form onSubmit={userInfoHandler}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' ref={nameRef}></input>
                    <label htmlFor='email-id'>Email ID</label>
                    <input type='email' id='email' ref={emailIdRef}></input>
                    <label htmlFor='phone-number'>Phone Number</label>
                    <input type='number' id='number' ref={phoneNumberRef}></input>
                    <Button type='submit'>SUBMIT</Button>
                </form>
            </div>
        </section>
    )
};

export default ContactUs;