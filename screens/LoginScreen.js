import React from "react"
import {Image, StyleSheet, KeyboardAvoidingView} from "react-native";
import { Button, FormTextInput } from '../components/Login'
import imageLogo from "../assets/images/splash.png"

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


// export default class loginScreen extends React.Component {
//   static navigationOptions = {
//     header: null
//   }
//   constructor(props) {
//       super(props)
//       this.state = {userName: '' , password: ''}
//   }

  // handleLoginPress = () => {
  //   console.log("Login button pressed")
  //   this.setState({ userName: '', password: '' })
  //   this.props.navigation.navigate('App')

  // }

//   render() {
//     return(
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <Image source={imageLogo} style = {styles.logo} />
//         <View style= {styles.form}>
//           <FormTextInput
//             value={this.state.userName}
//             onChangeText={text => this.setState({ userName: text })}
//             placeholder="username"
//             iconName="user"
//           />
//           <FormTextInput
//             iconName="lock"
//             value={this.state.password}
//             onChangeText={text => this.setState( {password : text })}
//             placeholder="password"
//           />
//           <Button label="Login" onPress={this.handleLoginPress}/>
//         </View>
//       </KeyboardAvoidingView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: theme.second,
//     alignItems: "center",
//     justifyContent: "space-between"
//   },
//   logo:{
//     flex:1,
//     width: 190,
//     height: 190
//   },
//   form:{
//     flex:1,
//     justifyContent:"center",
//     width:"80%"
//   }
// })

