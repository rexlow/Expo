import _ from 'lodash';

import React, { Component } from 'react';
import { Text, View, AsyncStorage} from 'react-native';
import { AppLoading } from 'expo';

import Reactotron from 'reactotron-react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#0389F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
]

export default class WelcomeScreen extends Component {

  state = {
    token: null
  }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token')
    if (token) {
      this.props.navigation.navigate('map')
    } else {
      this.setState({ token: false })
    }
  }

  onSlideComplete = () => this.props.navigation.navigate('auth');

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }
    return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />
  }
}