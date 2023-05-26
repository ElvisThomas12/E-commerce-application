import React from 'react'
import data from "../data/Product.json";
import ProfileCard from "../components/ProfileCard";
import Nav from "../components/Nav";
import Header from "../components/Header";
import "bulma/css/bulma.css";
import "../products.css";
import Footer from "../components/Footer";
import {useState} from 'react';

// import {Link} from 'react-router-dom'



export default function Home() {
    const [search,setSearch]  =useState('') 
    
  return (
    <div>
         <section className = "hero is-link">

            <div className = "hero-body">
                 <div className = "flex">
                     <Nav /> <p className = "title1">Apple Store</p> <Header />
                    
                    </div>
                    <input onChange={(e)=> setSearch(e.target.value)} className="search" type="text" placeholder='Search' required></input>
                   
                </div>

        </section>

            <div className = "container">
                 <section className = "section">
                <div >
                     <div className = "columns is-multiline ">

                     {data &&
                        data.filter((item) => {
                            return (search.toLowerCase() === ''
                            ? item
                            : item.title.toLowerCase().includes(search.toLowerCase()) 
                               
                            )
                        }).map((item) => {
                        console.log(item.image);
                        return (
                         <div className="column is-3">
                                
                                     <ProfileCard title = {item.title} image={item.image} id={item.id} price={item.price} />
                                
                            </div>
                            );
                            })}

                       </div>
                 </div>
             </section>
             

             </div>
             <Footer />
       </div>      
  )
}

