import React from 'react';
import {Text, View} from 'react-native';

const PropsUnderstanding = props => {
  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>{props.data}</Text>
    </View>
  );
};

export default PropsUnderstanding;
