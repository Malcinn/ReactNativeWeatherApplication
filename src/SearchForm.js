import React, {Component} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import {styles} from './styles.js'

/*
    Component responsible for:
            TextInput - component that let's user to enter location name.
            Button - component responsible for triggering action (updateWeather) on weatherService Service.
*/
export class SearchForm extends Component {

    constructor(props){
        super(props);
        this.state = {weatherService: props.weatherService, cityName:''};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.weatherService != null) {
            this.setState(previousState => {
                return {weatherService: nextProps.weatherService};
            });
            console.log('MyView componentWillReceiveProps');
        }
    }

    render() {
        return (
            <View style={styles.inputData}>
                <Text style={styles.textStyle}>City name</Text>
                <TextInput style={styles.textStyle}
                    onChangeText={(text)=>{
                        this.setState(previousState => {
                            return {'cityName': text};
                        })
                    }} />
                <Button title='Get Weather'
                    onPress={()=>{this.onPressGetWeatherButton()}}/>
            </View>
        );
    }

    onChangeText(text, stateName) {
        console.log(stateName);
        this.setState(previousState => {
            return {stateName : text};
        })
    }

    onPressGetWeatherButton() {
        if (this.state.weatherService != null) {
            this.state.weatherService.updateWeather(this.state.cityName);
        }
    }
}
