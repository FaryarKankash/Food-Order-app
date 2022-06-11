import React , {useState} from 'react';


//import components
import Header from './components/Header';
import Cards from './components/Cards';
import Info from './components/Info';
import Order from './components/Order';
import Add from './components/Add';
import Footer from './components/Footer';

//import Styles
import './Styles/reset.css'
import './App.css'


const App = () => {

  const [showOrder , setShowOrder] = useState()

  // const [showAdd , setShowAdd] = useState()
  // const [FoodList , setFoodList] = useState()

  const [NewList , setNewList] = useState()

  const funcOrder = (e) => {
    setShowOrder(e)
    console.log(showOrder)
  }

  const funcCloseOrder = (e) => {
    setShowOrder(e)
    console.log(showOrder)
  }

  // const funcAdd = (e) => {
  //   setShowAdd(e)
  //   console.log(showOrder)
  // }

  // const funcCloseAdd = (e) => {
  //   setShowAdd(e)
  // }

  // const listHandler = (e) => {

  //   setFoodList((prev) => {
  //     return([e,...prev])
  //   })

  // }


  //Order


  const NewFoodsList = (e) => {
    setNewList(e)
    console.log(NewList)
  }


  return(
      <>
        <Header readOrder={funcOrder} />
        {
          showOrder == true ? (
          <Order send={NewList} close={funcCloseOrder} />
          ):( <></>
          )
        }
        <Info />
        <Cards receive={NewFoodsList} />
        <Footer />
      </>
  )


}

export default App;
