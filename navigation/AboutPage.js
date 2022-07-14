import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AboutPage = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>"Hello Guys"</Text>
            <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
            <Button style={style.buttonpress} title='Replace With Shop Page'
                onPress={() => navigation.replace('ShopPage')}
            />
            <Button style={style.buttonpress} title='Go To Contact Page'
                onPress={() => navigation.navigate('ContactPage')}
            />
            <Button title="Go to Home Page"
                onPress={() => navigation.navigate('HomePage')}
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
        marginBottom: 5,
    },
});

export default AboutPage;

