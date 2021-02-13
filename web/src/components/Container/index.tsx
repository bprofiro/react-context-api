import React from 'react'

const Container: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      {children}

      <hr />

      <button>
        Change theme
      </button>
    </div>
  );
}

export default Container;