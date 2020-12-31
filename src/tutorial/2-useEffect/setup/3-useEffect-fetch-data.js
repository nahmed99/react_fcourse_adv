import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';


const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); // This will trigger a re-render, which in-turn will 
    // trigger the useEffect again...which will getUsers again and so forth. An 
    // infinite loop! To prevent that, we need to add a dependency array as a 
    // second parameter to useEffect, i.e., [] - the empty array.

    // console.log(users);
  };

  // A useEffect can NOT be an async await. Therefore need to code it inside
  // the useEffect, or as a separate (async) function.
  useEffect(() => {
    getUsers();
  }, []); // Empty array dependency list added to ensure useEffect it only invoked on initial entry.

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">

        {users.map((user) => {

          // destructure the user object
          const {id, login, avatar_url, html_url} = user;
          return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
          );

        })}

      </ul>
    </>
    );
};


export default UseEffectFetchData;
