/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import FirstScreen from './src/screens/FirstScreen';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

export default function App() {
  return <FirstScreen />;
}
