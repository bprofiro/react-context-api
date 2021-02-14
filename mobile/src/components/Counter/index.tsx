import React from 'react'

import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useCount } from '../../context/CountContext'

import { useTheme, themes } from '../../context/ThemeContext'

const Counter: React.FunctionComponent = () => {
  const { theme } = useTheme()
  const { count, setCount } = useCount()

  return (
    <View>
      <Text style={{
        fontSize: 36,
        color: theme.color.title,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 55
      }}>
        Count:
      </Text>

      <Text
        style={{
          fontSize: 30,
          color: theme.color.text,
          alignSelf: 'center',
          marginBottom: 50
        }}
      >
        {count}
      </Text>

      <TouchableOpacity 
        style={styles.themeButton}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.themeText}>
          Increase
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 36,
    color: '#1b2733',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 55
  },
  themeButton: {
    width: 257,
    height: 50,
    backgroundColor: '#04D361',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 40
  },
  themeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fafafc'
  }
})

export default Counter