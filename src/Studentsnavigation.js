import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  FlatListItem,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {List, ListItem} from 'react-native-elements';

const UseStudentsnavigationUi = () => {
  const UseStudentsnavigationUi = () => {
    const [Images, setImages] = useState([
      {
        name: 'Test Student',
        src: './MyAssets/student.jpg',
        key: '1',
      },
      {
        name: 'Jean',
        src: './MyAssets/student.jpg',
        key: '2',
      },
      {
        name: 'Test',
        src: './MyAssets/student.jpg',
        key: '3',
      },
    ]);
}

  console.log('Images', Images);

  const ItemView = ({Images}) => {
    return (
      <View>
        <Text style={styles.item} onPress={() => getItem(Images)}>
          {Images.value}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.studentview}>
        <Text style={styles.textstud}>Students</Text>

        <View style={styles.seachview}>
          <Feather style={styles.search} name="search" size={18} />
          <TextInput style={styles.form} value="Search" />
        </View>
      </View>

      <View style={styles.allstudent}>
        <Text style={styles.alltext}>All Students</Text>
        <AntDesign style={styles.filter} name="filter" size={20} />
        <Text style={styles.filtertext}> FILTER </Text>
      </View>

      <View style={styles.slist}>
        {/* <Text style={styles.teststudent}>Test Students</Text>
        <Image source='./MyAssets/student.jpg' style={styles.studentimg} /> */}

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Images}
          renderItem={({item}) => {
            console.log('item', item);
            return (
              <>
                <Text style={styles.alltext}>{item.name}</Text>
                <View style={{height: 50, width: 50}}>
                {/* <Image source={item.src} style={styles.studentimg} /> */}
                  {/* <Image
                    style={{height: '100%', width: '100%'}}
                    source={{
                      uri: item.src,
                    }}
                    // onPress={() => navigation.navigate('Achievement')}
                  /> */}
                </View>
              </>
            );
          }}
        />
      </View>

      <View style={styles.btmnavigation}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  studentview: {
    flex: 0.7,
    backgroundColor: '#006bff',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  seachview: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  allstudent: {
    // flex: 0.3,
    marginHorizontal: 35,
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
  },
  slist: {
    marginHorizontal: 35,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    alignitem: 'center',
  },
  btmnavigation: {
    marginHorizontal: 35,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopColor: '#cdcdccd',
  },
  textstud: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: -0.2,
  },
  search: {
    paddingVertical: 15,
    color: '#000',
  },
  form: {
    marginLeft: 5,
    fontSize: 12,
    color: '#44546a',
    fontWeight: '500',
  },
  alltext: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    color: '#79808a',
  },
  filter: {
    marginLeft: 260,
    marginTop: -17,
    color: '#000',
  },
  filtertext: {
    marginTop: -19,
    textAlign: 'right',
    fontWeight: '600',
    color: '#000',
    fontSize: 13,
    letterSpacing: 1.4,
  },
  studentimg: {
    borderRadius: 30,
    width: 60,
    height: 30,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    margin: 8,
  },
  teststudent: {
    fontSize: 20,
    fontcolor: '#000',
    fontFamily: 'popins',
    paddingTop: 90,
  },
  studentimg: {
    width: 58,
    height: 57,
    borderRadius: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    resizeMode: 'contain',
  },
});

export default UseStudentsnavigationUi;
