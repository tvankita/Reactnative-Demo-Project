import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

class FetchApi extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }
  componentDidMount() {
    this.callApi();
  }
  async callApi() {
    let resp = await fetch('https://dummyjson.com/products');
    let respJson = await resp.json();
    this.setState({data: respJson.products});
  }
  render() {
    //console.warn('render', this.state.data);
    return (
      <View style={style.container}>
        <Text style={style.header}>API CALL</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <Text style={style.list}>
              {item.id} . {item.title}, {item.brand}
            </Text>
          )}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
    container: {  
        backgroundColor: '#cdcdcd',
    },
    header: {
        fontSize: 25, 
        textAlign: 'center',
        color: '#207ADA',
    },
    list: {
        fontSize: 17, 
        backgroundColor: '#E6E8AB', 
        color: '#000',
        margin: 12},
  });
export default FetchApi;