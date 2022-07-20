import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {} from 'react-native-gesture-handler';

const FetchImage = () => {
  const [myUserData, setMyUserData] = useState();

  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );
      const myData = await response.json();
      setMyUserData(myData);
    } catch (error) {
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={myUserData}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
                <Image
                  style={styles.img}
                  source={{uri: item.image}}
                />
                <Text>Name : {item.name}</Text>
                <Text>Email : {item.email}</Text>
                <Text>Mobile : {item.mobile}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#E6E8AB',
    marginVertical: 20,
    alignItems: 'center',
    paddingBottom: 10,
  },
  datacontainer: {
    paddingVertical: 10,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 10,
  },
});
export default FetchImage;