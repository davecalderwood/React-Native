import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import ImageDetail from '../componentsList/ImageDetail';

export default function ImageScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Image</Text>
            <View style={styles.separator}/>
            <ImageDetail title="Forest" image={require('../assets/images/forest.jpg')} />
            <ImageDetail title="Beach" image={require('../assets/images/beach.jpg')} />
            <ImageDetail title="Mountain" image={require('../assets/images/mountain.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 15,
    //   justifyContent: 'center',
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