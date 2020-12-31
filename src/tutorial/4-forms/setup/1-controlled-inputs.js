import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people,setPeople] = useState([]);

  // By default, the browser will submit the form and then handle the submit.
  // For the function below to be of any use, we need to use event.preventDefault().
  // With Code Clan I think we used a call back function that was in App.js (but we
  // were working in a file lower down the hierarchy - that function call-backed 
  // the function in App.js).
  const handleSubmit = (event) => {

    // To prevent this function running upon initial entry, but to wait for
    // button click (or form submit - whichever one has been setup).
    event.preventDefault();

    if (firstName && email) {
      //
      // const newPerson = {
      //                     firstName: firstName, 
      //                     email: email
      //                   };
      //
      // In ES6, there is a shorter way to do the above - if the
      //key and value have the same name:
      //
      const newPerson = {
                          id: new Date().getTime().toString(),
                          firstName, 
                          email
                        };

      // setPeople(newPerson); - This will overwrite the previous contents of 
      // the array, so use the arrow function approach below (as was done in 
      // one of the previous examples), and the spread operator...this way we
      // retain the previous elements in the array too!
      setPeople((people) => {
        return [...people, newPerson]
      });

      // reset the form input fields
      setFirstName('');
      setEmail('');
      // console.log(newPerson);

    } else {
      console.log("Empty value(s)");
    }
    
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

        {
          people.map((person) => {
            // Destructure the person object - including an id to 'uniqueify' 
            // list items (as required by React) 
            const {id, firstName, email} = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>

              </div>
            )
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
