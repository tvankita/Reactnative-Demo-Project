import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
  FlatListItem,
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacityComponent,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {name: 'Johan',key: '1',image: require('./MyAssets/student.jpg'), },
  {name: 'Johan',key: '1',image: require('./MyAssets/student.jpg'), },
  {name: 'Johan',key: '1',image: require('./MyAssets/student.jpg'), },
]

export default class FlatListBasics extends Component {
  renderSeparator = () => {
    return (
      <View/>
    );
  };
  //handling onPress action
  getListViewItem = item => {
    Alert.alert(item.name);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.studentview}>
          <Text style={styles.textstud}>Students</Text>

          <View style={styles.seachview}>
            <Feather style={styles.search} name="search" size={18} />
            <TextInput style={styles.form} placeholder="Search" />
          </View>
        </View>

        <View style={styles.allstudent}>
          <Text style={styles.alltext}>All Students</Text>
          <TouchableOpacity style={styles.filterButton}>
            <AntDesign style={styles.filter} name="filter" size={20} />
            <Text style={styles.filterText}> FILTER </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slist}>
          <FlatList
            data={data}
            renderItem={({item, index, separators}) => (
              <View >
                <View style={styles.mainlist}>
                    
                    <TouchableOpacity style={styles.touch}>
                      <Image source={item.image} style={styles.image} />                    

                      <Text
                        style={styles.item}
                        onPress={this.getListViewItem.bind(this, item)}>
                        {item.name}
                      </Text>
                      <AntDesign style={styles.arrowRight} name="right" size={17} />
                    </TouchableOpacity>
                  <View style={styles.calendar}>
                    <AntDesign
                      style={styles.calendarimg}
                      name="calendar"
                      size={17}
                    />
                    <Text style={styles.calendartxt}>                     
                      Last Point Recived on July 03
                    </Text>
                  </View>
                </View>
              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>

        <View style={styles.btmnavigation}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  studentview: {
    backgroundColor: '#006bff',
    justifyContent: 'center',
    paddingHorizontal: 30,
    height: 200,
  },
  textstud: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: -0.2,
    marginTop: 30,
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
  allstudent: {
    marginTop: 20,
    marginHorizontal: 35,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    justifyContent: 'space-between',
  },
  alltext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#79808a',
  },
  filterButton: {
    flexDirection: 'row',
  },
  filter: {
    color: '#000',
  },
  filterText: {
    textAlign: 'right',
    fontWeight: '600',
    color: '#000',
    fontSize: 13,
    letterSpacing: 1.4,
  },
  slist: {
    marginHorizontal: 35,
    margin: 15,
  },
  mainlist: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },  
  arrowRight: {
    justifyContent: 'space-between',
    marginLeft: 160,
    padding: 10,
    marginBottom: 20,
    color: '#000',
    backgroundColor: '#f9f9f9',
    borderRadius: 40,
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
  },  
  image: {
    width: 40,
    height: 40,
    borderRadius: 60,
    marginLeft: 10,
    resizeMode: 'cover',
  },
  item: {
    textAlign: 'center',
    padding: 7,
    fontSize: 16,
    height: 50,
    fontWeight: '700',
    color: '#000',
  },
  calendar: {
    flexDirection: 'row',
    backgroundColor: '#fff5e5',
    borderRadius: 30,
  },
  calendarimg: {
    marginTop: 7,
    marginLeft: 60,
    color: '#ffa319',
  },
  calendartxt: {
    fontSize: 13,
    padding: 7,
  }, 
  teststudent: {
    fontSize: 20,
    fontcolor: '#000',
    fontFamily: 'popins',
    paddingTop: 90,
  },
  
});
