import React from 'react'
import PricingCard from './PricingCard';
function PricingContainer(props) {
    console.log("from pricingContainer" + props.data);
    return (
        <div className= "test">
        <PricingCard planName="Qualified20" planPrice="69$" leadsPm="20" platformFees="$299" totalCost="1,679"/>
        <PricingCard planName="Qualified20" planPrice="69$" leadsPm="20" platformFees="$299" totalCost="1,679"/>
        <PricingCard/>
        <PricingCard/> 
        </div>
    )
}

export default PricingContainer
