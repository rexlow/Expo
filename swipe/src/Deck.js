// goal is to make sure card stays as close as to the user's finger
// onStartShouldSetPanResponder: gets called when user press on the screen
// onPanResponderMove: callback when user move around the screen, dragging

import React, { Component } from 'react';

import {
  Animated,
  PanResponder,
  View,
} from 'react-native';

export default class Deck extends Component {

  constructor(props) {
    super(props);

    const pos = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => pos.setValue({ x: gesture.dx, y: gesture.dy }),
      onPanResponderRelease: () => {}
    });
    
    this.state = { panResponder, pos }
  }

  renderCard = () => this.props.data.map(item => this.props.renderCard(item))

  render() {
    return (
      // passing callbacks to view component
      <Animated.View 
        style={this.state.pos.getLayout()}
        {...this.state.panResponder.panHandlers}>
        {this.renderCard()}
      </Animated.View>
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