import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ImageDetail(props: any) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Image source={props.image} />
    </View>
  );
}

const styles = StyleSheet.create({
});
