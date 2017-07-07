import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Reactotron from 'reactotron-react-native';

export default class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Map Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
