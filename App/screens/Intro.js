import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import Colors from '../misc/Colors';
import {width} from '../components/Constant';

const Intro = () => {

    const [User, setUser] = useState(null);
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.text}>Enter your Name Below</Text>
        <TextInput value={User} onChangeText={text=>setUser(text)} style={styles.inputbox} placeholder="name" />
      </View>
    </>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {
    color: '#fff',
    alignSelf: 'flex-start',
    paddingLeft: 27,
  },
  inputbox: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.light,
    borderRadius: 12,
    width: width - 50,
    paddingLeft: 15,
    color: Colors.Dark,
    height: 40,
  },
});
