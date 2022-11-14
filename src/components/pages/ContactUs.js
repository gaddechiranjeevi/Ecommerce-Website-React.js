import { useRef } from 'react';
import Button from '../UI/Button';
import classes from './ContactUs.module.css';

const ContactUs = (props) => {
    const nameRef = useRef('');
    const emailIdRef = useRef('');
    const phoneNumberRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();

        const productArray = {
            name: nameRef.current.value,
            emailId: emailIdRef.current.value,
            phoneNumber: phoneNumberRef.current.value
        }
        props.onAddQuery(productArray)
    }

    return (
        <section className={classes.wrapper}>
            <h1>Contact Us</h1>
            <div className={classes.control}>
                <form onSubmit={submitHandler}>
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