import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import LoginStack from './LoginStack'
import BottomTabNavigator from './BottomTabNavigator'

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      App: BottomTabNavigator
    },
    {
      initialRouteName: 'Login'
    }
  )
)
