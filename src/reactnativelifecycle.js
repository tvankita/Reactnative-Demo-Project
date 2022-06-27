import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

export class ReactNativeLifeCycle extends Component {
  constructor () {
    super();
    this.state = {
      value: '10'
    };
    console.log("constructor");  // for initialization
  }

  componentDidMount() {
    console.log('componenrDidMount');  // for API or set data from server
  }
  componentDidCatch() {
    console.log('componentDidCatch');   // for error 
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');   // after finish rendering 
  }
  componentDidUnMount() {
    console.log('componentDidUnMount');   // for close or back step
  }
  render() {
    console.log('render');   // for view of HTML
    return (
      <View>
        <Text>    10</Text>
        <Button 
          title='Click Me'
          onPress={() => {
            this.setState({value: '11'})
          }}    
        />
      </View>
    );
  }
}
        
// export default ReactNativeLifeCycle;
