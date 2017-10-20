import React from 'react';
import {Text, View, ScrollView, TextInput,Alert, Button} from 'react-native';
import {styles} from './src/styles.js'
import {SearchForm} from './src/SearchForm.js'
import {WeatherService} from './src/WeatherService.js'
import {DataView} from './src/DataView.js'

/*
    Main class (Component) of application, this is an etry point to application.
*/
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {weatherService: new WeatherService()};
    }

    render() {
        return (
            <ScrollView style={styles.mainView}>
                <SearchForm weatherService={this.state.weatherService} />
                <DataView weatherService={this.state.weatherService} />
            </ScrollView>
        );
    }
}
