import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
     <SafeAreaView style={{ flex: 1 }}>
        <View style={style.container}>
          <Text style={style.txt}>
             Welcome in My page
          </Text>
          <TouchableOpacity style={style.touch} onPress={ () => navigation.openDrawer() }>
            <Text>
            Open Drawer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.touch} onPress={ () => navigation.toggleDrawer() }>
            <Text>
            Toggle Drawer
            </Text>
          </TouchableOpacity>
          <Button onPress={ () => navigation.navigate('About')  }
            title="Go to About Page"
          />
        </View>
    </SafeAreaView>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touch : {
        padding: 10,
        marginBottom: 3,
        backgroundColor: '#cdcdcd',
      },
    txt : {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16
    },
});
 export default Home;