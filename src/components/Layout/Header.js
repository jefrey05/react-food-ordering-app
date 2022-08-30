import React from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
const Header = props =>{
 return ( 
    <Fragment>
    <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!"/>
    </div>
 </Fragment>
 )
}

export default Header;