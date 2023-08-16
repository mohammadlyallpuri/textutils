import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    if (text) {
      let newtext = text.toUpperCase();
      setText(newtext);
    }
  };

  const handleLoClick = () => {
    if (text) {
      let newtext = text.toLowerCase();
      setText(newtext);
    }
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCopy = () => {
    if (text) {
      var textArea = document.getElementById("myBox");
      textArea.select();
      navigator.clipboard.writeText(textArea.value);
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    if (event.target.value === '') {
      props.showAlert("Text Cleared!", "warning");
    } else {
      props.showAlert("Converted to uppercase!", "success");
    }
  };

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
            style={{ backgroundColor: '#f2f2f2' }} 
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} disabled={!text}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} disabled={!text}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick} disabled={!text}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} disabled={!text}>
          Copy Text
        </button>
      </div>
      <div className='container my-2'>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length).toFixed(2)} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
