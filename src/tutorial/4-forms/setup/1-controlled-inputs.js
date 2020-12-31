import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  // By default, the browser will submit the form and then handle the submit.
  // For the function below to be of any use, we need to use event.preventDefault().
  // With Code Clan I think we used a call back function that was in App.js (but we
  // were working in a file lower down the hierarchy - that function call-backed 
  // the function in App.js).
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('kidda dunya?');
  };


  return (
    <>
      <article>

        {/* <form className="form" onSubmit={handleSubmit}>  THIS WORKS TOO - with button tag without onClick..below.*/}
        <form className="form">

          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={firstName} 
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          {/* <button type='submit'>Add Person</button> THIS WORKS TOO with onSubmit and handleSubmit in the form tag above*/}
          <button type='submit' onClick={handleSubmit}>Add Person</button>
          
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
