import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Linking
} from "react-native";

import { connect } from "react-redux";
import * as actions from "../actions";

import Reactotron from "reactotron-react-native";
import { Button, Card } from "react-native-elements";
import { MapView } from "expo";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Review Jobs",
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate("settings")}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    ),
    headerStyle: {
      marginTop: Platform.OS === "android" ? 24 : 0
    }
  });

  renderLikeJobs = () =>
    this.props.likedJobs.map(job => {
      const {
        company,
        formattedRelativeTime,
        url,
        latitude,
        longitude,
        jobtitle,
        jobkey
      } = job;
      const initialRegion = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };
      return (
        <Card key={jobkey} title={jobtitle}>
          <View style={{ height: 200 }}>
            <MapView
              scrollEnabled={false}
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === "android"}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italic}>
                {company}
              </Text>
              <Text style={styles.italic}>
                {formattedRelativeTime}
              </Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });

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
    flex: 1
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  italic: {
    fontStyle: "italic"
  }
});

const mapStateToProps = state => {
  return {
    likedJobs: state.likedJobs
  };
};

export default connect(mapStateToProps, actions)(ReviewScreen);
