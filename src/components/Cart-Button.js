import React , {useState} from "react";

import './../Styles/CartHeader.css'

const CartHeader = (props) => {

    const [YourCard , setYourCard] = useState(true)

    const clic = (e) => {
        setYourCard(true)
        console.log(YourCard)
        props.CardSeter(YourCard)
    }


    return(
        <button onClick={clic} className="CartHeader">
            <span className="span-logo">&#127860;</span>
            <span>Cart</span>
            <span className="span-amount">4</span>
        </button>
    )
}

export default CartHeader