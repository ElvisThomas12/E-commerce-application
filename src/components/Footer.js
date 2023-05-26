import React from "react"
import { FaCopyright } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitch} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa"
import "../styles/footer.css"
 function Footer() {
  return (
    <div>
        <div>
            
            <footer class="footer">
                
                 <div class="content has-text-centered">
                         
                             <p>
                             <FaCopyright /> All rights reserved
                            </p>
                            <p>
                                This Website belongs to <a href="#">VE Groups</a> <br></br>
                               <div className="icons">

                                        <div className="fb"><FaFacebook /></div> 
                                        <div className="insta"> <FaInstagram /> </div> 
                                        <div className="twitch"> <FaTwitch /> </div>
                                        <div className="twitter"> <FaTwitterSquare/> </div>


                                 </div>       
                            </p>
                </div>
</footer>
        </div>

    </div>
  )
}
export default Footer;

