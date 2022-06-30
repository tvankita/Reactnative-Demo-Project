import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  SectionList,
  Text, 
  StatusBar,
  ScrollView,
} from 'react-native';

const DATA = [
    {
        title: "fruit Juice",
        data: ["Apple", "Mango", "Pinapple",]
    },
    {
        title: "Vegitable Juice",
        data: ["Ginger", "Mint", "Cucumber", "Carrot", "Gourd", "Broccoli"]
    },
    {
        title: "Cold Drings",
        data: ["Pinapple Slice", "Jeera", "Thums Up", "Fanta", "Masala"]
    },
];  

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.item}>{title}</Text>
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
    },
    item: {
        padding: 10,
        marginvertical: 8,
        backgroundColor: 'pink',
        marginBottom: 10,
    },
    header: {
        alignItems: 'center',
        fontSize: 25,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 34,
        alignItem: 'center',
    }
});

export default SectionListDemo;