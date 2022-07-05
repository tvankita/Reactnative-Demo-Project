import React, {useReducer} from "react";
import { Text, View, Button, StyleSheet, SafeAreaView } from "react-native";

const initialState = 0;
const reducer = (state, action) => {
    console.log("state",state)
    switch(action) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;    
    }
};

function UseReducerDemo () {
    const [count, dispatch] = useReducer (reducer, initialState);

return (
    <SafeAreaView style={styles.container}>
    <View>
    <>
    <Text style={styles.fonts}>Count - {count}</Text>
        <Button title="Increment" onPress={() => dispatch('increment')}></Button>
        <Button title="Decrement" onPress={() => dispatch('decrement')}></Button>     
        <Button title="Reset" onPress={() => dispatch('reset')}></Button>
    </>
    </View>
    </SafeAreaView>
)
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D4A436',
      alignContent: 'center',
      justifyContent: 'center',
      paddingHorizontal: 90,
    },
    fonts: {
        textAlign: 'center',
        fontSize: 35,
        backgroundColor: 'white',
      },
    button: {
    },
});

export default UseReducerDemo;