import React from 'react'
import { Text, ActivityIndicator, ListView } from 'react-native'
import axios from 'axios'
import Row from './Row'

export default class Res extends React.Component{
    
static navigationOptions({navigation}){
    return {
    title: 'Météo à ' + navigation.state.params.text,
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
}


constructor (props) {
    super(props)
    this.state = {
        town: this.props.navigation.state.params.text,
        apiRes: null
    }
    setTimeout(() => {
        this.getTemperature()
    }, 1000)
    
}

getTemperature () {
    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.town + '&mode=json&units=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf')
    .then((response) => this.setState({apiRes: response.data}))
}

render(){
    if (this.state.apiRes === null){
        return(
            <ActivityIndicator style={{flex: 1}}size="large" color="#00ADB5" />
        )
    }
    else{
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return(
            <ListView
                dataSource={ds.cloneWithRows(this.state.apiRes.list)}
                renderRow={(rowData, i, j) => <Row day={rowData} index={parseInt(j, 10)}/>}
            />
        )
    }
       
    }
}