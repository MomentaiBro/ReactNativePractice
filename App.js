import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

export default function App() {


  return (
    <View
      style={{
        backgroundColor: "rgb(100, 100, 100)",
        flex: 1
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex:3
        }}/>
      <View
        style={{
          backgroundColor: "gold",
          flex:1
        }}/>
      <View
        style={{
          backgroundColor: "tomato",
          flex:1
        }}/>
    </View>
  );
}