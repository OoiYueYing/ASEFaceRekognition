import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import * as Permissions from 'expo-permissions'

import AppContainer from './navigation'

export default class App extends React.Component {
  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA_ROLL)
  }

  render() {
    return (
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    )
  }
}
