import React, { useState } from 'react';

function Counter1() {
  const [count, setCount] = useState(0);

  
  const incrementCount = () => {
    setCount(prevCount => (prevCount + 1) % 10);
  };

  
  React.useEffect(() => {
    const intervalId = setInterval(incrementCount, 1000);
    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return <h1>{count}</h1>;
}

export default Counter1;