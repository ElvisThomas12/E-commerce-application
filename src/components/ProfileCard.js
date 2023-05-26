import React, { useState } from "react";
import "../styles/profile.css";
import data from "../data/Product.json";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";
import { Link } from 'react-router-dom';

function ProfileCard(props) {
  const state = useSelector((state) => state);
  console.log(state)
  const [active, setActive] = useState(true);
  const [state1, setState] = useState("Add to cart");
 
  let flag = true;
  const handleClick = () => {
    setActive(!active);
    let wishlistarr = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlistarr.map((value) => {
      if (value.id == props.id) flag = false;
    });
    data.filter((item) => {
      if (item.id === props.id && flag) {
        wishlistarr.push(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlistarr));
      }
    });
  };
  const dispatch = useDispatch();
  let buttonClickHandler = () => {
    let arr = JSON.parse(localStorage.getItem("addedPrdt")) || [];
   
    arr.map((value) => {
      if (value.id == props.id) flag = false;
    });
    data.filter((item) => {
      if (item.id === props.id && flag) {
        arr.push(item);
        localStorage.setItem("addedPrdt", JSON.stringify(arr));
        dispatch(addItem());
        state1 = setState(<Link to="/cart" className="gotocart">Go to cart</Link>);
      }
    });
  };
 
  
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img src={props.image} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{props.title}</p>
          <p className="title is-5">$ {props.price}</p>
        </div>
        <button className="but" onClick={buttonClickHandler} id={props.id}>
          {state1}
        </button>

        <button
          className="heart"
          onClick={handleClick}
          style={{ color: active ? "black" : "red" }}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
