import React from 'react'
import contact from "../data/Contact.json"



export default function Contact() {
  return (
    <div> 
        <div className = "container">
            <h1 className='title'>CONTACT US</h1>
             <section className = "section">
             <div >
                <div className = "columns is-multiline ">
                {contact &&
                        contact.map((person) => {
                        
                return (
                         <div className="column is-4">
                               <div className="card ">
                                   <p className="card-header">{person.name}</p> 
                                   <p>{person.phone}<br></br>{person.email}</p>

                                </div>

                            </div>
                            );
                            })}
                
          </div>
     
    </div>
</section>


</div>
</div>
  )
}
