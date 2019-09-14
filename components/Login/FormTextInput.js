import React from "react"
import {Input, Icon} from "react-native-elements"


export const FormTextInput = props => {
    return (
      <Input
      placeholder={props.placeholder}
      placeholderTextColor="gray"
      paddingLeft="3%"
      leftIcon={
        <Icon name={props.iconName} type="font-awesome" color="white" />
      }
      inputStyle={{ color: 'white' }}
      onChangeText={props.onChangeText}
      {...props}
    />
    )
  }
