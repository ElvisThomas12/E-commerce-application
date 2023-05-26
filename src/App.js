import React from "react";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import "bulma/css/bulma.css";
import store from "./store"
import {Provider} from 'react-redux'

import Cart from "./components/Cart"
import Home from "./components/Home";
import Wishlist from "./components/wishlist";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Buy from "./components/Payment"

function App() {



  return (
    <div>
      <Provider store={store}>
      <Router>
            <Routes>
                 <Route exact path="/" element={<Home/>}/> 
                 <Route path="/cart" element={<Cart/>}/> 
                 <Route path="/wishlist" element={<Wishlist/>}/> 
                 <Route path="/contact" element={<Contact/>}/>
                 <Route path="/search" element={<Search/>}/>
                 <Route exact path="/payment" element={<Buy/>}/> 
             </Routes>
        </Router> 
      </Provider>
         
       
    </div>
  );
}

export default App;
