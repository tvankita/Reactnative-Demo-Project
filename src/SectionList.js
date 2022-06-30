import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  SectionList,
  Text, Alert,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

const DATA = [
    {
        title:"fruit Juice",
        data: ["1. Apple", "2. Mango", "3. Pinapple",]
    },
    {
        title: "Vegitable Juice",
        data: ["1. Ginger", "2. Mint", "3. Cucumber", "4. Carrot", "5. Gourd", "6. Broccoli"]
    },
    {
        title: "Cold Drings",
        data: ["1. Pinapple Slice", "2. Jeera", "3. hums Up", "4. Fanta", "5. Masala"]
    },
];  
const pressHandler = (data) => {
  Alert.alert(data);
};
const Item = ({ title }) => (
    <View style={styles.item}>
    <TouchableOpacity onPress={ () => Alert.alert(Item.data)}>
        <Text style={styles.item}>{title}</Text>
        </TouchableOpacity>
    </View>
);

class SectionListDemo extends Component {
    render() {
      return (
        <SafeAreaView style={styles.containers}>
        
          <SectionList
          scrollEnabled = {true}
            sections={DATA}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      );
    }
  }

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'space-around',
    },
    item: {
      fontSize: 15,        
      marginLeft: 30,
      marginRight: 30,
      padding: 10,
      color: '#000',
      backgroundColor: 'pink',
      marginBottom: 10,
      // justifyContent: 'center',
      justifyContent: 'space-between',
      textAlign: 'center',
      // padding: 10,
      // marginvertical: 8,
      // backgroundColor: 'pink',
      // marginRight: 5,
    },
    header: {
        marginLeft: 5,
        marginBottom: 30,
        marginTop: 20,
        fontSize: 25,
        backgroundColor: '#fff',
        // textAlign: 'center',
    },
    title: {
        fontSize: 34,
        alignItem: 'center',
    }
});

export default SectionListDemo;