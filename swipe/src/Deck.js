import React, { Component } from 'react';

import {
  Animated,
  View,
} from 'react-native';

export default class Deck extends Component {

  renderCard = () => this.props.data.map(item => this.props.renderCard(item))

  render() {
    return (
      <View>
        {this.renderCard()}
      </View>
    )
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
}