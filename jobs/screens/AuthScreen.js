import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Reactotron from 'reactotron-react-native';

export default class AuthScreen extends Component {
  render() {
    Reactotron.log('auth')
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
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
