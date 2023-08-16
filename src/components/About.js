import React, { useState } from 'react';

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white'
  });

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
    }
  };

  const btntext = myStyle.color === 'black' ? 'Light Mode' : 'Dark Mode';

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This section allows you to analyze your text.</strong> The content is displayed by default and is controlled by the collapse plugin. You can customize the appearance with CSS.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This section highlights that the service is free to use.</strong> The content is initially hidden and can be expanded by clicking the button. CSS transitions control the display.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This section emphasizes browser compatibility.</strong> Similar to the second section, the content is initially hidden and can be expanded. The collapse plugin and CSS transitions control the visibility.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3"></div>
      <button onClick={toggleStyle} type="button" className="btn btn-primary my-2">
        {btntext}
      </button>
    </div>
  );
}
