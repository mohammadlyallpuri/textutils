import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked: " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleClearClick = () => {
    console.log("Clear Text was clicked");
    let newtext = '';
    setText(newtext);
  };

  const handleCopy = () => {
    console.log("Copy Text was clicked");
    var textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    props.showAlert("Converted to uppercase!", "success");
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{ backgroundColor: '#f2f2f2' }} // Add a background color
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className='container my-2'>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
