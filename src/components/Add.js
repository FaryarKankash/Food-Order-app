import React, { useState, useEffect } from "react";
import "./../Styles/Add.css";

const Add = (props) => {
  const [AddClose, SetAddClose] = useState(false);

  const [Name, setName] = useState("");
  const [Detail, setDetail] = useState("");
  const [Price, setPrice] = useState();

  const [NameError, setNameError] = useState(true);
  const [DetailError, setDetailError] = useState(true);
  const [submitError, setSubmitError] = useState(true);

  useEffect(() => {
    if (Name.length == 0) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  }, [Name]);

  useEffect(() => {
    if (Detail.length == 0) {
      setDetailError(false);
    } else {
      setDetailError(true);
    }
  }, [Detail]);

  const FoodNameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const FoodDetailHandler = (e) => {
    e.preventDefault();
    setDetail(e.target.value);
  };

  const FoodPriceHandler = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const FoodListObject = {
      FoodName: Name,
      FoodDetail: Detail,
      FoodPrice: Price,
    };

    if (NameError == false || DetailError == false) {
      setSubmitError(false);
    } else {
      setSubmitError(true);
      props.getList(FoodListObject);
    }
  };

  const AddCloseHandler = () => {
    SetAddClose(false);
    props.close(AddClose);
  };

  return (
    <>
    <div className="modal">
      <div className="Add-card">
        <button onClick={AddCloseHandler} className="Add-close">
          close
        </button>
        <form onSubmit={SubmitHandler} className="Add-form">
          <label className="Add-label">Enter food name: </label>
          {NameError == false ? (
            <p className="Add-p">Error: Enter Name</p>
          ) : (
            <></>
          )}
          <input
            onChange={FoodNameHandler}
            className="Add-input"
            type={"text"}
            placeholder="food name"
          ></input>
          <label className="Add-label">Enter food detail: </label>
          {DetailError == false ? (
            <p className="Add-p">Error: Enter Detail</p>
          ) : (
            <></>
          )}
          <input
            onChange={FoodDetailHandler}
            className="Add-input"
            type={"text"}
            placeholder="food detail"
          ></input>
          <label className="Add-label">Enter food price: </label>
          <input
            onChange={FoodPriceHandler}
            className="Add-input"
            type={"number"}
            placeholder="food price"
          ></input>
          {submitError == false ? <p className="Add-p-sub">Error</p> : <></>}
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Add;
