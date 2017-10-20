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
                    <View>
                        <Text>Current weather:</Text>
                        <Text>error: {this.state.currentWeather.error.message}</Text>
                    </View>
                );
            } else if (this.state.currentWeather.location != null && this.state.currentWeather.current != null) {
                return(
                    <View>
                        <Text>Current weather:</Text>
                        <Text>location.name: {this.props.currentWeather.location.name}</Text>
                        <Text>location.country: {this.props.currentWeather.location.country}</Text>
                        <Text>current.temp_c: {this.props.currentWeather.current.temp_c}</Text>
                        <Text>current.condition.text: {this.props.currentWeather.current.condition.text}</Text>
                        <Image source={{uri : 'https:'+this.props.currentWeather.current.condition.icon}}
                            style={{width: 100, height: 100}} />
                    </View>
                );
            }
        } else {
            return (
                <View>
                    <Text>Current weather:</Text>
                    <Text>no data</Text>
                </View>
            );
        }
    }
}
