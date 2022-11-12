import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
    <h1>The Generics</h1>
    <ul>
        <li><NavLink to="https://youtube.com">
            <img src='https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg' alt='Youtube' color='green' size="30px"/>
        </NavLink>
        </li>
        <li><NavLink to="https://spotify.com">
            <img src='https://prasadyash2411.github.io/ecom-website/img/Spotify Logo.png' alt='Spotify' color='green' size="30px"/>
        </NavLink></li>
        <li><NavLink to="https://facebook.com">
            <img src='https://prasadyash2411.github.io/ecom-website/img/Facebook Logo.png' alt='Facebook'  size="30px"/>
        </NavLink></li>
    </ul>
    </footer>
  );
};

export default Footer;