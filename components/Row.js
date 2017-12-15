import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fr'

moment.locale('fr')

export default class Row extends React.Component{

    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number
    }

    day(){
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return(
            <Text style={styles.day} >{ day.toUpperCase() }</Text>
        )
    }

    date(){
        let date = moment(this.props.day.dt * 1000).format('DD/MM')
        return(
            <Text style={styles.date} >{ date }</Text>
        )
    }

    icon(){
        const weather = this.props.day.weather[0].main.toLowerCase()
        let image
        switch (weather){
            case 'clouds':
                image = require ('./img/cloud.png')
                break;
            case 'rain':
                image = require ('./img/flood.png')
                break;
            default:
                image = require ('./img/sun.png')
                break;
        }
        
        return <Image source={image} style={styles.image}/>
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>{this.day()} {this.date()}</Text>
                {this.icon()}
                <Text style={styles.deg}>{this.props.day.temp.day} °C</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#00ADB5",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    deg: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 22
    },
    day: {
        color: '#ffffff',
        fontWeight: 'bold'

    },
    date:{
        color: '#ffffff'
    },
    image: {
        width: 50,
        height: 50
    }
})