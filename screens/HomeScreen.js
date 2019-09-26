import React, {Component} from 'react'
import {Text, StyleSheet, View, ScrollView,TouchableOpacity, Button, Alert} from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const theme = {
  first: '#17223b',  //Very dark grayish violet.
  second: '#263859', //Light grayish orange
  third: '#6b778d', //Pale red [Pink tone]
  fourth: '#ff6768' //Strong pink
}
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    var showLecture = true;
    var showTutorial = true;
    var showLab = true;
    const lectureButton = (
        <TouchableOpacity>
        <Text style={styles.btnText} title="Lecture"> Lecture </Text>
        </TouchableOpacity>
    );
    const tutorialButton = (
        <TouchableOpacity>
        <Text style={styles.btnText} title="Tutorial"> Tutorial </Text>
        </TouchableOpacity>
    );
    const labButton = (
        <TouchableOpacity>
        <Text style={styles.btnText} title="Lab"> Lab </Text>
        </TouchableOpacity>
    );
    if (showLecture == true && showTutorial == true && showLab == true)
    {   
        this.state = {
        Row: ['CZ2001 Introduction to Algorithms'],
        tableHead: [lectureButton,tutorialButton ,labButton ],
      }
    }
    else if (showLecture == true && showTutorial == true && showLab == false)
    {   
        this.state = {
        Row: ['CZ2001 Introduction to Algorithms'],
        tableHead: [lectureButton,tutorialButton],
      }
    }
  }
 render() {
    
    const state = this.state;
    
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 0},{borderRadius: 50}, {margin:10}}>
          <Row data={state.Row} style={styles.head} textStyle={styles.textRow}/>
         
            <Row data = {state.tableHead} style={styles.head}  />
            
        </Table>
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 0 , alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', borderRadius:60},
  head: { height: 40, width: 250, backgroundColor: theme.first },
  btnText: { fontSize: 20, margin: 6, fontFamily:'notoserif', color: theme.fourth, textAlign: 'center' },
  textRow: { margin: 6, fontFamily:'Roboto',  color: theme.fourth },
});