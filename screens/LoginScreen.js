import React from 'react'
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native'
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
            <Image style={styles.avatar} source={{uri:'https://img.icons8.com/dusk/64/000000/face-id.png'}}/>
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
      backgroundColor: theme.first
    },
    avatar:{
      width: 150,
      height: 150,
      marginBottom:30,
      alignSelf:'center',
      position: 'relative',
      marginTop:70
    }
  })