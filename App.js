import React from 'react';
import { Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './Screens/Write';
import ReadScreen from './Screens/Read'

export default class App extends React.Component{
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreen},
  Read: {screen: ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName == "Read"){
      return(
        <Image
         source = {require('./assets/Read..png')}
         style = {{width: 40, height: 40}}
        />
      )
    }
    else if(routeName == "Write"){
      return(
        <Image
         source = {require('./assets/Write..png')}
         style = {{width: 45, height: 45}}
        />
)}}})})

const AppContainer = createAppContainer(TabNavigator);