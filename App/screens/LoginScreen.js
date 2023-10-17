import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../misc/Colors';
import {height, width} from '../components/Constant';
import LoginscreenStyle from '../Values/Styles/LoginscreenStyle';
import {useNavigation} from '@react-navigation/native';
import Inputbox from '../components/Inputbox';
import Background from '../components/Background';

const LoginScreen = () => {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        contentContainerStyle={LoginscreenStyle.container}
        keyboardShouldPersistTaps={'handled'}>
       
        <Background />
        <Text style={LoginscreenStyle.Login_long_txt}>LOGIN</Text>
        <View style={{marginTop: 10}}>
          <Inputbox
            label={'Name'}
            placeholder="Enter your name"
            value={name}
            onChangeText={text => setname(text)}
          />

          <Inputbox
            label={'password'}
            placeholder="Enter your password"
            value={password}
            onChangeText={text => setpassword(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text style={LoginscreenStyle.forgotPassword}>
              forgot password ?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={LoginscreenStyle.Login_btn}
            onPress={() => navigation.navigate('Homescreen')}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={LoginscreenStyle.signup_txt}>
              Not Registered ? click here to sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
