import React from 'react'
import {View, Text} from 'react-native'
import { Icon } from 'react-native-elements'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CameraScreen from '../screens/CameraScreen'
import AttendanceListScreen from '../screens/AttendanceListScreen'


const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen,
  AttendanceListScreen : AttendanceListScreen
})

const ProfileStack = createStackNavigator({
  ProfileScreen: ProfileScreen
})

const CameraStack = createStackNavigator({
  CameraScreen: CameraScreen
})

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Camera: CameraStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Profile') {
          iconName = 'user'
        } else if (routeName === 'Camera') {
          iconName = 'camera'
        }

        return <Icon name={iconName} type="font-awesome" color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 15
      },
      style: {
        backgroundColor: '#17223b'
      }
    }
  }
)
