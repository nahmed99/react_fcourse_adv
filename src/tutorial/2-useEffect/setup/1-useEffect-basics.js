import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {

  // useState triggers a re-render
  const [value, setValue] = useState(0);

  // // useEffect is run after every (re-)render
  // useEffect (() => {
  //   console.log('call useEffect');
  //   if (value > 0) {
  //     document.title = `New Message(${value})`; // The webpage title (on tab or page)
  //   }
  // }, []); // If you only want the useEffect to run on the inital render, then add the empty array as the second parameter, e.g., []. If you want it to be run upon a change to a dependency, then place that dependency in the array, e.g., [value].


  // useEffect is run after every (re-)render
  useEffect (() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Message(${value})`; // The webpage title (on tab or page)
    }
  }, [value]); // If you want it to be run upon a change to a dependency, then place that dependency in the array, e.g., [value].

  // If this is shown twice, then that is because of the
  // <React.StrictMode> in index.js. Removing (only) these
  // tags will only show the following console.log once:
  //
  // console.log('Render component');
  //

  return (
    <>
      <h1> { value }</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  )
};

export default UseEffectBasics;
