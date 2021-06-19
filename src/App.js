import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PricingCard from "./components/PricingCard";
import PricingContainer from "./components/PricingContainer";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function App() {
  let dataJson = {
    "$100K-$200K": {
      "qualified 20": {
        totalLeads: 20,
        perQualifiedLead: 69,
        totalPrice: 1380,
        platformFee: 299,
        totalCost: 1679,
      },
      "qualified 40": {
        totalLeads: 40,
        perQualifiedLead: 67,
        totalPrice: 2680,
        platformFee: 599,
        totalCost: 3279,
      },
      "qualified 60": {
        totalLeads: 60,
        perQualifiedLead: 65,
        totalPrice: 3900,
        platformFee: 699,
        totalCost: 4599,
      },
      "qualified 80": {
        totalLeads: 80,
        perQualifiedLead: 63,
        totalPrice: 5040,
        platformFee: 799,
        totalCost: 5839,
      },
    },
    "$200K-$300K": {
      "qualified 20": {
        totalLeads: 20,
        perQualifiedLead: 79,
        totalPrice: 1580,
        platformFee: 299,
        totalCost: 1879,
      },
      "qualified 40": {
        totalLeads: 40,
        perQualifiedLead: 77,
        totalPrice: 3080,
        platformFee: 599,
        totalCost: 3679,
      },
      "qualified 60": {
        totalLeads: 60,
        perQualifiedLead: 74,
        totalPrice: 4440,
        platformFee: 699,
        totalCost: 5139,
      },
      "qualified 80": {
        totalLeads: 80,
        perQualifiedLead: 72,
        totalPrice: 5760,
        platformFee: 799,
        totalCost: 6559,
      },
    },
    "$300K-$400K": {
      "qualified 20": {
        totalLeads: 20,
        perQualifiedLead: 99,
        totalPrice: 1980,
        platformFee: 299,
        totalCost: 2279,
      },
      "qualified 40": {
        totalLeads: 40,
        perQualifiedLead: 96,
        totalPrice: 3840,
        platformFee: 599,
        totalCost: 4439,
      },
      "qualified 60": {
        totalLeads: 60,
        perQualifiedLead: 93,
        totalPrice: 5580,
        platformFee: 699,
        totalCost: 6279,
      },
      "qualified 80": {
        totalLeads: 80,
        perQualifiedLead: 90,
        totalPrice: 7200,
        platformFee: 799,
        totalCost: 7999,
      },
    },
    "$400K-$500K": {
      "qualified 20": {
        totalLeads: 20,
        perQualifiedLead: 109,
        totalPrice: 2180,
        platformFee: 299,
        totalCost: 2479,
      },
      "qualified 40": {
        totalLeads: 40,
        perQualifiedLead: 106,
        totalPrice: 4240,
        platformFee: 599,
        totalCost: 4839,
      },
      "qualified 60": {
        totalLeads: 60,
        perQualifiedLead: 102,
        totalPrice: 6120,
        platformFee: 699,
        totalCost: 6819,
      },
      "qualified 80": {
        totalLeads: 80,
        perQualifiedLead: 99,
        totalPrice: 7920,
        platformFee: 799,
        totalCost: 8719,
      },
    },
    "$500K+": {
      "qualified 20": {
        totalLeads: 20,
        perQualifiedLead: 129,
        totalPrice: 2580,
        platformFee: 299,
        totalCost: 2879,
      },
      "qualified 40": {
        totalLeads: 40,
        perQualifiedLead: 125,
        totalPrice: 5000,
        platformFee: 599,
        totalCost: 5599,
      },
      "qualified 60": {
        totalLeads: 60,
        perQualifiedLead: 121,
        totalPrice: 7260,
        platformFee: 699,
        totalCost: 7959,
      },
      "qualified 80": {
        totalLeads: 80,
        perQualifiedLead: 117,
        totalPrice: 9360,
        platformFee: 799,
        totalCost: 10159,
      },
    },
  };

  const [data, setData] = useState(dataJson["$400K-$500K"]);
  return (
    <>
      <div className="header">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            onClick={() => {
              setData(dataJson["$100K-$200K"]);
            }}
          >
            $100K-$200K
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              setData(dataJson["$200K-$300K"]);
            }}
          >
            $200K-$300K
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              setData(dataJson["$300K-$400K"]);
            }}
          >
            $300K-$400K
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              setData(dataJson["$400K-$500K"]);
            }}
          >
            $400K-$500K
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              setData(dataJson["$500K+"]);
            }}
          >
            $500K+
          </Button>
        </ButtonGroup>
      </div>

      <div className="test">
        <PricingCard
          planName="Qualified20"
          planPrice={data["qualified 20"].perQualifiedLead}
          leadsPm={data["qualified 20"].totalLeads}
          platformFees={data["qualified 20"].platformFee}
          totalCost={data["qualified 20"].totalPrice}
        />

        <PricingCard
          planName="Qualified40"
          planPrice={data["qualified 40"].perQualifiedLead}
          leadsPm={data["qualified 40"].totalLeads}
          platformFees={data["qualified 40"].platformFee}
          totalCost={data["qualified 40"].totalPrice}
        />

        <PricingCard
          planName="Qualified80"
          planPrice={data["qualified 80"].perQualifiedLead}
          leadsPm={data["qualified 80"].totalLeads}
          platformFees={data["qualified 80"].platformFee}
          totalCost={data["qualified 80"].totalPrice}
        />

        <PricingCard
          
        />
      </div>

      {/* <PricingContainer data={data}/> */}
    </>
  );
}

export default App;
