import React, { Component } from "react";
import { 
  View, 
  Text,
  Dimensions,
  ScrollView 
} from "react-native";

import { Button } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {

  renderLastSlide = (index) => {
    if (index === this.props.data.length - 1) {
      return (
        <Button 
          title="Onwards!" 
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete} />
      )
    }
  }

  renderSlide = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.color}]}>
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
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
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
}