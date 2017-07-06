import React from "react";
import { StyleSheet, Text, View } from "react-native";

import firebase from 'firebase';

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCyE1eSyNk0C_CT91w7LYodCstx_AwV7fI",
      authDomain: "fir-otp-48da3.firebaseapp.com",
      databaseURL: "https://fir-otp-48da3.firebaseio.com",
      projectId: "fir-otp-48da3",
      storageBucket: "fir-otp-48da3.appspot.com",
      messagingSenderId: "550395243242"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
