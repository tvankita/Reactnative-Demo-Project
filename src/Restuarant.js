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
  const [selecetdeIndex, setselectedIndex] = useState();
  const [hoteldata, setHoteldata] = useState([
    {
      name: 'Pine Hill \n Green Caban',
      key: '1',
      image: require('./MyAssets/GuestHouse.jpg'),
      date: 'Jan 03-05',
      prize: '$55',
    },
    {
      name: 'Pine Hill \n Green Caban',
      key: '2',
      image: require('./MyAssets/HillStation.png'),
      date: 'Jan 04-05',
      prize: '$55',
    },
    {
      name: 'Pine Hill \n Green Caban',
      key: '3',
      image: require('./MyAssets/GuestHouse.jpg'),
      date: 'Jan 04-05',
      prize: '$55',
    },
    {
      name: 'Pine Hill \n Green Caban',
      key: '4',
      image: require('./MyAssets/HillStation.png'),
      date: 'Jan 05-05',
      prize: '$55',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reservations (Janvier)</Text>
          <FlatList
            data={hoteldata}
            renderItem={({item, index}) => {
              return (
                <View style={styles.cardview}>
                  <View style={styles.mainlist}>
                      <Image source={item.image} style={styles.image} />
                    <View style={styles.namedate}>
                      <View style={styles.itemname}>
                        <Text style={styles.item}> {item.name} </Text>
                        <Text style={styles.date}>{item.date}</Text>
                      </View>
                      <View style={styles.itemname}>
                        <Text style={styles.prize}>{item.prize}</Text>
                       <TouchableOpacity style={[ styles.calendar, 
                           {backgroundColor: index === selecetdeIndex  ? '#000000' : '#ffd700',
                            },
                          ]}
                          onPress={() => setselectedIndex(index)}>
                          <AntDesign name="calendar" color={index === selecetdeIndex  ? '#fff' : '#000'} size={12}/>
                          <Text style={index===selecetdeIndex?styles.calendartxttwo:styles.calendartxt}>Shown in calender </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                    <TouchableOpacity style={styles.reservation}>
                        <Text style={styles.write}>Gerer reservation</Text>
                    </TouchableOpacity>
                </View>
              );
            }}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  heading: {
    color: '#000',
    fontSize: 12,
    paddingBottom: 5,
  },
  cardview: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },  
  mainlist: {
    flexDirection: 'row',
  },
  image: {
    width: '25%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  namedate: {
    marginLeft:  11,
  },
  itemname: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    marginRight: 27,
    fontSize: 14,
    width: "50%",
    fontWeight: '500',
    color: '#000',
  },
  date: {
    fontSize: 12,
  },
  prize: {
     width: ' 30%',
    marginLeft: 4,
    fontSize: 14,
    color: '#000',
  },
  calendar: {
    marginBottom: 8,
    flexDirection: 'row',
    borderRadius: 16,
    alignItems: 'center',
    padding: 5,
  },
  calendartxt: {
    fontSize: 10,
    color: '#000',
  },
  calendartxttwo: {
    fontSize: 10,
    color: '#fff',
  },
  reservation: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },
  write: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
  },
});

export default RestuarantDemo;
