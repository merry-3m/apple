import React, { Component } from 'react'
import "./cardTrade.css"
import PairCollection from '../PairCollection';
import applePairCollection from "../../../assets/pairData/pairData"
 class CardTrade extends Component {
  render() {
    const cardTradeInSection = applePairCollection.find(
      section => section.wrapperClass === "card_trade-in row mx-0"
    );
    return (
      <div>
          
          <PairCollection sections={[cardTradeInSection]} />
      </div>
    );
  }
}

export default  CardTrade;