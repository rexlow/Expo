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

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps)
  }

  onAuthComplete = (props) => {
    Reactotron.log(props)
    if (props.auth.token) {
      this.props.navigation.navigate('map')
    }
  }

  render() {
    Reactotron.log(this.props.auth)
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(AuthScreen);