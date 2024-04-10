import React, { Component } from "react";
import "./watchSeries.css";
import PairCollection from "../PairCollection";
import applePairCollection from "../../../assets/pairData/pairData"

class WatchSeries extends Component {
  render() {
    const watchSeriesSection = applePairCollection.find(
      section => section.wrapperClass === 'watch-series_watch-ultra row mx-0'
    );
    return (
      <div>
          
          <PairCollection sections={[watchSeriesSection]} />
      </div>
    );
  }
}

export default WatchSeries;
