import React, {Component} from 'react'
import {View, Text, TextInput, Button, Image} from 'react-native'
import {styles} from './styles.js'

/*
    Component responsible for presentig current weather data.
    see ForecastWeatherDataView component.
*/
export class CurrentWeatherDataView extends Component {

    constructor(props) {
        super(props);
        this.state = {currentWeather: props.currentWeather};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentWeather != null) {
            this.setState(previousState => {
                return {currentWeather: nextProps.currentWeather};
            })
            console.log('CurrentWeatherDataView componentWillReceiveProps');
        }
    }

    render(){
        if (this.state.currentWeather != null) {
            if (this.state.currentWeather.error != null) {
                return(
                    <View style={styles.mainView}>
                        <Text style={styles.header}>Current weather:</Text>
                        <Text style={styles.error}>error: {this.state.currentWeather.error.message}</Text>
                    </View>
                );
            } else if (this.state.currentWeather.location != null && this.state.currentWeather.current != null) {
                return(
                    <View style={styles.mainView}>
                        <Text style={styles.header}>Current weather:</Text>
                        <Text style={styles.text}>location:  {this.props.currentWeather.location.name}</Text>
                        <Text style={styles.text}>country:  {this.props.currentWeather.location.country}</Text>
                        <Text style={styles.text}>temp_c:  {this.props.currentWeather.current.temp_c}</Text>
                        <Text style={styles.text}>condition:  {this.props.currentWeather.current.condition.text}</Text>
                        <Image source={{uri : 'https:'+this.props.currentWeather.current.condition.icon}}
                            style={{width: 100, height: 100}} />
                    </View>
                );
            }
        } else {
            return (
                <View style={styles.mainView}>
                    <Text style={styles.header}>Current weather:</Text>
                    <Text>no data</Text>
                </View>
            );
        }
    }
}
