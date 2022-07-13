import React from 'react';
import {View, Text, StyleSheet, BUtton, TouchableOpacity, Button} from 'react-native';
import { Navigation} from '@react-navigation/native';

const AboutPage = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>"Hello Guys"</Text>
            <Button style={style.buttonpress} title='Go To Shop Page'
                onPress={() => navigation.navigate('ShopPage')}
            />
            <Button style={style.buttonpress} title='Go To Contact Page'
                onPress={() => navigation.replace('ContactPage')}
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

export default AboutPage;

