import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../misc/Colors';
import {width} from '../components/Constant';
import LoginscreenStyle from '../Values/Styles/LoginscreenStyle';
import {useNavigation} from '@react-navigation/native';
import Inputbox from '../components/Inputbox';
import Background from '../components/Background';
const SignUp = () => {
  const navigation = useNavigation();

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [School, setSchool] = useState('');
  const [mobile_no, setmobile_no] = useState();
  return (
    <ScrollView
      contentContainerStyle={LoginscreenStyle.container}
      keyboardShouldPersistTaps={'handled'}>
      <Background />
      <Text style={LoginscreenStyle.Login_long_txt}>CREATE NEW </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        ACCOUNT
      </Text>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={LoginscreenStyle.signup_txt}>
          Already Registered? Log In here
        </Text>
      </TouchableOpacity>
      <View>
        <Inputbox
          label={'Name'}
          placeholder={'enter name '}
          value={name}
          onChangeText={text => setname(text)}
        />
        <Inputbox
          label={'E-mail'}
          placeholder={'Enter E-mail'}
          value={email}
          onChangeText={text => setemail(text)}
        />
        <Inputbox
          label={'Password'}
          placeholder={'Enter Password'}
          value={password}
          onChangeText={text => setpassword(text)}
          secureTextEntry={true}
        />
        <Inputbox
          label={'School'}
          placeholder={'Enter your School'}
          value={School}
          onChangeText={text => setSchool(text)}
        />
        <Inputbox
          label={'Mobile No.'}
          placeholder={'Enter your Mobile No.'}
          value={mobile_no}
          onChangeText={text => setmobile_no(text)}
          keyboardType={'number-pad'}
        />

        <TouchableOpacity style={LoginscreenStyle.Login_btn}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
