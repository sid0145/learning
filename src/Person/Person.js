import React from 'react';

const person=(props)=>{
  return(
      <div>
      <p onClick={props.click}>Hi I am {props.name}.and i am from {props.branch} branch.</p>
     <input type="text" onChange={props.changed}/>
      </div>

  );
}
export default person;
