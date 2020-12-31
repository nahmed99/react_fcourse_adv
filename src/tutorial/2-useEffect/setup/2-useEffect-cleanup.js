import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);
  

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('Check how many time this gets logged'); // logged multiple times until we start doing a cleanup (see the return below...)

    window.addEventListener('resize', checkSize);

    // Cleaanup function:
    // Strictly speaking, the following is not requied in this context - we 
    // could simply add the empty array as a second parameter at the end
    // of the function. However, this method was employed to illustrate how
    // the 'cleanup' could be done in other circumstances - when there is
    // conditional rendering, for example.
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    }
  });

  return (
    <>
      <h1>Window</h1>
      <h2>{ size } PX</h2>
    </>
  )
};

export default UseEffectCleanup;
