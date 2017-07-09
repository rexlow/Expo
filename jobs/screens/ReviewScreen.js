import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Reactotron from 'reactotron-react-native';
import { Button, Card } from 'react-native-elements';

class ReviewScreen extends Component {

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

  renderLikeJobs = () => {
    return this.props.likedJobs.map(job => {
      return (
        <Card>
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text style={styles.italic}>{job.company}</Text>
              <Text style={styles.italic}>{job.formattedRelativeTime}</Text>
            </View>
          </View>
        </Card>
      )
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikeJobs()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italic: {
    fontStyle: 'italic'
  }
});

const mapStateToProps = state => {
  return {
    likedJobs: state.likedJobs
  }
}

export default connect(mapStateToProps, actions)(ReviewScreen);