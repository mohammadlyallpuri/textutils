import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1); // Fix the variable name here
  };

  return (
    props.alert && (
      <div>
        <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.msg)}</strong>: {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    )
  );
}

export default Alert;