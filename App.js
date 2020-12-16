import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { API, Amplify } from 'aws-amplify'
import config from './src/aws-exports'

Amplify.configure(config)

class MessageResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getCalled: false,
      callSucceeded: false
    }
  }

  makeGetCall() {
    console.log("pressed");
    this.setState({
      getCalled: true
    });
    API.get('user', '/user')
    .then(response => {
      console.log("Got response");
      console.log(response);
      this.setState({
        callSucceeded: true
      });
    }).catch(error => {
      console.log("Got error");
      console.log(error);
      this.setState({
        callSucceeded: false
      });
    })
  }

  getDisplayText() {
    if (this.state.getCalled === false) {
      return "Please click the Button";
    } else {
      if (this.state.callSucceeded === true) return "Call Succeeded";
      else return "Call Failed";
    }
  }

  render() {
    return (
      <>
        <Button title='Press me' onPress={() => this.makeGetCall()} />
        <Text>{this.getDisplayText()}</Text>
      </>
    );
  }
}

export default function App() {
  const abc = "hello bb"
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!?</Text>
      <StatusBar style="auto" />
      <MessageResult/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});