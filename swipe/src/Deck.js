import React, { Component } from 'react';

import {
  Animated,
  PanResponder,
  View,
} from 'react-native';

export default class Deck extends Component {

  constructor(props) {
    super(props);

    // its a self-contained object
    const panResponder = PanResponder.create({

      
      onStartShouldSetPanResponder: () => true, // gets called when user press on the screen
      onPanResponderMove: (event, gesture) => { // callback when user move around the screen, dragging
        
      },
      onPanResponderRelease: () => {}
    });
    
    // this.panResponder = panResponder;

    this.state = { panResponder }
  }

  renderCard = () => this.props.data.map(item => this.props.renderCard(item))

  render() {
    return (
      // passing callbacks to view component
      <View {...this.state.panResponder.panHandlers}>
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