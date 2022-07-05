import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Button, SafeAreaView} from 'react-native';

const HooksDemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('initial data');

  useEffect(() => {
    console.warn('test use effect', count);
    if (count == 5) {
      setData('update data');
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.fonts}>{count}</Text>
        <Text style={styles.fonts}>{data}</Text>

        <Button
          title="Updata Me"
          onPress={() => {
            setCount(count + 1);
          }}></Button>
      </View>
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
  fonts: {
    textAlign: 'center',
    fontSize: 35,
    backgroundColor: 'white',
  },
});

export default HooksDemo;
