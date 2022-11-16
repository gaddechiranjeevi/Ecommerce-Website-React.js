import React from 'react'
import {BsYoutube, BsSpotify, BsFacebook } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
    <h1>The Generics</h1>
    <ul>
        <li><NavLink to="https://youtube.com">
            <BsYoutube color='red' size="35px"/>
        </NavLink>
        </li>
        <li><NavLink to="https://spotify.com">
        <BsSpotify color='green' size="30px"/>
        </NavLink></li>
        <li><NavLink to="https://facebook.com">
        <BsFacebook  size="30px"/>
        </NavLink></li>
    </ul>
    </footer>
  );
};

export default Footer;