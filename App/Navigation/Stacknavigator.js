import {View, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
// import Intro from '../screens/Intro';
import SignUp from '../screens/SignUp';
import Homescreen from '../screens/Homescreen';
import AddNewStudent from '../screens/AddNewStudent';
import ViewStudents from '../screens/ViewStudents';
AddNewStudent
const stack = createNativeStackNavigator();
const Stacknavigator = () => {
  return (
    <stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      {/* <stack.Screen name="Intro" component={Intro} /> */}
      <stack.Screen name="LoginScreen" component={LoginScreen} />
      <stack.Screen name="SignUp" component={SignUp} />
      <stack.Screen name="Homescreen" component={Homescreen} />
      <stack.Screen name='AddNewStudent' component={AddNewStudent}/>
      <stack.Screen name='ViewStudents' component={ViewStudents}/>
    </stack.Navigator>
  );
};

export default Stacknavigator;
