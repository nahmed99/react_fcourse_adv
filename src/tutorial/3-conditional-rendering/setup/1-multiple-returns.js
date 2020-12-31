import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

  // const [isLoading, setIsLoading] = useState(false); - if we wanted to set loading to true within the useEffect function.
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {

    // setIsLoading(true); - this is being done as default in useState above.

    fetch(url)
      .then((resp) => {
        // Check if data exists
        if (resp.status >= 200 && resp.status <=299) {  
          return resp.json();
        } else {
          // Error occured in loading the data.
          setIsLoading(false);
          setIsError(true); 
          throw new Error(resp.statusText);  // This is logged in the console.
        }
      })
      .then((user) => {
        const {login} = user; // detructure the login from user object
        setUser(login);
        setIsLoading(false); // We have got the data, and so no longer loading it.

      })
      .catch((error) => console.log(error));

  }, []); // empty array dependency - to instruct that this useEffect should only be run on initial render (i.e., once!).

  // Mutiple return statements below...

  // While data is being loaded, for example...
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } 

  // If there is an error...
  if (isError) {
    return (
      <>
        <h1>Error...</h1>
      </>
    )
  }

  // Default return
  return (
      <>
        <h1>{ user }</h1>
      </>
    )
  
};

export default MultipleReturns;
