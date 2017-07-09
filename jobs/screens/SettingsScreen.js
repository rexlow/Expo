import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

import Reactotron from 'reactotron-react-native';
import { Button } from 'react-native-elements';

class SettingsScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      marginTop: Platform.OS === "android" ? 24 : 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Reset Liked Jobs" 
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobs}
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

export default connect(null, { clearLikedJobs })(SettingsScreen);