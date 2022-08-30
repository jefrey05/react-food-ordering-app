import React from "react";
import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
const Header = props =>{
 return ( 
    <Fragment>
    <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
        <img alt="food" src={mealsImg}></img>
    </div>
 </Fragment>
 )
}

export default Header;