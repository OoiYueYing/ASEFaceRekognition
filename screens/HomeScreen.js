import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Course from '../components/Course';
const theme = {
  first: '#17223b', //Very dark grayish violet.
  second: '#263859', //Light grayish orange
  third: '#6b778d', //Pale red [Pink tone]
  fourth: '#ff6768', //Strong pink
};
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  //set state
  constructor(props) {
    super(props)

    this.state = {
      dataSource:[],
      courses: []
    }
    
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
        dataSource: data.professors,
        courses: data.courses
      })
    } else {
      console.log("error loading file")
    }
  }

  render() { 
    
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
            {/* Welcome Professor {this.state.dataSource.professors[0].fullName} Here are your courses */}
            Welcome Professor xxx Here are your courses
          </Text>
          <View style = {{flex:7 , marginBottom:10}} >
          <FlatList
            data={this.state.courses}
            renderItem= { ({item}) => {
              if(item.lab){ 
                return(<Course showTutorial={true}  showLab = {true} showLecture= {true} id={item.id}/>)
              } else {
                return(<Course showTutorial = {true} showLab = {false} showLecture= {true} id={item.id} />)
              }
            }
            }
            keyExtractor={item => item.id}
          />
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: theme.third,
  },
  title: {
    flex: 1,
    marginTop:50,
    fontSize: 25,
    height: 60,
    textAlignVertical: 'top',
    textAlign: 'center',
    color: '#fff',
  }
  
});


