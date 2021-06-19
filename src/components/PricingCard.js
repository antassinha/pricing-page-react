import React from 'react'
import './PricingCard.css'

function PricingCard (props) {
 if (props.planName) {
   return (
     <div className="PricingCard">
       <div className="title">{props.planName}</div>

       <div className="card">
         <h3 className="price">${props.planPrice}</h3>
         <p className="price-desc">per Qualified Lead</p>

         <div className="seperator"></div>

         <p className="price-desc">Qualified Leads Per box</p>
         <p className="price-box-text">{props.leadsPm}</p>

         <div className="seperator"></div>

         <p className="price-desc">Platform Fee Per Month</p>
         <p className="price-box-text">${props.platformFees}</p>
       </div>
       <div className="final-price-box">${props.totalCost}/mo</div>
     </div>
   );
 } else {
   return (
    <div className="PricingCard">
    <div className="title">Enterprise</div>
    <div className="card dark">


    <div className="blankData">
      <h3>Get in touch to know more!</h3>
    </div>
      
    </div>
  </div>
   );
 }
};

function cardWithData(props) {
  
}

export default PricingCard
