export const reducer = (state, action) => 
{
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
                  isModalOpen: false
               };
      }


      if (action.type === 'REMOVE_ITEM') {

         const newPeople = state.people.filter((person) => person.id !== action.payload);

         return {...state, 
                  people: newPeople,
                  isModalOpen: true,
                  modalContent: "Removed!"
               };
      }


      // If no matching action is found
      throw new Error ('no matching action type');
   };

}