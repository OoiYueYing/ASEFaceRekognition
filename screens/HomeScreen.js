import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Course from './components/Course';
import {Table,TableWrapper,Row,Rows,Col,Cols,Cell, Dimensions} from 'react-native-table-component';
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
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
            Welcome Professor XX Here are your courses
          </Text>
        <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
        </ScrollView>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'top',

    backgroundColor: theme.third,
  },
  title: {
    flex: 2,
    marginTop:50,
    marginBottom:10,
    fontSize: 25,
    height: 60,
    textAlignVertical: 'top',
    textAlign: 'center',
    color: '#fff',
  },
  
});


