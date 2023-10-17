import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import LoginscreenStyle from '../Values/Styles/LoginscreenStyle';
import Background from '../components/Background';
import Colors from '../misc/Colors';
import {width} from '../components/Constant';
import {useNavigation} from '@react-navigation/native';

const Homescreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.light}}>
      <ScrollView
        contentContainerStyle={LoginscreenStyle.container}
        keyboardShouldPersistTaps={'handled'}>
        <Background />
        <Text style={LoginscreenStyle.Login_long_txt}>SHISHU MANDIR</Text>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          JAMSHEDPUR
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffbd59',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            width: width / 3,
            height: 55,
            borderRadius: 28,
          }}>
          <Text style={{color: 'black', fontSize: 23, fontWeight: 'bold'}}>
            38
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'black', marginTop: 10}}>Total Students</Text>
        <TouchableOpacity
          style={LoginscreenStyle.Login_btn}
          onPress={() => navigation.navigate('AddNewStudent')}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Add New Student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={LoginscreenStyle.Login_btn}
          onPress={() => navigation.navigate('ViewStudents')}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            View Students
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffbd59',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            width: width / 3,
            height: 55,
            borderRadius: 28,
            marginTop: 40,
          }}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Homescreen;
