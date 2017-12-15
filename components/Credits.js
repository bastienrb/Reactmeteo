import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { StackNavigator } from 'react-navigation'

export default class Credits extends Component {

  static navigationOptions = {
    title: 'Crédits',
   
  }

  
  render() {
    return (
   		<View style={styles.view}>
   			<Text style={styles.text}>Application développée par Bastien Robert dans le cadre du cours de React Native à l'IIM</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#393E46",
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 26,
    color: '#ffffff'

  }
});

