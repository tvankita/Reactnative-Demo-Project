import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

const BackgroundImageDemo = () => {
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.image}>
    source={require('./island.jpg')}  
    </ImageBackground>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
  