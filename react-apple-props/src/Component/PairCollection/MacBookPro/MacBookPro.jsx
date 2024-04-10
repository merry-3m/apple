import React, { Component } from 'react'
import "./macBookPro.css"
import PairCollection from '../PairCollection';
import applePairCollection from "../../../assets/pairData/pairData"
class MacBookPro extends Component {
  render() {
    const macBookSection = applePairCollection.find(
      section => section.wrapperClass === 'macbook-pro_fitness mx-0 row'
    );
    // console.log(macBookSection);
    return (
      <div>
          
          <PairCollection sections={[macBookSection]} />
      </div>
    );
  }
}
export default  MacBookPro;