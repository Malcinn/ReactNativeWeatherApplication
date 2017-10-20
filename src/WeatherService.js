import {React} from 'react'
import {Observable} from './Observable.js';

/*
    Weather service extends Observable class, supply weather data to observers.
    Obtain data from external web serwice, which returns data in JSON format.
*/
export class WeatherService extends Observable {

    constructor() {
        super();
        this.cityName = null;
        this.weatherType = null;
        this.currentWeather = null;
        this.forecastWeather = null;
        this.observers = [];
    }

    async getWeather(type, setWeather){
        var apixuEndpoint = 'https://api.apixu.com/v1/' + type + '.json';
        var keyParam = '?key=214c359d57894cf8af1125849171310';
        var query = '&q=' + this.getCityName();
        var getWeatherURL = apixuEndpoint + keyParam + query;
        console.log(getWeatherURL);

        fetch(getWeatherURL)
        .then((response) => response.json())
        .then((responseJson) => {
            this.updateWeatherData(type, responseJson);
            this.notifyObservers(this);
        }).catch((error) => {
            console.error(error);
        });
    }

    //Method invoke by button
    updateWeather(cityName) {
        this.setCityName(cityName);
        this.updateCurrentWeather();
        this.updateForecastWeather();
    }

    updateCurrentWeather() {
        this.setWeatherType('currentWeather');
        this.getWeather('current', this.setCurrentWeather);
    }

    updateForecastWeather() {
        this.setWeatherType('forecastWeather');
        this.getWeather('forecast', this.setForecastWeather);
    }

    updateWeatherData(type, responseJson) {
        if (type === "current") {
            this.setCurrentWeather(responseJson);
            console.log(this.getCurrentWeather());
        }
        if (type === "forecast") {
            this.setForecastWeather(responseJson);
            console.log(this.getForecastWeather());
        }
    }

    //getters and setters
    setCityName(cityName) {
        this.cityName = cityName;
    }

    getCityName() {
        return this.cityName;
    }

    setWeatherType(weatherType) {
        this.weatherType = weatherType;
    }

    getWeatherType() {
        return this.weatherType;
    }

    setCurrentWeather(currentWeather) {
        this.currentWeather = currentWeather;
    }

    getCurrentWeather(){
        return this.currentWeather;
    }

    setForecastWeather(forecastWeather) {
        this.forecastWeather = forecastWeather;
    }

    getForecastWeather() {
        return this.forecastWeather;
    }
}
