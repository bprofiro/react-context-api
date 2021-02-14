import React, { useState } from 'react'

import { View, StyleSheet, Text } from 'react-native'
import { useCount } from '../../context/CountContext'
import { useTheme } from '../../context/ThemeContext'

const Mirror: React.FunctionComponent = () => {
  const { theme } = useTheme()
  const { count } = useCount()

  return (
    <View style={styles.container}>
      <Text 
        style={{
          fontSize: 36,
          color: theme.color.title,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginBottom: 55
        }}
      >
        Mirror:
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mirrorText: {
    fontSize: 36,
    color: '#1b2733',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 55
  },
})

export default Mirror