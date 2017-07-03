// goal is to make sure card stays as close as to the user's finger
// onStartShouldSetPanResponder: gets called when user press on the screen
// onPanResponderMove: callback when user move around the screen, dragging

import React, { Component } from 'react';

import {
  Animated,
  Dimensions,
  PanResponder,
  View,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Deck extends Component {

  constructor(props) {
    super(props);

    const pos = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => pos.setValue({ x: gesture.dx, y: gesture.dy }),
      onPanResponderRelease: () => this.resetPosition()
    });
    
    this.state = { panResponder, pos }
  }

  resetPosition = () => {
    Animated.spring(this.state.pos, {
      toValue: {
        x: 0,
        y: 0
      }
    }).start()
  }

  getCardStyle = () => {
    const { pos } = this.state;
    const rotate = pos.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    })
    return {
      ...pos.getLayout(), //returns an object
      transform: [{ rotate }]
    }
  }

  renderCard = () => {
    return this.props.data.map((item, index) => {
      if (index === 0) { // only animate first card
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}>
            {this.props.renderCard(item)}
          </Animated.View>
        )
      }

      return this.props.renderCard(item)
    })
  }

  render() {
    return (
      // passing callbacks to view component
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