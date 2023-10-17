import {StyleSheet} from 'react-native';
import {height, width} from '../../components/Constant';
import Colors from '../../misc/Colors';

const ViewStudentsStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  Heading: {
    alignSelf: 'center',
    color: Colors.theme,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  listView: { flexDirection: 'row', alignItems:'center',height:50,alignSelf:'center'},
  listHeadings: {
    backgroundColor: '#ffd699',
    height: 50,
    width: width / 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:2,
    // marginVertical:2
  },studName:{backgroundColor: '#ffebcd',
  height: 50,
  width: width / 3.5,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal:2,
marginVertical:2},
studClass:{backgroundColor: '#fff4e3',
  height: 50,
  width: width / 3.5,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal:2,
marginVertical:2},
studYear:{backgroundColor: '#fff4e3',
  height: 50,
  width: width / 3.5,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal:2,
marginVertical:2},
prevBtn:{
  backgroundColor: '#ffbd59',
  justifyContent: 'center',
  alignItems:'center',
  marginTop: 20,
  width: width / 3,
  height: 55,
  borderRadius: 28,
  alignSelf:'flex-start'
  
  
},
nextBtn:{
  backgroundColor: '#ffbd59',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  width: width / 3,
  height: 55,
  borderRadius: 28,
  alignSelf:'flex-end',
  marginStart:25
}
});

export default ViewStudentsStyle;
