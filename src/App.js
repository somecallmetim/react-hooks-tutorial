import { useState } from "react";

function App() {
    // IMPORTANT NOTES ON HOOKS!!!
      // 1. When you pass a function to useState, it only runs that function the first time the component is built
          // if you pass anything hard coded (including complicated computations, expensive db queries, etc.)
          // it runs that code EVERY TIME THE COMPONENT IS UPDATED
      // 2. You can only use Hooks inside function components (ie can't use in class components)
      // 3. Hooks must ALWAYS execute in the same order. This means you can't put hooks inside functions or 
          // conditional statements
    const [count, setCount] = useState(() => {return 4});
    const [testO, setTestO] = useState({foo: 3, bar: 4})

    // You don't want to directly alter state variables, even inside the setter function, due to wierd concurrency issues.
        // Instead, pass in an anonymous function that alters the data as you want it.
    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    // If you have an object in your Hook and you only want to update one field, you need to pass in 
        // the initial object as an argument to your anon function USING THE SPREAD OPERATOR and then alter the field 
        // in that passed object or React will just overwrite the initial object with a new one that only has that one 
        // field you tried to alter
    // NOTE: This is not the preferred way to do things. Generally you'd want different state Hooks for each individual thing
    const incFoo = () => {
        setTestO(prevTestO => {return {...prevTestO, foo: prevTestO.foo + 1}});
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <div>
                <button onClick={incFoo}>{testO.foo}</button>
            </div>
            <div>
                <button>{testO.bar}</button>
            </div>
        </>
    );
}

export default App;
