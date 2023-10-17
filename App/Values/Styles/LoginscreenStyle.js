import {StyleSheet} from 'react-native';
import {width} from '../../components/Constant';

const LoginscreenStyle = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: '#fff',paddingVertical:10},
  SatyamevImg: {resizeMode: 'cover', height: 150, width: 100},
  Dropouttext: {color: 'black', fontWeight: 'bold', fontSize: 20},
  Mobile_survey_text: {color: '#ffdca6'},
  Login_long_txt: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    
  },
  textInput_label: {color: '#989797'},
  textInput: {
    marginTop: 10,
    borderRadius: 15,
    height: 50,
    width: width / 1.2,
    backgroundColor: '#d4d3d3',
    paddingLeft: 30,
    textShadowColor: 'white',
  },
  forgotPassword: {marginTop: 10, color: '#3ece89'},
  Login_btn:{
    backgroundColor: '#ffbd59',
    height: 50,
    width: width / 1.2,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },signup_txt:{marginTop: 10, color: '#3ece89'}
});
export default LoginscreenStyle;
