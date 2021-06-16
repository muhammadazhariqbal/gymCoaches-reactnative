import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigations from './src/Navigations';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/Open_Sans/OpenSans-Regular.ttf')
  });
  if (!loaded) return null
  return (
    <Navigations />
  );
}

