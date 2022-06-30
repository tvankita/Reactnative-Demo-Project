import React, {useState} from 'react';
import { 
    Text, StyleSheet, FlatList, 
    SafeAreaView, Alert, ScrollView, View,
    TouchableOpacity, Image } from 'react-native';
// import images from './MyAssets';   

export default function FlatListWithImage () { 
    const [flower, setFlower] = useState([
        {name: 'BlueFlowers', key: '1', image: require('./MyAssets/blueflowers.webp')},
        {name: 'Buke', key: '2', image: require('./MyAssets/buke.webp')},
        {name: 'whiteFlowers', key: '3', image: require('./MyAssets/whiteflowers.webp')},
        {name: 'Colorful Pansies', key: '4', image: require('./MyAssets/colorful_pansies.jpg')},
        {name: 'Daffodils-Tulips-Flower', key: '5', image: require('./MyAssets/Daffodils-tulips-crocus-hyacinth-flower.jpg')},
        {name: 'Flowers Pot', key: '6', image: require('./MyAssets/flowerspot.webp')},
        {name: 'Gerbery-Makro-Malinovyi', key: '7', image: require('./MyAssets/gerbery-makro-malinovyi.jpg')},
        {name: 'Japan-Sakura', key: '8', image: require('./MyAssets/japan-sakura.jpg')},
        {name: 'Kolorki', key: '9', image: require('./MyAssets/kolorki.jpg')},
        {name: 'Lotus', key: '10', image: require('./MyAssets/lotus.webp')},
        {name: 'Purple-Flowers', key: '11', image: require('./MyAssets/purple-flowers.jpg')},
        {name: 'Rose', key: '12', image: require('./MyAssets/rose.webp')},
        {name: 'Tulips-Flower', key: '13', image: require('./MyAssets/tulips-flower.jpg')},
        {name: 'white-Flowers', key: '14', image: require('./MyAssets/white-flowers.jpg')},        
    ]);
    const pressHandler = (name) => {
        Alert.alert(name);
    };
    return (
        <SafeAreaView style={styles.container}>
         <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={flower}
            renderItem={({item}) => {
              return (
                <>
                <View style = {{flexDirection: 'row',}}>
                <TouchableOpacity onPress={ () => Alert.alert(item.name)}>
                 <Image source={item.image} style={styles.image} />  
                 </TouchableOpacity>               
                  <View style={{
                    flex: 1,
                  }}>
                  <TouchableOpacity onPress={ () => Alert.alert(item.name)}>
                  <Text style={styles.item}>{item.name}</Text>
                  </TouchableOpacity>                  
                  </View>
                  </View>
                </>
              );
            }}
          />
          </View>
        </SafeAreaView>
      );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#cdcdcd',
    },
    item: {
      padding: 20,
      marginVertical : 5,
      backgroundColor: 'skyblue',
      textAlign: 'center',
      marginHorizontal: 5,
    },
    image: {
        width: 58,
        height: 57,
        marginHorizontal:5,
        marginVertical : 5,
        resizeMode: 'cover',
    }
  });


  