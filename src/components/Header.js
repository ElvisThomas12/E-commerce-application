import React from "react"
import "../styles/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <div className="flex">
            
            <div className="products">
                    <ul>
                        <div className="li">
                            <li><a href=" ">Iphone</a> </li>
                    
                            <li><a href=" ">Ipod</a> </li>

                            <li><a href=" ">Ipad</a> </li>
                            
                            <li><a href=" ">Iwatch</a> </li>
                        
                            <li><Link to="/contact">Contact Us</Link> </li>
                           

                        </div> 
                        
                    </ul>

            </div>
            
        </div>

    )
}
export default Header;

