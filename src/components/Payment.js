import React from "react";
let total = 0;
export default function Buy() {
  const data = JSON.parse(localStorage.getItem("addedPrdt"));
  return (
    <div>
      
      
      <div className="container">
        <div className="hero is-link">   
            <h1 className="head">PAYMENT GATEWAY</h1>
        </div>
        <div className="columns is-multiline">   
        {data.map((product) => {
        return (
          <div className="column is-2">
            <div className="card">
              <div className="card-image">
                <figure className="image is -128x128">
                  <img src={product.image} />
                </figure>
              </div>

              <div className="card-content">
                <div className="media-content">
                  <p className="title is-5">{product.title}</p>
                  <p className="title is-5"> Total  :  ${(product.price = product.price * product.count)}</p>
                </div>
                {/* card closing */}
              </div>
              
              <div className="space"> </div>
            </div>
          </div>
        );
      })}
        </div>
        <div>
           <h1 className="flex1">Grand Total : ${grandTotal()}</h1>
        </div>

     
        
              <button class="button is-link">Pay</button> 
     
    </div>
 </div>   
  );
}

const grandTotal = () => {
  const data = JSON.parse(localStorage.getItem("addedPrdt"));

  total = data.reduce((acc, item) => {
    return acc + item.price*item.count;
  }, 0);

  return (  
    <div> 
      {total}
    </div>
  )
};
// export default grandTotal;


