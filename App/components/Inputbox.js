import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {width} from './Constant';

const Inputbox = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={Styles.conatiner}>
      <Text style={Styles.textInput_label}>{label}</Text>
      <TextInput
        style={Styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Inputbox;
const Styles = StyleSheet.create({
  conatiner: {
    marginTop: 10,
  },
  textInput: {
    marginTop: 10,
    borderRadius: 15,
    height: 50,
    width: width / 1.2,
    backgroundColor: '#d4d3d3',
    paddingLeft: 30,
    textShadowColor: 'white',
  },
  textInput_label: {color: '#989797'},
});
