import React, { useReducer, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Button 
        title="Increase" 
        onPress={() => {
          setCounter(counter + 1);
        }} 
      />

      <Button 
        title="Increase" 
        onPress={() => {
          setCounter(counter - 1);
        }} 
      />

      <Text>Current Count: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
