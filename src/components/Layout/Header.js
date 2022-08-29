import React from "react";
import mealsImg from '../../assets/meals.jpg'
const Header = props =>{
 return <React.Fragment>
    <header>
        <h1>Meals</h1>
        <button>Cart</button>
    </header>
    <div>
        <img alt="food"></img>
    </div>
 </React.Fragment>
}

export default Header;