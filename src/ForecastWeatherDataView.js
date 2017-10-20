import React, {Component} from 'react'
import {View, Text, TextInput, Button, Image, FlatList} from 'react-native'
import {styles} from './styles.js'

/*
    Component responsible for presentig forecast weather data.
*/
export class ForecastWeatherDataView extends Component {

    constructor(props) {
        super(props);
        this.state = {forecastWeather: props.forecastWeather, tabs: '     '};
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
                    <View style={styles.mainView}>
                        <Text style={styles.header}>Current weather:</Text>
                        <Text style={styles.error}>error: {this.state.forecastWeather.error.message}</Text>
                    </View>
                );
            } else if (this.state.forecastWeather.forecast != null) {
                return(
                    <View style={styles.mainView}>
                        <Text style={styles.header}>Forecast weather:</Text>
                        <Text style={styles.text}>date: {this.state.forecastWeather.forecast.forecastday[0].date}</Text>
                        <Text style={styles.text}>maxtemp_c: {this.state.forecastWeather.forecast.forecastday[0].day.maxtemp_c}</Text>
                        <Text style={styles.text}>mintemp_c: {this.state.forecastWeather.forecast.forecastday[0].day.mintemp_c}</Text>
                        <Text style={styles.text}>avgtemp_c: {this.state.forecastWeather.forecast.forecastday[0].day.avgtemp_c}</Text>
                        <Text style={styles.text}>condition: {this.state.forecastWeather.forecast.forecastday[0].day.condition.text}</Text>
                        <Image source={{uri : 'https:'+this.state.forecastWeather.forecast.forecastday[0].day.condition.icon}}
                            style={{width: 100, height: 100}} />
                        <Text style={styles.header}>Astral info:</Text>
                        <Text style={styles.text}>sunrise: {this.state.forecastWeather.forecast.forecastday[0].astro.sunrise}</Text>
                        <Text style={styles.text}>sunset: {this.state.forecastWeather.forecast.forecastday[0].astro.sunset}</Text>
                        <Text style={styles.text}>moonrise: {this.state.forecastWeather.forecast.forecastday[0].astro.moonrise}</Text>
                        <Text style={styles.text}>moonset: {this.state.forecastWeather.forecast.forecastday[0].astro.moonset}</Text>
                        <Text style={styles.header}>Hours weather</Text>
                        <FlatList data={this.getForecastHoursData()}
                            renderItem={({item}) =>
                                <Text style={styles.flatViewRow}>{item.key}</Text>
                            }/>
                    </View>
                );
            }
        } else {
            return (
                <View style={styles.mainView}>
                    <Text style={styles.header}>Forecast weather:</Text>
                    <Text>no data</Text>
                </View>
            );
        }
    }

    getForecastHoursData() {
        var hoursData = [];
        if (this.state.forecastWeather.forecast != null) {
            var hours = this.state.forecastWeather.forecast.forecastday[0].hour;
            if (hours != null) {
                var tabs = this.state.tabs;
                hoursData.push({key: 'time'+tabs+'temp_c'+tabs+'condition'})
                for (i=0; i<hours.length; i++) {
                    var time = hours[i].time.split(' ');
                    //hoursData.push({key: 'time: ' + time[1] + ', temp_c: ' + hours[i].temp_c + ', condition: ' + hours[i].condition.text});
                    hoursData.push({key: time[1] + tabs + hours[i].temp_c + tabs + hours[i].condition.text});
                }
            }
        }
        console.log(hoursData);
        return hoursData;
    }
}
