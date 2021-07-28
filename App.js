import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {

  const image = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 128,
    height: 128,
  }

  return (
    <SafeAreaView style={{backgroundColor: "orange"}}>
      <Button
        color="orange"
        title="Click Me, Senpai" 
        onPress={
          () => Alert.prompt("My Title", "My Message", text => console.log(text))
        }
      />
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
