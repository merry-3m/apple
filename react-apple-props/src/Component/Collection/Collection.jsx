import React, { Component } from 'react'

class Collection extends Component {
  render() {
    return (
      <div className="whole-section container-fluid px-0 text-center">
      <section className={`${this.props.wrapperName} ${this.props.textColor}`}>
        <div className="">
            <div className="display-5 pt-5">{this.props.title}</div>
            <div className="fs-6 fw-lighter">{this.props.description}</div>
        </div>
       {this.props.linkWrapper && <div className="link-wrapper fw-medium">
            <ul className="list-unstyled d-flex justify-content-center">
                <li><a href="#">Learn more</a></li>
                <li> <a href="#">Buy</a></li>
            </ul>                      
       </div>}
</section>
</div>
    )
  }
}
export default  Collection;