import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import LoginscreenStyle from '../Values/Styles/LoginscreenStyle';
import Colors from '../misc/Colors';

const Background = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <StatusBar backgroundColor={Colors.light} barStyle={'dark-content'} />
      <Image
        style={LoginscreenStyle.SatyamevImg}
        source={require('../assets/Images/satyamev.png')}
      />
      <Text style={LoginscreenStyle.Dropouttext}>DROPOUT</Text>
      <Text style={LoginscreenStyle.Dropouttext}>SURVEY</Text>
      <Text style={LoginscreenStyle.Mobile_survey_text}>
        Mobile Survey App!
      </Text>
    </View>
  );
};

export default Background;
