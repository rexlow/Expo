import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Reactotron from 'reactotron-react-native';
import { Button } from 'react-native-elements';


export default class ReviewScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Review Jobs",
    headerRight: (
      <Button 
        title="Settings" 
        onPress={() => navigation.navigate('settings')}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    ),
    headerStyle: {
      marginTop: (Platform.OS === 'android' ? 24 : 0)
    }
  })

  render() {
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
