import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import Res from './Res'

class Home extends Component {

  static navigationOptions = {
    title: 'Trouver une ville',
    headerStyle: {
      backgroundColor: "#393E46"
    },
    headerTitleStyle: {
      color: "#FFFFFF",
      fontStyle: 'normal',
      fontWeight: '100'
    },
    headerTruncatedBackTitle: {
      backgroundColor: "#FFFFFF"
    }
  }

	constructor(props) {
    super(props);
    this.state = { text: 'Paris' };
  }


  submit () {
    this.props.navigation.navigate('Res', {text: this.state.text})
  }

  render() {
    return (
        
        <View style={styles.container}>
        <Text style={styles.title}>Entrez le nom de votre ville :</Text>
      	<TextInput
          underlineColorAndroid='transparent'
	        style={styles.input}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => this.submit()}
	        value={this.state.text}
      	/>

        <Button color="#222831" onPress={() => this.submit()} title="Trouver la météo"/>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    backgroundColor: "#EEEEEE"
  },
  container: {
    marginTop: 200,
    margin: 20, 
    flex: 1,
    backgroundColor: "#EEEEEE"
  },
  input: {
    marginBottom: 50, marginTop: 50, padding: 10, height: 40,  borderColor: 'gray', borderWidth: 1,
    backgroundColor: "#EEEEEE"
  }
});

export default StackNavigator({
  Home: { screen: Home },
  Res: { screen: Res }
})