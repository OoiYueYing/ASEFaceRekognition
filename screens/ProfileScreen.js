import React from 'react'
import {Image, Text, View, StyleSheet, ActivityIndicator} from 'react-native'
import {Button} from '../components/Login'

const theme = {
  first: '#17223b',  //Very dark grayish violet.
  second: '#263859', //Light grayish orange
  third: '#6b778d', //Pale red [Pink tone]
  fourth: '#ff6768' //Strong pink
}

export default class ProfileScreen extends React.Component {
  //No header for this screen
  static navigationOptions = {
    header: null
  }
  //set state
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dataSource:[]
    };
  }
  //load this first when we are on this screen
  componentDidMount(){
    // fetch("professors.json")
    // .then((response) => response.json())
    // .then((responseJson) => {
      // this.setState({
      //   loading:false,
      //   dataSource: responseJson
      // })
    // })
    // .catch((error) => console.log(error))
    const data = require('../mockdata/db.json')
    if(data){
      this.setState({
        loading:false,
        dataSource: data
      })
      console.log(data.professors)
    } else {
      console.log("error loading file")
    }
  }
  handleLogoutPress = () => {
      console.log("Logout button pressed")
      this.props.navigation.navigate('Login')
    }

  render(){
    //if still fetching
    if(this.state.loading){
      return( 
        <View style={styles.container}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )} else {
      return(
        <View style = {styles.container}>
          <View style={styles.header}></View>
          <View style={styles.body}>  
            <View style = {styles.bodyContent}>
              <Text style = {styles.title}>Welcome Professor {this.state.dataSource.professors[0].full_name}</Text>
              <Image style={styles.avatar} source={{uri:'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
              <Text style = {styles.outerdetails}>
                Name: {"\t"}
                <Text style = {styles.details}>
                  {this.state.dataSource.professors[0].full_name}
                </Text>
                {"\n"}Email: {"\t"}
                <Text style = {styles.details}>
                    {this.state.dataSource.professors[0].email}
                </Text>
                {"\n"}Position: {"\t"}
                <Text style = {styles.details}>
                  {this.state.dataSource.professors[0].position}
                </Text>
              </Text>
            </View>  
          </View>
          <Button label="Logout" onPress={this.handleLogoutPress}/> 
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    backgroundColor: theme.third
  },
  header:{
    height:150,
  },
  body:{
    flex: 1,
    marginTop:10
    
  },
  bodyContent:{
    flex: 1,
    alignItems:'center',
    paddingHorizontal: 5,
  },
  title:{
    flex: 3,
    fontSize: 27, 
    height: 75,
    textAlign: 'center',
    color: "#fff", 
    fontFamily: 'roboto_thin'
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
  outerdetails:{
    flex: 5,
    marginTop: 100,
    fontSize: 20, 
    color: "#fff", 
    alignSelf: 'flex-start',
    width: "100%",
    fontFamily: 'roboto_thin'
  },
   details:{
    flex: 5,
    marginTop: 100,
    fontSize: 20, 
    color: '#fff', 
    alignSelf: 'flex-start',
    width: "100%",
    fontFamily: 'roboto_thin'
  }
})