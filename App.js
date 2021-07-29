import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, SafeAreaView, Alert, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  const {landscape} = useDeviceOrientation();

  const image = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 128,
    height: 128,
  }

  return (
    <SafeAreaView style={{backgroundColor: "yellow"}}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? '100%' : '30%'
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
