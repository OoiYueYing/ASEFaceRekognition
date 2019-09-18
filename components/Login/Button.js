import * as React from "react"
import {StyleSheet, Text, TouchableOpacity} from "react-native"

const theme = {
  first: '#504658',
  second: '#f0decb',
  third: '#ffb5b5',
  fourth: '#ce2e6c'
}

export class Button extends React.Component {
  render(){
    const {label, onPress} = this.props;
    return(
      <TouchableOpacity style= {styles.container} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.third,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.fourth
  },
  text: {
    color: "#fffaf0",
    textAlign: "center",
    height: 20
  }
})

