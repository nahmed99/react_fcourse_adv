import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {

  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');

  const [person, setPerson] = useState({ 
                                        firstName: '',
                                        email: '',
                                        age: ''
                                      });

  const [people, setPeople] = useState([]);


  const handleChange = (e) => {

    // We didn't 'prevent default' in this case, because we want to 
    // capture all changes made to the input fields.

    // get event name and event value - i.e., the data that has been entered/changed.
    const name = e.target.name; // name of changed field
    const value = e.target.value; // value that changed 
    // console.log(name, value);

    // Only the value that changed will be updated; all others are copied using 
    // the spread operator.
    setPerson({...person, [name]:value }); // the key name is being set dynamically.
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only complete the 'submit' if all three input fields contain data.
    if (person.firstName && person.email && person.age) {

      // Create a new person with the data from the input fields, and  
      // a unique key (the id).
      const newPerson = {...person, id: new Date().getTime().toString()}

      // add the newly created person to the people array.
      setPeople([...people, newPerson]);

      // reset the input fields in the person form
      setPerson({firstName: '', email: '', age:''});

    } else {
      console.log("Incomplete data submitted.")
    }
  };
  

  return (
    <>
      <article>
        <form className='form'>

          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button type='submit' onClick={handleSubmit} >add person</button>
        </form>

        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}

      </article>
    </>
  );
};

export default ControlledInputs;
