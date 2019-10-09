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
      'roboto_black': require('./assets/fonts/roboto/Roboto-Black.ttf'),
      'roboto_black_italic': require('./assets/fonts/roboto/Roboto-BlackItalic.ttf'),
      'roboto_bold': require('./assets/fonts/roboto/Roboto-Bold.ttf'),
      'roboto_bold_italic': require('./assets/fonts/roboto/Roboto-BoldItalic.ttf'),
      'roboto_italic': require('./assets/fonts/roboto/Roboto-Italic.ttf'),
      'roboto_light': require('./assets/fonts/roboto/Roboto-LightItalic.ttf'),
      'roboto_light_italic': require('./assets/fonts/roboto/Roboto-LightItalic.ttf'),
      'roboto_medium': require('./assets/fonts/roboto/Roboto-Medium.ttf'),
      'roboto_regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
      'roboto_thin': require('./assets/fonts/roboto/Roboto-Thin.ttf'),
      'roboto_thin_italic': require('./assets/fonts/roboto/Roboto-ThinItalic.ttf'),
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
