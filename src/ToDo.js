import React from 'react';
import './ToDo.css';
const ToDo = (props) => {
  return(
    <div className="Person">
    <h2>{props.workName}</h2>
    <button  onClick={props.removeWork}>Remove</button>
    </div>
  );
}

export default ToDo;
