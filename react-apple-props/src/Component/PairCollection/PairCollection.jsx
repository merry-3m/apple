import React, { Component } from 'react';

class PairCollection extends Component {
  render() {
    const { sections } = this.props;

    return (
      <div>
        {sections.map((ele, i) => (
          <section key={i} className={ele.wrapperClass}>
            {ele.items.map(({sectionName,imageSrc,altText,textColor,text,description,linkWrapper}, j) => (
              <div key={j} className={`${sectionName} col-md m-md-2`}>
                {imageSrc && (
                  <div className="mt-3 pt-4">
                    <img src={imageSrc} alt={altText} />
                  </div>
              )}
                <div className={textColor}> {text} </div>
                {description && (
                  <div className="h5"> {description} </div>
                )}
                {linkWrapper && (
                  <div className="link-wrapper fw-medium">
                    <ul className="list-unstyled d-flex justify-content-center">
                      <li><a href="#">Learn more</a></li>
                      <li><a href="#">Buy</a></li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
    );
  }
}

export default PairCollection;
