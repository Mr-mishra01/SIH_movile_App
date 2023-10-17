import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../misc/Colors';
import LoginscreenStyle from '../Values/Styles/LoginscreenStyle';
import {height, width} from '../components/Constant';
import ViewStudentsStyle from '../Values/Styles/ViewStudentsStyle';
import {FlashList} from '@shopify/flash-list';

const ViewStudents = () => {
  const Data = [
    {
      name: 'John Doe',
      class: '10th',
      year: 2023,
    },
    {
      name: 'Alice Smith',
      class: '9th',
      year: 2023,
    },
    {
      name: 'Bob Johnson',
      class: '8th',
      year: 2024,
    },
    {
      name: 'Eva Williams',
      class: '10th',
      year: 2023,
    },
    {
      name: 'Michael Brown',
      class: '11th',
      year: 2022,
    },
    {
      name: 'Sophia Lee',
      class: '9th',
      year: 2024,
    },
    {
      name: 'Daniel Davis',
      class: '7th',
      year: 2025,
    },
    {
      name: 'Olivia Martinez',
      class: '8th',
      year: 2024,
    },
    {
      name: 'Liam Wilson',
      class: '12th',
      year: 2022,
    },
    {
      name: 'Ava Taylor',
      class: '11th',
      year: 2023,
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={Colors.light} barStyle={'dark-content'} />
      <Text style={ViewStudentsStyle.Heading}>VIEW STUDENTS</Text>
      <ScrollView
        contentContainerStyle={ViewStudentsStyle.container}
        keyboardShouldPersistTaps={'handled'}>
        <View style={ViewStudentsStyle.listView}>
          <View style={ViewStudentsStyle.listHeadings}>
            <Text style={{color: 'black'}}>NAME</Text>
          </View>
          <View style={ViewStudentsStyle.listHeadings}>
            <Text style={{color: 'black'}}>CLASS</Text>
          </View>
          <View style={ViewStudentsStyle.listHeadings}>
            <Text style={{color: 'black'}}>YEAR</Text>
          </View>
        </View>
        <View
          style={{
            height: height - 300,
            width: width,
            marginTop: 2,
            paddingHorizontal: 21,
          }}>
          <FlashList
            data={Data}
            renderItem={({item}) => {
              // console.log(item);
              return (
                <View style={{flexDirection: 'row'}}>
                  <View style={ViewStudentsStyle.studName}>
                    <Text style={{color: 'black'}}>{item.name}</Text>
                  </View>
                  <View style={ViewStudentsStyle.studClass}>
                    <Text style={{color: 'black'}}>{item.class}</Text>
                  </View>
                  <View style={ViewStudentsStyle.studYear}>
                    <Text style={{color: 'black'}}>{item.year}</Text>
                  </View>
                </View>
              );
            }}
            estimatedItemSize={12}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={ViewStudentsStyle.prevBtn}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>PREVIOUS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ViewStudentsStyle.nextBtn}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewStudents;
