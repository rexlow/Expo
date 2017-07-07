import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Reactotron from 'reactotron-react-native';
import { Button } from 'react-native-elements';


export default class ReviewScreen extends Component {

  // static navigationOptions = {
  //   title: "Review Jobs",
  //   header: ({ navigation }) => {
  //     return {
  //       headerRight: <Button title="Settings" onPress={() => navigation.navigate('settings')}/>
  //     };
  //   }
  // }

  static navigationOptions = ({ navigation }) => ({
    title: "Review Jobs",
    headerRight: <Button title="Settings" onPress={() => navigation.navigate('settings')} />
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
