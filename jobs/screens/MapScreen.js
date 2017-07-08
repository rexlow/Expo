import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MapView } from 'expo';

import Reactotron from 'reactotron-react-native';

export default class MapScreen extends Component {

  state = {
    region: {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09, 
      longitudeDelta: 0.04
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={{ flex: 1 }}
          region={this.state.region} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
