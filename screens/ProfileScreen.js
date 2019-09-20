import React from 'react'
import {Image, Text, View, KeyboardAvoidView, StyleSheet, TouchableOpacity} from 'react-native'
import {Button} from '../components/Login'

const theme = {
  first: '#504658',  //Very dark grayish violet.
  second: '#f0decb', //Light grayish orange
  third: '#ffb5b5', //Pale red [Pink tone]
  fourth: '#ce2e6c' //Strong pink
}

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

   handleLogoutPress = () => {
        console.log("Logout button pressed")
        this.props.navigation.navigate('App')
      }

  render(){
    return(
      <View style = {styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>  
          <View style = {styles.bodyContent}>
            <Text style = {styles.title}>Welcome Professor XXX</Text>
            <Image style={styles.avatar} source={{uri:'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <Text style = {styles.details}>
              Name: 
              {"\n"}Email: 
              {"\n"}Position: 
            </Text>
            <Button label="Logout" onPress={this.handleLogoutPress}/>   
          </View>
        </View>
      </View>
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
  header:{
    height:150,
  },
  body:{
    marginTop:10
  },
  bodyContent:{
    alignItems:'center',
    paddingHorizontal: 5,
  },
  title:{
    flex: 3,
    fontSize: 27, 
    height: 75,
    textAlign: 'center',
    color: theme.second, 
  },
  avatar:{
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: theme.third,
    marginBottom:30,
    alignSelf:'center',
    position: 'absolute',
    marginTop:70
  },
   details:{
    flex: 5,
    marginTop: 100,
    fontSize: 20, 
    color: theme.second, 
    alignSelf: 'flex-start'
  }
})