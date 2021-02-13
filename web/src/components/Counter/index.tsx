import React from 'react'

import { useCount } from "../../context/CountContext";

const Counter: React.FunctionComponent = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <span>
        <b>Count: </b>
        {count}
      </span>

      <br />

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;