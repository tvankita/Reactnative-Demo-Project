import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';
import PropsUnderstanding from '../component/PropsUnderstanding';

export class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      myData: 'I am Techvoot member',
    };
  }
  render() {
    const data = 'Props in React Native';
    return (
      // use SafeAreaView for 
      <SafeAreaView style={{backgroundColor: 'green'}}>
        {/* use inlineStylesheet */}
        <Text style={{fontSize: 60, textAlign: 'center'}}> Hello World </Text>

        {/* use alert onclick event */}

        <Button
          onPress={() => alert('Hello World')}
          title="Click me"
          backgroundColor="red"
        />

        <View>
          <PropsUnderstanding data={data} />
        </View>

        {/* use state method for change data */}

        <Button
          title="You are Techvoot member?"
          onPress={() =>
            this.setState({myData: 'Yes, You are also Techvoot member'})
          }
        />
        <Text style={[styles.fonts, styles.colors]}>{this.state.myData}</Text>
      </SafeAreaView>
    );
  }
}

//  use StyleSheet Separetely
const styles = StyleSheet.create({
  colors: {
    colors: 'yellow',
    backgroundColor: 'cyan',
  },

  fonts: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
