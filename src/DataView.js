import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {styles} from './styles.js'
import {CurrentWeatherDataView} from './CurrentWeatherDataView.js'
import {ForecastWeatherDataView} from './ForecastWeatherDataView.js'

/*
    Component responsible for presenting data reveived from weatherService.
*/
export class DataView extends Component {

    constructor(props){
        super(props);
        this.state = {weatherService: props.weatherService, currentWeather: null, forecastWeather: null};
        this.state.weatherService.addObserver(this);
    }

    render() {
        return (
            <View>
                <CurrentWeatherDataView currentWeather={this.state.currentWeather} />
                <ForecastWeatherDataView forecastWeather={this.state.forecastWeather} />
            </View>
        );
    }
    /*
        componentWillUpdate() method will be invoked immedietly after
        new props or state are being received.
    */
    updateWeatherStateData (observable) {
        this.setState(previousState=>{
            return {currentWeather : observable.getCurrentWeather()};
        });
        this.setState(previousState=>{
            return {forecastWeather : observable.getForecastWeather()};
        });
    }

    update(observable) {
        this.updateWeatherStateData(observable);
    }

}
