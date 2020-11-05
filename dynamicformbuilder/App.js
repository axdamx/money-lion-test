import React from 'react';
import FirstScreen from './src/screens/FirstScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import navigationTheme from './src/navigation/navigationTheme';
import AppNavigator from './src/navigation/AppNavigator';

Icon.loadFont();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
