import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      {/* <button className="btn" onClick={() => setShow(!show)}>show/hide</button> */}

      <button className="btn" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <Item />}

    </>
  );
};


const Item = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    // Clean-up - this is crucial to stop 'wasting' resources.
    return () => {
      window.removeEventListener('resize', checkSize);
    }
    

  }, []); // empty array dependency

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>Window</h1>
      <h2>Size: { size } px</h2>
    </div>
  );
};

export default ShowHide;
