import React from 'react';
import {View, Text, StyleSheet, BUtton, TouchableOpacity, Button} from 'react-native';
import { Navigation} from '@react-navigation/native';

const HomePage = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>"Hello Techvoot"</Text>
            <Button style={style.buttonpress} title='Go To About Page'
                onPress={() => navigation.navigate('AboutPage')}
            />
            <Button style={style.buttonpress} title='Go To Shop Page'
                onPress={() => navigation.replace('ShopPage')}
            />
        </View>
    )
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
    buttonpress: {
        marginBottom: 5,
    },
});

export default HomePage;

