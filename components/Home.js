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
    this.state = { town: 'Paris' };
  }


  setTown (town) {
    this.setState({town})
  }

  submit () {
    this.props.navigation.navigate('Res', {town: this.state.town})
  }

  render() {
    return (
        
        <View style={styles.container}>
        <Text style={styles.title}>Entrez le nom de votre ville :</Text>
      	<TextInput
          underlineColorAndroid='transparent'
	        style={styles.input}
          onChangeText={(town) => this.setTown({town})}
          onSubmitEditing={() => this.submit()}
	        value={this.state.town}
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

