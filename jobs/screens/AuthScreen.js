import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Reactotron from 'reactotron-react-native';

class AuthScreen extends Component {

  componentDidMount() {
    this.props.facebookLogin();
    // AsyncStorage.removeItem('fb_token')
  }

  render() {
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

// const mapStateToProps = state => {
//   return {
//     auth: state.auth
//   }
// }

export default connect(null, actions)(AuthScreen);