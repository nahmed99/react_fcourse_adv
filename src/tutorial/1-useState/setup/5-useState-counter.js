import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  // Using an external function for the increase button; just to 
  // show that there are multiple ways of achieving the same result.
  const increase = () => {
    return setValue(value + 1);
  };
  

  const complexIncrease = () => {
    setTimeout( () => {
      
      // setValue(value + 1); - if you click very quickly, multiple times, it will lose some updates...due to the delay, it picks up the pre-updated value for each click.

      // The following method ensures that the current value of the counter
      // is picked, so that we don't lose any updates. 'prevState' is the value
      // that is current - prevState is 'passed' in by setValue, the first element???
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000); // Delay of 2000 milliseconds.
  };
  


  return (
  <>

    <section style={{ margin: '4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{ value }</h1>
      <button className="btn" onClick={ () => setValue(value - 1) } >decrease</button>
      <button className="btn" onClick={ () => setValue(0)}>reset</button>
      <button className="btn" onClick={increase}>increase</button>
    </section>


    {/* There will be a delay before this counter is updated */}
    <section style={{ margin: '4rem 0'}}>
      <h2>more complex counter</h2>
      <h1>{ value }</h1>
      <button className="btn" onClick={complexIncrease}>increase later</button>
    </section>

  </>
  );
};

export default UseStateCounter;
