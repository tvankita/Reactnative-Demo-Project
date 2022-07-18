import React, { Component } from "react";
import { View, Text, Flatlist, StyleSheet } from "react-native";

class ApiDemo extends React.Component {
    constructor () {
        super();
        this.state={
            data:[]
        };
    }
    constructorDidMount()
    {
      this.apicall();
    }
    async apicall()
    //    apicall=async()=>
    {
        let resp =await fetch('https://dummyjson.com/products')
        let respJson =await resp.json();
        // console.warn(respjson);
        this.setState ({data: respJson.products});
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.header}>API Call</Text>
                <Flatlist
                data={this.state.data}
                renderItem={({item})=>
                <Text style={style.list}>
                   {item.title}, {item.brand}
                </Text>}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#cdcdcd'
    },
    header: {
        margin: 40, 
        fontSize: 35, 
        textAlign: 'center'
    },
    list: {
        fontSize: 22,
        backgroundColor: 'yellow', 
        margin: 15},
  });

export default ApiDemo;