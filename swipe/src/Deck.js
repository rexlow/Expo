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
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

export default class Deck extends Component {

  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props);

    const pos = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => pos.setValue({ x: gesture.dx, y: gesture.dy }),
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition()
        }
      }
    });
    
    this.state = { panResponder, pos, index: 0 }
  }

  resetPosition = () => {
    Animated.spring(this.state.pos, {
      toValue: {
        x: 0,
        y: 0
      }
    }).start();
  }

  forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.pos, {
      toValue: { x, y: 0 },
      duration: 250
    }).start(() => this.onSwipeComplete(direction))
  }

  onSwipeComplete = (direction) => {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index]

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.pos.setValue({ x: 0, y: 0 }); // reset PanResponder value
    this.setState({ index: this.state.index + 1 });
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

    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((item, index) => {
      if (index < this.state.index) { return null ; }
      if (index === this.state.index) { // only animate first card
        return (
          <Animated.View
            key={item.id}
            style={[this.getCardStyle(), styles.cardStyle]}
            {...this.state.panResponder.panHandlers}>
            {this.props.renderCard(item)}
          </Animated.View>
        )
      }

      return (
        <Animated.View key={item.id} style={styles.cardStyle}>
          {this.props.renderCard(item)}
        </Animated.View>
      )
    }).reverse();
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
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
}