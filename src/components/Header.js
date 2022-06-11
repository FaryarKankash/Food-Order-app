import React , {useState} from "react";

import CartHeader from "./Cart-Button";

//import Styles
import './../Styles/Header.css'


const Header = (props) => {

    const [YourCard , setYourCard] = useState(true)
    const [AddFood , setAddFood] = useState(true)

    const ClickHandler = (e) => {

        setYourCard(e)
        props.readOrder(YourCard)

    }

    const AddHandler = (e) => {
        setAddFood(true)
        props.readAdd(AddFood)
    }

    return(
        <header className="Header">
            <h2 className="Header-h2">Food order app</h2>

            
            <CartHeader CardSeter={ClickHandler} />
            

            {/* <button onClick={ClickHandler} className="Header-button">Your Cart</button> */}
        </header>
    )
}

export default Header