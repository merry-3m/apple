import React, { Component } from 'react';
import footerData from '../../assets/footerData/footerData';
import FooterListItem from './FooterListItem';

class FooterLink extends Component {
  render() {       
    return (
      <>
      <div className="footer-links-wrapper row">
        {footerData.map((section,i)=> {
          // console.log(section);
     return  <div className={`links-wrapper-${i + 1} col-sm-12 col-md`}key={i}>
          <FooterListItem data ={section}/>
          </div>

        

})}
  </div>
  </>
    );
  }
}

export default FooterLink;
