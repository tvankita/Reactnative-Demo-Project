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

function RestuarantDemo() {
  const [hoteldata, setHoteldata] = useState([
    {name: 'Pine Hill \n Green Caban', key: '1', image: require('./MyAssets/GuestHouse.jpg'),},
    {name: 'Pine Hill \n Green Caban', key: '2', image: require('./MyAssets/HillStation.png'),},
    {name: 'Pine Hill \n Green Caban', key: '3', image: require('./MyAssets/GuestHouse.jpg'),},
    {name: 'Pine Hill \n Green Caban', key: '4', image: require('./MyAssets/HillStation.png'),},
  ]);

//   renderSeparator = () => {
//     return (
//       <View/>
//     );
//   };

  return (
    <View style={styles.container}>
    <View>
    <View stylele={styles.cardview}>
    <View style={styles.list}>
          <FlatList style={styles.flatList}
           />
    </View>
    <View style={styles.reservation}>
        <Text style={styles.write}>Gerer reservation</Text>
    </View>
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 24,
        marginTop: 20,
    },  
    cardview: {
        // backgroundColor: 'red',
        // height: 100,
        // width: 100,
        // // height: 'auto',
        marginBottom: 15,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 20,
        height: "100%",
        width: "100%",
    },
    list: {
        flexDirection: 'row',
        borderRadius: 10,
        padding: 20,
        marginTop: 15,
        backgroundColor: 'seagreen',
    },
    // flatList: {
    //     paddingVertical: 20,
    // },
    reservation: {
        backgroundColor: '#cdcdcd',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
    },
    write: {
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
    },
});

export default RestuarantDemo;