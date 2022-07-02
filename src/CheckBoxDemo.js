import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const CheckBoxDemo = () => {
  var [checked, setChecked] = useState(false);
  var [checked2, setChecked2] = useState(false);

  const handlePress = types => {
    if (types == 0) {
      checked2 = false;
      setChecked2(checked2);
      setChecked(!checked);
    } else {
      checked = false;
      setChecked(checked);
      setChecked2(!checked2);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.fonts}> Your age is Above 18? </Text>
      <TouchableOpacity onPress={() => handlePress(0)}>
        <View>
          {checked ? (
            <Image
              source={require('./MyAssets/check.png')}
              style={styles.image}
            />
          ) : null}
          <Text style={styles.font}>Yes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress(1)}>
        <View>
          {checked2 ? (
            <Image
              source={require('./MyAssets/check.png')}
              style={styles.image}
            />
          ) : null}
          <Text style={styles.fontno}>No</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4A436',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 90,
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 50,
  },
  fonts: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  font: {
    marginRight: 40,
    padding: 20,
    textAlign: 'center',
    paddingBottom: 40,
    fontSize: 17,
    marginTop: -45,
  },
  fontno: {
    marginRight: 40,
    padding: 20,
    textAlign: 'center',
    fontSize: 17,
    marginTop: -45,
  },
});

export default CheckBoxDemo;
