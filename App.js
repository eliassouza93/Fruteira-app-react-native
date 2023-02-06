
import { StatusBar, SafeAreaView, Text } from 'react-native';
import React from 'react'
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

