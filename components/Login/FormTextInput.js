import React from "react"
import {Input, Icon} from "react-native-elements"


export const FormTextInput = (props) => {
  // render(){
      const {placeholder,iconName, onChangeText} = props
      return(
        <Input
        placeholder={placeholder}
        placeholderTextColor="gray"
        paddingLeft="3%"
        leftIcon={
          <Icon name={iconName} type="font-awesome" color="white" />
        }
        inputStyle={{ color: 'white' }}
        onChangeText={onChangeText}
        {...props}
      />
      )
    }
  // }
