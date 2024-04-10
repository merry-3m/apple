import React, { Component } from 'react'
import Collection from '../Collection';
import "./iphone15pro.css"

class Iphone15pro extends Component {
  render() {
    return (
      <Collection
       wrapperName="iPhone15-pro-wrapper"
       textColor="text-white" 
       title="iPhone 15 Pro"
       description="Titanium.So strong.So light.So Pro."
       linkWrapper/>
    )
  }
}

export default  Iphone15pro;