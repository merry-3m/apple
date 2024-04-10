import React, { Component } from "react";

class Nav extends Component {
  render() {
    const { navList } = this.props;
    return (
      <ul className="navbar-nav nav-justified w-100 nav-fill">
        {navList.map(({ linkName, linkUrl, imgSrc, altText }, i) => (
          <li className="nav-item" key={i}>
            <a className="nav-link js-scroll-trigger" href={linkUrl}>
              {imgSrc ? <img src={imgSrc} alt={altText} /> : linkName}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Nav;

{
  /* <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.linkUrl}>
          {imgSrc ? <img src={this.props.imgSrc} alt= {this.props.altText}/> : {this.props.linkName}}</a></
        </li> */
}
