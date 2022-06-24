import React from 'react';
import {Text, View} from 'react-native';

export const ViewBoxesWithColorAndText = () => (
  <View
    style={{
      flexDirection: 'column',
      height: 200,
      padding: 20,
    }}>
    <View style={{backgroundColor: 'green', flex: 0.3}} />
    <View style={{backgroundColor: 'yellow', flex: 0.3}} />
  </View>
);
