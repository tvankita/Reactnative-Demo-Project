import React, {useState} from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView, Alert, View, TouchableOpacity } from 'react-native';

export const FlatListDemo = () => {
    const [fruit, setFruit] = useState([
        {name: 'Apple', id: '1'},
        {name: 'Banana', id: '2'},
        {name: 'Chiku', id: '3'},
        {name: 'Dragen', id: '4'},
        {name: 'Orange', id: '5'},
        {name: 'Pinapple', id: '6'},
        {name: 'Cherry', id: '7'},
        {name: 'Watermelon', id: '8'},
        {name: 'Grapes', id: '9'},
        {name: 'Kiwi', id: '10'},
        {name: 'Mango', id: '11'},
        {name: 'Stroberry', id: '12'},        
    ]);
    const pressHandler = (name) => {
        Alert(name);
    };
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <FlatList
            // numColumns={2}
            keyExtractor={( item ) => item.id}
            data={fruit}
            renderItem={({ item }) => (              
              <TouchableOpacity onPress={ () => Alert.alert(item.name)}>
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
            )}
        />
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'yellow',
  },
  item: {
    marginTop: 10,
    marginBottom: 10,
    // marginLeft: 30, 
    padding: 25,
    backgroundColor: 'skyblue',
    textAlign: 'center',
    marginHorizontal: 5,
  },
});
