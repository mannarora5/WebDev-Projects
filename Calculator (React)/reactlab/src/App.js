// Importing two hook techniques: useState and useRef
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() {
  // variable inputRef set to null
  const inputRef = useRef(null);
  // Therefore resultRef is also set to null and will update accordingly with the refresh
  const resultRef = useRef(null);
  // result is currently set to 0 and setResult function can be used to set the result
  const [result, setResult] = useState(0); 
 

  // EXAMPLE FUNCTION
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
  
  // receieve some prop e
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault();
    // Use the set result hooks function to set the result after minus
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    // Add the code for the times function 
     e.preventDefault();
    // Use the set result hooks function to set the result after minus
    setResult((result) => result*Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault();
    setResult((result) => (result)/(Number(inputRef.current.value)));
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    // Access the current input value and set it to 0
    inputRef.current.value = 0;
    
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    // reset result to 0
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Minus</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button> 
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
