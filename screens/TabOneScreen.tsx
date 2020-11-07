import React, { useState } from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button 
        title="Add Color" 
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }} 
      />
      

      <FlatList 
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item}) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item}} />
        }}
      />
    </View>
  );
}

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
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
