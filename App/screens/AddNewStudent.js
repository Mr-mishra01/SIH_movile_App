import {View, Text, ScrollView, StatusBar, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';
import Colors from '../misc/Colors';
import LoginscreenStyle from '../Values/Styles/LoginscreenStyle';
import Inputbox from '../components/Inputbox';
import { useNavigation } from '@react-navigation/native';
import Dropdown from '../components/Dropdown';


const AddNewStudent = () => {
    const navigation = useNavigation();

  const [name, setname] = useState('');
  const [gender, setgender] = useState('');
  const [age, setage] = useState('');
  const [caste, setcaste] = useState('');
  const [address, setaddress] = useState('');
  const [block, setblock] = useState('');
  const [district, setdistrict] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: Colors.light}}>
      <StatusBar backgroundColor={Colors.light} barStyle={'dark-content'} />
      <Text
        style={{
          alignSelf: 'center',
          color: Colors.theme,
          fontSize: 25,
          fontWeight: 'bold',
          padding: 10,
        }}>
        NEW STUDENTS
      </Text>
      <ScrollView
        contentContainerStyle={LoginscreenStyle.container}
        keyboardShouldPersistTaps={'handled'}>
        <Inputbox
          label={'NAME'}
          placeholder={'Enter Name'}
          value={name}
          onChangeText={text => setname(text)}
        />
        <Inputbox
          label={'GENDER'}
          placeholder={'Enter Gender'}
          value={gender}
          onChangeText={text => setgender(text)}
        />
        <Inputbox
          label={'AGE'}
          placeholder={'Enter Age'}
          keyboardType={'number-pad'}
          value={age}
          onChangeText={text => setage(text)}
        />
        <Inputbox
          label={'CASTE'}
          placeholder={'Enter Caste'}
          value={caste}
          onChangeText={text => setcaste(text)}
        />
        <Inputbox
          label={'ADDRESS'}
          placeholder={'Enter Address'}
          value={address}
          onChangeText={text => setaddress(text)}
        />
        <Inputbox
          label={'BLOCK'}
          placeholder={'Enter Block'}
          value={block}
          onChangeText={text => setblock(text)}
        />
        <Inputbox
          label={'DISTRICT'}
          placeholder={'Enter District'}
          value={district}
          onChangeText={text => setdistrict(text)}
        />

         <TouchableOpacity
            style={LoginscreenStyle.Login_btn}
            onPress={() => navigation.navigate('Homescreen') }>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default AddNewStudent;
