import React, { Component } from "react";
import { 
  View, 
  Text,
  Dimensions,
  ScrollView 
} from "react-native";

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {

  renderSlide = () => {
    return this.props.data.map(slide => {
      return (
        <View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.color}]}>
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
      )
    });
  };

  render() {
    return (
      <ScrollView 
        horizontal 
        pagingEnabled
        style={styles.scrollViewStyle}>
        {this.renderSlide()}
      </ScrollView>
    );
  }
}

const styles = {
  scrollViewStyle: {
    flex: 1
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white'
  }
}