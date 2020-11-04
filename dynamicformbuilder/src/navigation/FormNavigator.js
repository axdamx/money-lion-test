import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();

const FormNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="First" component={FirstScreen} />
    <Stack.Screen name="Second" component={SecondScreen} />
  </Stack.Navigator>
);

export default FormNavigator;
