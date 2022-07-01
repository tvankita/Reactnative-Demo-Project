import React, { useState, useEffect } from "react";
import { Text, 
         View, 
         TouchableOpacity, 
         Image, 
         SafeAreaView, 
         StyleSheet } from "react-native";

const CheckBoxDemo = () => {
    var [checked, setChecked] = useState(false);
    var [checked2, setChecked2] = useState(false);
    
    const handlePress = (types) => {
        if(types == 0){
            checked2=false;
            setChecked2(checked2);
            setChecked(!checked);
        }else{
            checked=false;
            setChecked(checked);
            setChecked2(!checked2);
        }
    
    }
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.fonts}> Your age is Above 18? </Text>
        <TouchableOpacity onPress={() => handlePress (0)}> 
        <View>
        {checked ? (
          <Image
            source={require('./MyAssets/check.png')}
            style={styles.image}
          />
        ) : (
          <Image
            source={require('./MyAssets/uncheck.png')}
            style={styles.image}
          />
        )}
        <Text style={styles.font}>Yes</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handlePress (1)}> 
        <View>
        {checked2 ? (
          <Image
            source={require('./MyAssets/check.png')}
            style={styles.image}
          />
        ) : (
          <Image
            source={require('./MyAssets/uncheck.png')}
            style={styles.image}
          />
        )}
        <Text style={styles.font}>No</Text>
        </View>
        </TouchableOpacity>
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D4A436',
      alignContent: 'center',
      justifyContent: 'center',
      paddingHorizontal: 90, 
    },
    image: {
        // flex: 1,
        flexDirection: 'row',
        resizeMode: 'cover',
        width: 20,
        height: 20,
        marginTop:20,
        marginBottom : 5,
        marginLeft: 50,
    },
    fonts: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
      },
      font: {
        marginRight: 40,
        textAlign: 'center',
        fontSize: 17,
        marginTop: -27,
      },
});

export default CheckBoxDemo;