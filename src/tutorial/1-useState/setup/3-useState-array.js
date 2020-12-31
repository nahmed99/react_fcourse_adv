import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {

    // fileter out all elements that do NOT have the selected id
    let newPeople = people.filter((person) => person.id !== id);

    // set the people array to contain the filtered array
    setPeople(newPeople);
  };

  return (
    <>
      {/* For each element in the array... */}
      {people.map((person) => {
        const {id, name} = person;  // de-structure the person object
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* You need to use the arrow function below to ensure that the
      setPeople() within onClick does NOT run automatically upon first
      entry to this page. Any function name that contains brackets at
      the end will be run automatically. Two ways to prevent that happening
      is not to use brackets after the function name, or to 'embed' them
      within an arrwo function.
      In the case below, the empty array clears the list... */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );

};

export default UseStateArray;
