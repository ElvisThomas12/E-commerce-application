import React from "react";
import "../styles/nav.css";
import { Link } from 'react-router-dom';
// import {BrowserRouter,Route, Routes} from 'react-router-dom';
// import cart from "./components/cart";

import { FaApple } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

{
  /* <BrowserRouter>
                <Routes>
          
                    <Route path="cart"element={<cart/>} />
                    <Route path="/"element={<wishlist/>} /> 
                 </Routes>
</BrowserRouter>   */
}

const sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/cart",
      name: "cart",
      icon: <FaShoppingBasket />,
    },
    {
      path: "/wishlist",
      name: "wishlist",
      icon: <FaHeart />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <div className="bars">
            <div class="dropdown">
                <button class="dropbtn">
                  <FaApple />
                </button>

                <div class="dropdown-content">
                  {menuItem.map((item, index) => (
                    <navLink
                    to={item.path}
                    key={index}
                    className="link"
                    activeclassName="active"
                  >
                    <div className="Sline">
                      <div className="icon">
                        <a href="#">{item.icon}</a>
                      </div>

                      <div className="link_text">
                        <Link to={item.path}>{item.name}</Link></div>
                    </div>
                  </navLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};
export default sidebar;
