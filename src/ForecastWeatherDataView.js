import React, {Component} from 'react'
import {View, Text, TextInput, Button, Image} from 'react-native'
import {styles} from './styles.js'

/*
    Component responsible for presentig forecast weather data.
*/
export class ForecastWeatherDataView extends Component {

    constructor(props) {
        super(props);
        this.state = {forecastWeather: props.forecastWeather};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.forecastWeather != null) {
            this.setState(previousState => {
                return {forecastWeather: nextProps.forecastWeather};
            })
            console.log('ForecastWeatherDataView componentWillReceiveProps');
        }
    }

    /*
        This Method returns diffrent views based on state.
        Each time when diffrent condition is fullfilled, new Components are returned.
        In case of  each time  render() methods return diffrent Components,
        component life cycle looks like this:
            constructor() // inveked when new component is being created.
            componentWillMount() // invoked immediately before mounting occurs.
            render()
            componentDidMount() // invoked immediately after a component is mounted.
            componentWillUnmount() // invoked immediately before a component is unmounted and destroyed
        There is no componentWillReceiveProps()  method invocation, because allmost each time we create new object,
        so the old ones are unnecesery and they are destroyed.

    */
    render(){
        if (this.state.forecastWeather != null) {
            if (this.state.forecastWeather.error != null) {
                return(
                    <View>
                        <Text>Current weather:</Text>
                        <Text>error: {this.state.forecastWeather.error.message}</Text>
                    </View>
                );
            } else if (this.state.forecastWeather.forecast != null) {
                return(
                    <View>
                        <Text>Forecast weather:</Text>
                        <Text>forecast.forecastday[0].date: {this.state.forecastWeather.forecast.forecastday[0].date}</Text>
                        <Text>forecast.forecastday[0].day.maxtemp_c: {this.state.forecastWeather.forecast.forecastday[0].day.maxtemp_c}</Text>
                        <Text>forecast.forecastday[0].day.mintemp_c: {this.state.forecastWeather.forecast.forecastday[0].day.mintemp_c}</Text>
                        <Text>forecast.forecastday[0].day.avgtemp_c: {this.state.forecastWeather.forecast.forecastday[0].day.avgtemp_c}</Text>
                        <Text>forecast.forecastday[0].day.condition.text: {this.state.forecastWeather.forecast.forecastday[0].day.condition.text}</Text>
                        <Image source={{uri : 'https:'+this.state.forecastWeather.forecast.forecastday[0].day.condition.icon}}
                            style={{width: 100, height: 100}} />
                        <Text>forecast.forecastday[0].astro.sunrise: {this.state.forecastWeather.forecast.forecastday[0].astro.sunrise}</Text>
                        <Text>forecast.forecastday[0].astro.sunset: {this.state.forecastWeather.forecast.forecastday[0].astro.sunset}</Text>
                        <Text>forecast.forecastday[0].astro.moonrise: {this.state.forecastWeather.forecast.forecastday[0].astro.moonrise}</Text>
                        <Text>forecast.forecastday[0].astro.moonset: {this.state.forecastWeather.forecast.forecastday[0].astro.moonset}</Text>
                        <Text>Dorobić pogodę na poszczególne godziny</Text>
                    </View>
                );
            }
        } else {
            return (
                <View>
                    <Text>Forecast weather:</Text>
                    <Text>no data</Text>
                </View>
            );
        }
    }
}
