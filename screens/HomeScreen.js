import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render(){
    return(
      <Text>This is home screen</Text>
  )}
}