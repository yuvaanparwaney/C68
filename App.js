import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    ); 
  }
  
}

const TabNavigator = createBottomTabNavigator ({
  FaceBook:{screen: fb},
  Instagram:{screen: gram},
})

const AppContainer = createAppContainer(TabNavigator)