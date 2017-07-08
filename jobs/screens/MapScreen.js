import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { MapView } from 'expo';

import Reactotron from 'reactotron-react-native';

export default class MapScreen extends Component {

  state = {
    mapLoaded: false,
    region: {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09, 
      longitudeDelta: 0.04
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  onRegionChangeComplete = (region) => this.setState({ region })

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <MapView 
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
           />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
