import React, {useState} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FoodMenuDemo = () => {
//   cost [selecetdeIndex, setselectedIndex] = useState();
//   const [hoteldata, setHoteldata] = useState([
//     {
//       name: 'Chef Vincent',
//       key: '1',
//       image: require('./MyAssets/GuestHouse.jpg'),
//     },    
//   ]);
    return (
        <View style={style.container}>
        <View  style={style.seachview}>
        <TextInput style={style.form} placeholder="Search" 
        // onChangeText={this.handleChange}
         />
        </View>
            <Text></Text>
        </View>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    seachview: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        height: 50,
        alignItems: 'center',
      },
    search: {
        color: '#000',
      },
      form: {
        marginLeft: 5,
        fontSize: 12,
        color: '#44546a',
        fontWeight: '500',
        padding: 0,
        textAlignVertical: 'center',
        flex: 1,
      },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
    buttonpress: {
        marginBottom: 5,
    },
});

export default FoodMenuDemo;

