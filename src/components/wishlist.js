import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import {useState} from 'react';

const Wishlist = () => {
  const wishlistarr = JSON.parse(localStorage.getItem("wishlist"));
 
  let [displayItems, setDisplay] = useState([]);
  
  let Remove = (e, id) => {
    let pr_id = id;
    wishlistarr.map((item, index) => {
      if (pr_id === item.id) {
        wishlistarr.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlistarr));
        displayItems = [...wishlistarr];
      }
    });

    setDisplay(displayItems);
  };
  
  return (
    <div className="container">
      <div className="hero is-link">
        <h1 className="head">WISHLIST</h1>
      </div>
      <div className="columns is-multiline">
        {wishlistarr.map((item,index) => {
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

                <button
                  className="increase1"
                  onClick={(e) => Remove(e, item.id, index)}
                >
                  <FaTrashAlt />
                </button>
              </div>
              <div className="space"> </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Wishlist;
