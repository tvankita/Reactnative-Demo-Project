import React from 'react';
import {Text, View, SafeAreaView, Button, StyleSheet} from 'react-native';
import PropsUnderstanding from './component/PropsUnderstanding';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      myData: 'This is Classcomponent',
    };
  }
  render() {
    const data = 'Props in React Native';
    return (
      <SafeAreaView style={{backgroundColor: 'green'}}>
        <Text style={{fontSize: 60, textAlign: 'center'}}>
          {' '}
          Hello Techvoot{' '}
        </Text>

        <Button
          onPress={() => alert('Hello Techvoot')}
          title="Click me"
          backgroundColor="yellow"
        />

        <View>
          <PropsUnderstanding data={data} />
        </View>
        <Text style={[styles.fonts, styles.colors]}>{this.state.myData}</Text>

        <Button
          title="move from Classcomponent to Demo "
          onPress={() => this.setState({myData: 'This is changed state'})}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  colors: {
    colors: 'red',
    backgroundColor: 'cyan',
  },

  fonts: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ClassComponent;
