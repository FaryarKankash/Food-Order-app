import React , {useState , useEffect} from "react";

//import Styles
import './../Styles/Cards.css'


const Foods = [
    {
        id:"m1",
        FoodName: "Sushi",
        FoodDetail:"Finest fish",
        FoodPrice: 12
  
    },
  
    {
        id:"m2",
        FoodName: "Kebab",
        FoodDetail:"Finest Meat",
        FoodPrice: 4
  
    }
  
  ]


const Cards = (props) => {

    const [Amount , setAmount] = useState()
    const [newList , setNewList] = useState()

    const inputHandler = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
        console.log(Amount)
    }

    const ClickHandler = (id) => {
        const NewFoods = Foods.map(item => {
            if(item.id == id) {
                const updatedList = {
                    ...item,
                    Amount: Amount
                }
                return updatedList 
            } 
        })

        setNewList(NewFoods.filter(function (elem) {
            return elem !== undefined;
        }))

        props.receive(newList)

    }

    const submitHandler = (e) => {
        e.preventDefault()

    }



    return(

        <article>

        {
          Foods.map(item => 
            <div key={item.id} className="Cards">
                <div className="Card-info">
                    <h3>{item.FoodName}</h3>
                    <p>{item.FoodDetail}</p>
                    <p>{item.FoodPrice} $</p>
                </div>
                <div className="Amount">
                    <div>
                    <form onSubmit={submitHandler}>
                          <label>Amount: </label>
                          <input min="0" onChange={inputHandler} type={"number"}></input>
                          <button onClick={() => ClickHandler(item.id)} type="submit">+ Add</button>
                     </form>
                    </div>
                </div>
           </div> )
            
       }

        </article>

    )
}

export default Cards