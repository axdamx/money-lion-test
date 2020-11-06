import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import navigationTheme from './src/navigation/navigationTheme';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
Icon.loadFont();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
