import React from 'react';
import {View, Text, Button} from 'react-native';

class ReactNativeLifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('Render');
    return (
      <View>
        <Text>Life Cycle Methods</Text>
        <Button
          title="Upadate"
          onPress={() => {
            this.setState({data: 'update'});
          }}
        />
      </View>
    );
  }
}
export default ReactNativeLifeCycle;
