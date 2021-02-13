import React from 'react'
import { useCount } from '../../context/CountContext';

const Mirror: React.FunctionComponent = () => {
  const { count } = useCount()

  return (
    <div>
      <span>
        <b>Mirror: </b>
        {count}
      </span>
    </div>
  );
}

export default Mirror;