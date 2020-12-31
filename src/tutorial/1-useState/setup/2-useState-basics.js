import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log("The initial useState(): " + useState());
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log("the value is: " + value, "the function is: " + handler);

  // create reference to the useState, destructuring it into variable and a function.
  const [text, setText] = useState('random title'); // with a default value.


  const handleClick = () => {
    if (text === 'random title') {
      setText("Kidda Dunya?");
    } else {
      setText('random title');
    }
  }


  return (
    <React.Fragment>
      <h1>{ text }</h1>
      <button className='btn' onClick={ handleClick }>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
