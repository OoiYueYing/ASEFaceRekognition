import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Course from '../components/Course';
const theme = {
  first: '#17223b', //Very dark grayish violet.
  second: '#263859', //Light grayish orange
  third: '#6b778d', //Pale red [Pink tone]
  fourth: '#ff6768', //Strong pink
};
export default class AttendanceListScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  //set state
  constructor(props) {
    super(props)

    this.state = {
  
    }
    
  }

  render() { 
    
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
            Here is Attendance List
            {/* Welcome Professor xxx Here are your courses */}
          </Text>
          <View style = {{flex:7 , marginBottom:10}} >
          {/* <FlatList
            
          /> */}
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
    fontFamily:'roboto_thin'
  }
  
});


