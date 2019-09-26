import React from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native'
import Course from './components/Course'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const theme = {
  first: '#17223b',  //Very dark grayish violet.
  second: '#263859', //Light grayish orange
  third: '#6b778d', //Pale red [Pink tone]
  fourth: '#ff6768' //Strong pink
}
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render(){
    
    return(
      <View style = {styles.container}>
      
        <View style={styles.header}></View>
        <Text style = {styles.title}>Welcome Professor XX Here are your courses. </Text>
        <View style={styles.body}>
          <ScrollView>
            <Course></Course>
           
          </ScrollView>
          
          
          <View style = {styles.bodyContent}>
            
            
            </View>
        </View>
      </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'top',
    paddingHorizontal: '10%',
    backgroundColor: theme.third
  },
  header:{
    height:50,
   
  },
  body:{
    marginTop:30
  },
  bodyContent:{
    alignItems:'top',
    paddingHorizontal: 5,
  },
  title:{
    flex: 2,
    fontSize: 25, 
    height: 80,
    textAlignVertical : 'top',
    textAlign: 'center',
    color: '#fff',
  }
})