import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state, action) => {
   
   // console.log(state);

   // You MUST always need to return a state from here...

   if (action.type === 'ADD_ITEM'){

      const newPeople = [...state.people, action.payload];
      
      return {...state, 
               people: newPeople, 
               isModalOpen: true, 
               modalContent: "item added"
            };
   }

   if (action.type === 'NO_VALUE'){

      return {...state, 
               isModalOpen: true, 
               modalContent: "please enter value"
            };
   }
   

   if (action.type === 'CLOSE_MODAL') {
      return {...state, 
               isModalOpen: false, 
               modalContent: "please enter value"
            };
   }

   // If no matching action is found
   throw new Error ('no matching action type');
};


const defaultState = {
   people: [],
   isModalOpen: false,
   modalContent: ''
}


const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {

      const newItem = { id: new Date().getTime().toString(), name }

      // if name field contains data
      dispatch({ type: 'ADD_ITEM', payload: newItem }) // naming convention - upper_case and under_score

      // reset the input field
      setName('');

    } else {

      // if name field is empty
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
   dispatch({ type: 'CLOSE_MODAL' })
  };

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
    );
};

export default Index;
