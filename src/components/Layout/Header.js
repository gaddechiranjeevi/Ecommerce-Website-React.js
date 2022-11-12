import React, { Fragment } from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink activeClassName={classes.active} to="/home">HOME</NavLink>
        <NavLink activeClassName={classes.active} to="/store">STORE</NavLink>
        <NavLink activeClassName={classes.active} to="/about">ABOUT</NavLink>
        <NavLink activeClassName={classes.active} to="/contactUs">Contact-Us</NavLink>
        <CartButton onClick={props.onShow}/>
      </header>
      <div className={classes.container}>
        <h1>The Generics</h1>
      </div>
    </Fragment>
  );
};

export default Header;