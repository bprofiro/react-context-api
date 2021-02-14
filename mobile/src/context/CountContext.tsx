import React, { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'

interface CountContextData {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const CountContext = createContext<CountContextData>({} as CountContextData)

const CountProvider: React.FunctionComponent = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  )
}

const useCount = (): CountContextData => {
  const { count, setCount } = useContext(CountContext)

  return { count, setCount }
}

export { CountProvider, useCount }