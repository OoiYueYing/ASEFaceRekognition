import React, {Component} from 'react'

import {Text, StyleSheet, View, ScrollView,TouchableOpacity, Button, Alert} from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const theme = {
  first: '#17223b',  //Very dark grayish violet.
  second: '#263859', //Light grayish orange
  third: '#6b778d', //Pale red [Pink tone]
  fourth: '#ff6768' //Strong pink
}
export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLecture: true,
      showTutorial : true,
      showLab : true,
      details:[],
      courseName: ""
    };
  }
  componentDidMount() {
    console.log("setting state")
    const data = require('../mockdata/db.json')
    this.setState({
      showLecture: this.props.showLecture,
      showTutorial: this.props.showTutorial,
      showLab: this.props.showLab,
      courseName: data.courses[this.props.id - 1].name
    });
  }
 render() {

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
    if (this.state.showLecture == true && this.state.showTutorial == true && this.state.showLab == true)
    {
        this.state.details = {
        Row: [this.state.courseName],
        tableHead: [lectureButton,tutorialButton ,labButton ],
      }
    }
    else if (this.state.showLecture == true && this.state.showTutorial == true && this.state.showLab == false)
    {
        this.state.details = {
        Row: [this.state.courseName],
        tableHead: [lectureButton,tutorialButton],
      }
    }
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 0} ,{borderRadius : 50} ,{margin : 10}}>
          <Row data={this.state.details.Row} style={styles.head} textStyle={styles.textRow}/>
            <Row data = {this.state.details.tableHead} style={styles.head}  />

        </Table>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 0 , alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', borderRadius:60},
  head: { height: 40, width: 250, backgroundColor: theme.first },
  btnText: { fontSize: 20, margin: 6, fontFamily:'shink-regular', color: theme.fourth, textAlign: 'center' },
  textRow: { margin: 6, fontFamily:'shink-regular',  color: theme.fourth },
});
