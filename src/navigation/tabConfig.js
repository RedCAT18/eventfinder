import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const tabConfig = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Main') {
        iconName = `ios-list-box${focused ? '' : '-outline'}`
      } else if (routeName === 'Auth') {
        iconName = `ios-person${focused ? '' : '-outline'}`
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />
    }
  }
}

export { tabConfig }
