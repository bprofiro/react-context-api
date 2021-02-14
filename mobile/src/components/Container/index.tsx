import React from 'react'

import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useTheme, themes } from '../../context/ThemeContext'


const Container: React.FunctionComponent = ({ children }) => {
  const { theme, setTheme } = useTheme()
  return (
    <View style={{
      flex: 1,
      paddingTop: 140,
      paddingBottom: 140,
      backgroundColor: theme.color.background,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {children}

      <TouchableOpacity 
        style={styles.themeButton}
        onPress={() => setTheme(theme.name === 'dark' ? themes[1] : themes[0])}
      >
        <Text style={styles.themeText}>
          Change Theme
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  themeButton: {
    width: 257,
    height: 50,
    backgroundColor: '#04D361',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  themeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fafafc'
  }
})

export default Container