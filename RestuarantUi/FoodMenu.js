import React, {useState} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View, ScrollView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FoodMenuDemo = () => {
const [data, setData] = useState([
  {
    name: 'Chef Vhoteldataincent',
    id: '1',
    image: require('../src/MyAssets/panjabidish.jpg'),
},  
{
  name: 'Pine Hill',
   id: '2',
  image: require('../src/MyAssets/GuestHouse.jpg'),
},
{
    name: 'Dhruv Place',
    id: '3',
    image: require('../src/MyAssets/island.jpg'),
},  
{
    name: 'Restuarant',
    id: '4',
    image: require('../src/MyAssets/panjabidish.jpg'),
}, 
]);
const [search, setSearch] = useState('');
const [hoteldata, setHoteldata] = useState(data);

  
  const searchFilterFunction = text => {
    const newData = data.filter(item => {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const txt = text.toUpperCase();
      return itemData.indexOf(txt) > -1;
    });
    // console.log(data);
    setHoteldata(newData);
    setSearch(text);
    // console.log(newData);
  };
    return (
        <View style={style.container}>
        <View  style={style.seachview}>
        <TextInput style={style.form} placeholder="Search"
          onChangeText={searchFilterFunction}
         />
         <TouchableOpacity style={style.filter}>
            <AntDesign style={style.filter} name="filter" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={style.filterText}> Filters </Text>
        <ScrollView horizontal = {true}> 
        { hoteldata.map((item) => {
          return (
            <TouchableOpacity style={style.touchbutton}>
              <Text style={style.itemtext}>{item.name}</Text>              
            </TouchableOpacity>
          )
        })}
        </ScrollView>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={hoteldata}
            keyExtractor = {(item, index) => index } 
            renderItem={({item, index, separators}) => {
              return (
                <View key={index} onPress={() => setIndexSelect(index)}>                   
                <View style={style.mainlist}>                
                    <View style={style.touch}>
                      <Image source={item.image} style={style.image} />                    
                       <Text style={style.item} 
                      //  onPress={this.getListViewItem.bind(this, item)}
                       >
                        {item.name} </Text>
                    </View>
                    <Text style={style.calendar}>Best Resturant of the city Lorem ipsum dolor site amet sci</Text>
                    <TouchableOpacity style={style.reservation}>
                        <Text style={style.write}>+ Add to my Schedule</Text>
                    </TouchableOpacity>
                </View>
                </View>
            );
            }}            
          />   
        </View>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'gray',        
        paddingHorizontal: 25, 
        
    },
    seachview: {
        flexDirection: 'row',        
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
      },
    search: {
        color: '#000',
      },
    form: {
        marginLeft: 15,
        fontSize: 15,
        color: '#44546a',
        fontWeight: '500',
        textAlignVertical: 'center',
        flex: 1,
      },
    filter: {
        color: '#000',
        marginRight: 20,
      },
    filterText: {
        fontWeight: '400',
        marginTop: 10,
        color: '#000',
        fontSize: 17,
      },
    touchbutton: {
        marginHorizontal: 4,
        marginTop: 10, 
      },
    itemtext: {
      fontSize: 14,
      // height: "35%",
      paddingHorizontal: 15,
      paddingVertical: 7,
      borderWidth: 1, 
      borderRadius: 20,
      },
    mainlist: {
        marginTop: 20,
        height: 340,
        width: 380,
        marginBottom: 20,        
        backgroundColor: '#fff',        
      }, 
    touch: {
        flex: 1,        
      },  
    image: {
        width: "95%",
        height: "90%",
        borderRadius: 15,        
      },
    item: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: '700',
        color: '#000',
      },
    calendar: {
        marginTop: 15,       
        marginRight: 19,    
      }, 
    reservation: {               
        marginRight: 19, 
        borderRadius: 10,
        padding: 12,
        marginTop: 15,
        backgroundColor: '#fdd83d',
      },
    write: {
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: '500',
      },
});

export default FoodMenuDemo;

