import React from 'react'
import {Image, KeyboardAvoidingView, StyleSheet} from 'react-native'
import {Button, FormTextInput} from '../components/Login'
const imageLogo = require ("../assets/images/splash.png" )

const theme = {
    first: '#504658',
    second: '#f0decb',
    third: '#ffb5b5',
    fourth: '#ce2e6c'
  }

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
      }
    
      state = {
        username: '',
        password: ''
      }

      handleLoginPress = () => {
        console.log("Login button pressed")
        this.setState({ userName: '', password: '' })
        this.props.navigation.navigate('App')
    
      }

    render() {
        return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image source={imageLogo} style = {styles.logo} />

            <FormTextInput
            iconName="user"
            placeholder="Username"
            value={this.state.username}
            onChangeText={text => this.setState({ username: text })}
            />

            <FormTextInput
            iconName="lock"
            placeholder="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            />

        <Button label="Login" onPress={this.handleLoginPress}/>
        </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '10%',
      backgroundColor: theme.first
    },
    logo:{
      flex:1,
      width: 190,
      height: 190
    }
  
  })