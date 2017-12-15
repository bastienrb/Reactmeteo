import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import  { TabNavigator } from 'react-navigation'
import Credits from './components/Credits'
import Home from './components/Home'
import Res from './components/Res'

const Nav = TabNavigator({
  Home: { screen: Home },
  Credits: { screen: Credits }
}, 
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: "#00ADB5"
    },
    style: {
      backgroundColor: "#393E46"
    }
  }
})


export default class App extends React.Component {


  render() {
    return (
      
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
