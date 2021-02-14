import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Container from './src/components/Container'
import Counter from './src/components/Counter'
import Mirror from './src/components/Mirror'
import { CountProvider } from './src/context/CountContext';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Container>
          <CountProvider>
            <Counter />

            <View style={styles.lineStyles} />

            <Mirror />
          </CountProvider>
        </Container>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lineStyles: {
    width: 289,
    borderWidth: 0.5,
    borderColor: '#414a5b',
    margin: 10
  },
});
