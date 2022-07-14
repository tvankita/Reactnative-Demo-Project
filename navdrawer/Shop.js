import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Shop = ({ navigation }) => {
    return (
     <SafeAreaView style={{ flex: 1 }}>
        <View style={style.container}>
          <Text style={style.txt}>
             Welcome in My page
          </Text>
          <Button onPress={ () => navigation.navigate('Contact') }
            title="Go to Contact Page"
          />
          <TouchableOpacity style={style.touch} onPress={ () => navigation.goBack() }>
            <Text>
            Go to Home Page
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1 ,
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
 export default Shop;