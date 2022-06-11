import React, {useState} from "react";

import './../Styles/Order.css'

const Order = (props) => {

    const [close , setClose] = useState(false)

    

    const closeHandler = () => {
        setClose(false)
        props.close(close)
    }

    return(
        <>
        <div className="modal">
        <div className="order-list">
            <button onClick={closeHandler}>Close</button>
            <h2>Your order list: </h2>
            {
                props.send == undefined ?(
                    <p>There is no item</p>
                ):(
                props.send.map(item => 
                <div className="order-card">
                    <h3>{item.FoodName}</h3>
                    <div className="order-detail">
                        <p className="order-amount">Amount: {item.Amount}</p>
                        <p>price: {item.FoodPrice}</p>
                    </div>
                </div>
                    ))
            }

            {
                props.send.map(item => 
                <div>
                    <p>Total price {item.Amount * item.FoodPrice}</p>
                </div>
                )
            }

        </div>
        </div>
        </>
    )
}

export default Order