import React, { Component } from 'react'
import "./Header.css"
import images from '../../assets/constant/image';
import Nav from './Nav';
import navList from '../../assets/headerData/headerData';

 class Header extends Component {
  render() {
    return (
        <div> 
        <header className="nav-wrapper fixed-top">
         <nav className="nav-bar-lists  container">
             <nav  className="navbar navbar-toggleable-sm navbar-expand-md">
                 <button
             className="navbar-toggler navbar-toggler-right"
             type="button"
             data-toggle="collapse"
             data-target=".navbar-collapse"
           >
             ☰
           </button>
           <a className="navbar-brand mx-auto" href="#"
             ><img src={images.apple} alt='apple'
           /></a>
                 <div className="navbar-collapse collapse">
                  <Nav navList ={navList} />
                 </div>
             </nav>
         </nav>
     </header>
       
       </div>
    )
  }
}

export default  Header;