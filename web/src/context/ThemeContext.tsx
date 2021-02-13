import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'

interface Theme {
  name: string;
  color: {
    title: string;
    text: string;
    background: string;
  }
}

const themes: Theme[] = [
  {
    name: 'dark',
    color: {
      title: '#FAFAFC',
      text: '#E2E7ED',
      background: '#121214' 
    }
  },
  {
    name: 'white',
    color: {
      title: '#1B2733',
      text: '#6D7989',
      background: '#FAFAFC'
    }
  },
]


interface ThemeContextData {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState(themes[0])

  return(
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useCount = (): ThemeContextData => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme }
}

export default ThemeProvider;