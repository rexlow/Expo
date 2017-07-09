import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { MapView } from 'expo';
import { Button, Card, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Reactotron from 'reactotron-react-native';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {

  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => <Icon name="description" size={28} color={tintColor} />
  }

  renderCard = job => {
    const initialRegion = {
      latitude: job.latitude,
      longitude: job.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }
    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          >

          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
        </Text>
      </Card>
    )
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No more jobs">
        <Button 
          title="Back To Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp="jobkey"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10
  }
});

const mapStateToProps = ({ jobs }) => {
  return {
    jobs: jobs.results
  }
}

export default connect(mapStateToProps, actions)(DeckScreen);