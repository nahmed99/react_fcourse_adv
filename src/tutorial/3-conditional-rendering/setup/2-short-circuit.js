import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  // const [text, setText] = useState(0);      // a 'falsey' value.
  // const [text, setText] = useState('A');      // a 'truthy' value.
  const [text, setText] = useState('');   // a falsey value.

  const [isError, setIsError] = useState(false);


  // SHORT-CIRCUIT EVALUATION
  // ========================

  // The OR operator will return the first value if it is true. If it
  // is false, then it will return the second value:
  // const firstValue = text || 'hello world';

  // The AND operator will check the first value, and if it is 'truthy', 
  // then it will return the SECOND value. 
  // If the first value is 'falsey', then it will return the FIRST value 
  // (an empty string):
  // const secondValue = text && 'hello world';



  // JSX only allows you to use something that will return a value. An 'if'
  // does NOT return a value. Variables do (contain a value) and so do
  // expressions. This is where short-circuit evaluation and ternary operators 
  // can be used instead of 'if'.

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'Default Name'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>Toggle Error</button>

      {isError && <h1>Error...</h1>}

      {isError ? 
          (<p>It's True, there is an error..!</p>) 
        : 
          (<div>
            <h2>There is no error!</h2>
          </div>)
      }


      {/* text && <h1>Kidda Dunya?</h1> */}  {/* show the h1, if text is truthy */}

      {/*!text && <h1>Not Kidda Dunya?</h1> */}  {/* show the h1, if text is truthy - a 'not false' in this case */}

    </>
  )
};

export default ShortCircuit;
