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
    {name: 'Pine Hill \n Green Caban', key: '1', image: require('./MyAssets/GuestHouse.jpg'), date: 'Jan 03-05', prize: '$55', },
    {name: 'Pine Hill \n Green Caban', key: '2', image: require('./MyAssets/HillStation.png'), date: 'Jan 04-05', prize: '$55', },
    {name: 'Pine Hill \n Green Caban', key: '3', image: require('./MyAssets/GuestHouse.jpg'), date: 'Jan 04-05', prize: '$55', },
    {name: 'Pine Hill \n Green Caban', key: '4', image: require('./MyAssets/HillStation.png'), date: 'Jan 05-05', prize: '$55', },
  ]);

  return (
    <View style={styles.container}>
    <View style={styles.flatList}>
    <TouchableOpacity style={styles.touch}>
    <FlatList 
    data={hoteldata}
      renderItem={({item, index}) => (
        <View style={styles.cardview}>
        <View style={styles.mainlist}>
        <View style={styles.listitem}>         
        <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.namedate}> 
        <View style={styles.itemname}>
        <Text style={styles.item}> {item.name} </Text>
        <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.secondlist}>
        <Text style={styles.prize}>{item.prize}</Text>
        {/* </View> */}
        <View style={styles.calendar}>
          <AntDesign style={styles.calendarimg} name="calendar" size={12} />
           <Text style={styles.calendartxt}> Shown in calender </Text>
         </View>
         </View>
         </View>
        </View>
        <View>
      <TouchableOpacity>
        <View style={styles.reservation}>
        <Text style={styles.write}>Gerer reservation</Text>
        </View>
      </TouchableOpacity>
    </View>
        </View>
      )}      
     />
    </TouchableOpacity>
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
    flexDirection: 'column',
    marginBottom: 15,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },  
  flatList: {
    flexDirection: 'row',
  },
  touch: {
    flexDirection: 'row',
  },  
  mainlist: {
    flexDirection: 'row',
  },
  listitem: {
    flexDirection: 'row',
  },  
  image: {
    width: "50%",
    height: "90%",
    borderRadius: 10,
    resizeMode: 'cover',
  },
  namedate: {
    marginRight: 60,
    marginLeft: -60,
    flexDirection: 'column',
  },
  itemname: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 14,
    height: 70,
    fontWeight: '500',
    color: '#000',
  },
  date: {
    fontSize: 12, 
  },
  secondlist: {
    flexDirection: 'row',  
  },
  prize: {
    marginTop: -25,
    fontSize: 14,
    color: '#000',
  },
  calendar: {
    marginTop: -25,
    flexDirection: 'row',
    backgroundColor: '#ffd700',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 88,
    paddingHorizontal: 10,
  },
  calendarimg: {
    color: '#000',
    marginLeft: -4,
  },
  calendartxt: {
    fontSize: 10,
  }, 
  reservation: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  write: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
  },  
});

export default RestuarantDemo;