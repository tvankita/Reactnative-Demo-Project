import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomePage = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>"Hello Techvoot"</Text>
            <Button style={style.buttonpress} title='Go To Food Page'
                onPress={() => navigation.navigate('FoodMenuDemo')}
            />
        </View>
    );
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
        paddingBottom: 20,
    },
});

export default HomePage;

