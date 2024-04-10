import React, { Component } from 'react'

class FooterListItem extends Component {
  render() {
    // console.log(this.props.data);
    return (
        <>
        {this.props.data.map((ele,i)=> (
          <div key={i}>
          <h3>{ele.title}</h3>
          {/* {console.log(ele.links)}; */}
          <ul>
          {ele.links.map(({href,label},j)=>(         
           <li key ={j} >
            <a href={href}>{label}</a> 
           </li> 
 ))}
          </ul>
        
        </div>
        ))}
        
      </>
    )
  }
}

export default  FooterListItem;