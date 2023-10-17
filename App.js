import {View, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import Intro from './App/screens/Intro';
import Stacknavigator from './App/Navigation/Stacknavigator';
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {
  return (
    <NavigationContainer>
      <Stacknavigator/>
    </NavigationContainer>
  )
};

export default App;
