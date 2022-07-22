import React, {useState} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FoodMenuDemo = () => {
  const [data, setData] = useState([
    {
      name: 'Chef Vincent',
      id: '1',
      image: require('../src/MyAssets/panjabidish.jpg'),
    },
    {
      name: 'Pine Hill',
      id: '2',
      image: require('../src/MyAssets/GuestHouse.jpg'),   
      isCheck: false, catName: 'Chef Vincent'  
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
    {
      name: 'Lapinoz',
      id: '5',
      image: require('../src/MyAssets/island.jpg'),
    },
    {
      name: 'Dominoz',
      id: '6',
      image: require('../src/MyAssets/panjabidish.jpg'),
    },
  ]);
  data: [
    {isCheck: false, catName: 'Chef Vincent'},
    {isCheck: false, catName: 'Pine Hill'},
    {isCheck: false, catName: 'Dhruv Place'},
    {isCheck: false, catName: 'Octant Pizza'},
    {isCheck: false, catName: 'Lapinozz'},
    {isCheck: false, catName: 'Dominoz'},
  ];
  // const checkdata = ( name, image) => {
  //     sessionStorage.setItem('selectname', name);
  //     sessionStorage.setItem('selectimage', image);
  //     this.setState({issetData: true})
  // }
  const handlehoteldataCategory = (item, index) => {
    let dataArray = [...categories];
    tempArray[index].isCheck = !dataArray[index].isCheck;
    setCategories(dataArray);
  };
  // this.state.data[index].isCheck = !this.state.data[index].isCheck
  // this.setState({data: this.state.data});
  // console.log("setState");

  const [search, setSearch] = useState('');
  const [hoteldata, setHoteldata] = useState(data);
  const [selecetdeIndex, setselectedIndex] = useState(null);

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
  // console.log('hoteldata', hoteldata);
  return (
    <View style={style.container}>
      <View style={style.seachview}>
        <View style={style.mainsearch}>
          <TextInput
            style={style.form}
            placeholder="Search"
            onChangeText={searchFilterFunction}
          />
          <TouchableOpacity>
            <AntDesign style={style.filter} name="filter" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={style.filterText}> Filters </Text>
      </View>
      <View style={style.verttext}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {hoteldata.map((data, index) => {
            return (
              <TouchableOpacity
                style={[
                  style.touch,
                  {backgroundColor: index === selecetdeIndex ? '#1E1E1E' : '#fff'},
                ]}
                onPress={() => setselectedIndex(index)}
                //  handleCategory={(item, index)=> setselectedIndex(index)};
              >
                <Text
                  style={index === selecetdeIndex ? style.itemtexttwo : style.itemtext
                  }>
                  {data.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <FlatList
        data={hoteldata}
        contentContainerStyle={{paddingHorizontal: 25}}
        keyExtractor={(item, index) => index}
        renderItem={({item, index, separators}) => {
          return (
            <View
              style={style.cardview}
              key={index}
              onPress={() => setIndexSelect(index)}>
              <Image source={item.image} style={style.image} />
              <Text style={style.item}>{item.name} </Text>
              <Text style={style.disp}>
                Best Resturant of the city Lorem ipsum dolor site amet sci
              </Text>
              <TouchableOpacity style={style.reservation}>
                <Text style={style.write}>+ Add to my Schedule</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  seachview: {
    paddingHorizontal: 25,
  },
  mainsearch: {
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  form: {
    fontSize: 15,
    color: '#44546a',
    fontWeight: '500',
    textAlignVertical: 'center',
    flex: 1,
  },
  filter: {
    color: '#000',
  },
  filterText: {
    fontWeight: '400',
    marginVertical: 10,
    color: '#000',
    fontSize: 15,
  },
  verttext: {
    marginBottom: 15,
  },
  touch: {
    marginHorizontal: 4,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  itemtext: {
    fontSize: 17,
    color: '#1E1E1E',
  },
  itemtexttwo: {
    fontSize: 17,
    color: '#fff',
  },
  cardview: {
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
  },
  item: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '700',
    color: '#000',
  },
  disp: {
    marginTop: 5,
  },
  write: {
    backgroundColor: '#fdd83d',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default FoodMenuDemo;
