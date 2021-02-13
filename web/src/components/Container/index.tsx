import React from 'react'
import { themes, useTheme } from '../../context/ThemeContext'

const Container: React.FunctionComponent = ({ children }) => {
  const { theme, setTheme } = useTheme()

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: theme.color.background,
      color: theme.color.text,
    }}>
      {children}

      <hr />

      <button onClick={() => setTheme(theme.name === 'dark' ? themes[1] : themes[0])}>
        Change theme
      </button>
    </div>
  );
}

export default Container;