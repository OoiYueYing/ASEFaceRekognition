import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import * as Permissions from 'expo-permissions'
import * as Font from 'expo-font';
import AppContainer from './navigation'

export default class App extends React.Component {
  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA_ROLL)

    Font.loadAsync({
      'shink-regular': require('./assets/fonts/shink/Shink_Regular.ttf'),
    });
  }

  render() {
    return (
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    )
  }
}
