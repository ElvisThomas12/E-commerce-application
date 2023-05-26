import React from 'react'
// import {Link} from 'react-router-dom'

import product from '../data/Product.json'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import {useState} from 'react';
import Form from 'react-bootstrap/Form'




export default function Searchbar() {

 const [search,setSearch]  =useState('') 

  return (
        <Container>
            
            <div className='flex'>
                   <Form >
                   <input onChange={(e)=> setSearch(e.target.value)} className="search" type="text" placeholder='Search' required></input>
                  
                    </Form> 
                            
                     
                        
                             
                    
                    {/* <button  className='go'>GO</button> */}
            </div>
             <Table striped border hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                           
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                    
                                    {product.filter((product) => {
                                        return (search.toLowerCase() === ''
                                        ? product
                                        : product.title.toLowerCase().includes(search) 
                                        
                                        )
                                    })
                                    .map((product)=>{
                                        return( 
                                            <div className='box1'>
                                                 <td>
                                                    {product.title} :
                                                   <div>
                                                   <img src={product.image} /> 
                                                   </div>
                                                    
                                                 </td>
                                            </div>
                                            
                                        )
                                        
                                    })}
                             </tr>
                           
                        
                        
                        </tbody>
                </Table>

                </Container>
  )
}
