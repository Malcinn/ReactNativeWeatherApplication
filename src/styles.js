import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    mainView: {
        padding:20,
    },
    inputData: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingBottom: 5
    },
    textInput: {
        color: 'black',
        fontSize: 20,
        padding: 10
    },
    error: {
        color: 'red',
        fontSize: 15,
    },
    text: {
        fontSize: 18
    },
    flatViewRow: {
        fontSize: 16
    }
});
