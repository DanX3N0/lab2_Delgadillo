import { useState, useEffect} from "react";

function Counter() {

   const [count, setCount] = useState(0);

   useEffect(() => {
      let interval = setInterval(() => {
         setCount(count + 1);
      }, 1000);
      return () => {
         clearInterval(interval);
      };
   }, [count]);

   return (
      <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
      +
      </button>
      <button onClick={() => setCount(count - 1)}>
      -
      </button>
      </div> 
   );

}

export default Counter;