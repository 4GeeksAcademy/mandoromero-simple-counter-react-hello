import React, { useState, useEffect, useRef } from 'react';

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     const id = setInterval(() => {
//       savedCallback.current();
//     }, delay);

//     return () => clearInterval(id);
//   }, [delay]);
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   setCount(prevCount => (prevCount + 1) % 10);
//   useInterval(() => {
//     setCount(prevCount => prevCount + 1);
//   }, 1000);

//   return <h1>{count}</h1>;
}

export default Counter;