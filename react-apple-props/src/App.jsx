import React from "react";

import "./index.css";
import "./CoomonResource/CSS/bootstrap.css";
import Header from "./Component/Header/Header";
import Iphone15pro from "./Component/Collection/Iphone15Pro/Iphone15pro";
import Iphone15 from "./Component/Collection/Iphone15/Iphone15";
import WatchSeries from "./Component/PairCollection/WatchSeries/WatchSeries";
import MacBookPro from "./Component/PairCollection/MacBookPro/MacBookPro";
import CardTrade from "./Component/PairCollection/CardTrade/CardTrade";
import Footer from "./Component/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Iphone15pro />
      <Iphone15 />
      <WatchSeries/>
      <MacBookPro/>
      <CardTrade/>
      <Footer/>
    </>
  );
}

export default App;
