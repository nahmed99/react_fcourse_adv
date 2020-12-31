import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'peter', 
    age:24, 
    message: 'random maesage'
  });


  const changeMessage = () => {
    
    if (person.message === "random message") {
      // Change the person object using the spread operator to retain
      // some of the existig values, and then change the message value.
      setPerson({...person, message: "new message"});
    } else {
      // Change the person object using the spread operator to retain
      // some of the existig values, and then change the message value.
      setPerson({...person, message: "random message"});
    }
    return 
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
