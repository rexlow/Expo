import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Reactotron from 'reactotron-react-native';
import './ReactotronConfig'

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const MainNavigator = TabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: TabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: StackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen }
        })
      }
    })
  }
});

export default class App extends React.Component {
  render() {
    return <MainNavigator />
  }
}