import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const SideBarDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <ImageBackground
            style={style.imageback}
            source={require('../src/MyAssets/white.webp')}>
            <View style={style.inner}>
              <Image
                style={style.image}
                source={require('../src/MyAssets/ankita.jpg')}
              />
            </View>
            <Text style={style.txt}>Anikta Patel</Text>
          </ImageBackground>
        </View>
        <View style={style.container}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={style.bottom}>
        <Text>Coustom Text</Text>
      </View>
    </View>
  );
};
// const SideBarDrawer = (props) => {
//     const toggleDrawer = () => {
//         props.navigationProps.toggleDrawer();
//     };
//     return (
//         <View style={style.container}>
//         <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//   {/* screens */}
// </Drawer.Navigator>
//         <TouchableOpacity>
//         <Image style={style.image}
//               source={require('../src/MyAssets/ankita.jpg')}
//             />
//         </TouchableOpacity>
//         </View>
//     );
// }

const style = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
  },
  imageback: {
    height: '100%',
  },
  inner: {
    overflow: 'hidden',
    height: 60,
    width: 60,
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },  
  txt: {
    marginLeft: 10,
    color: '#000',
    fontSize: 20,
  },
  bottom: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
});
export default SideBarDrawer;
