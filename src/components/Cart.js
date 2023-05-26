import React from "react";
import "bulma/css/bulma.css";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from 'react-redux'
import { addItem, deleteItem } from "../actions/cartAction";


const Cart = () => {
  const data = JSON.parse(localStorage.getItem("addedPrdt"));
  let [displayItems, setDisplay] = useState([]);
  let [state1, setState] = useState(1);
  const state = useSelector((state) => state);
  let Increase = (id) => {
    data.map((item) => {
      if (id === item.id) {
        item.count++;
        state1 = item.count;
        dispatch(addItem())
        localStorage.setItem("addedPrdt", JSON.stringify(data));
      }
    });

    setState(state1);
  };
  let Decrease = (id) => {
    data.map((item) => {
      if (id === item.id && item.count > 1) {
        item.count--;
        state1 = item.count;
        dispatch(deleteItem())
        localStorage.setItem("addedPrdt", JSON.stringify(data));
      }
    });

    setState(state1);
  };
  const dispatch = useDispatch();
  let Remove = (e, id) => {
    let pr_id = id;
    data.map((item, index) => {
      if (pr_id === item.id) {
        data.splice(index, 1);
        localStorage.setItem("addedPrdt", JSON.stringify(data));
        dispatch(deleteItem());
        displayItems = [...data];
      }
    });

    setDisplay(displayItems);
  };

  return (
    <div className="container">
        <div className="hero is-link">   
            <h1 className="head">CART PAGE</h1>
        </div>
        <h2>Number of items in Cart: {state.numOfItems}</h2>
        <div className="columns is-multiline">   
        {data.map((item, index) => {
        return (
          <div className="column is-3">
            <div className="card">
              <div className="card-image">
                <figure className="image is -1by1">
                  <img src={item.image} />
                </figure>
              </div>

              <div className="card-content">
                <div className="media-content">
                  <p className="title is-4">{item.title}</p>
                  <p className="title is-5">$ {item.price}</p>
                </div>
                {/* card closing */}
              </div>
              <div className="inline">
                {" "}
                <button className="increase" onClick={() => Increase(item.id)}>
                  {" "}
                  <FaPlus />{" "}
                </button>{" "}
                <div className="quant">Quantity : {item.count} </div>
                <button className="decrease" onClick={() => Decrease(item.id)}>
                  {" "}
                  <FaMinus />{" "}
                </button>{" "}
                <button
                  className="increase"
                  onClick={(e) => Remove(e, item.id, index)}
                >
                  <FaTrashAlt />
                </button>
              </div>
              <div className="space"> </div>
            </div>
          </div>
        );
      })}
        </div>
     

     
            
                <button class="button ">
                <Link to="/payment">Buy now</Link></button>
            
    </div>
  );
};

export default Cart;
