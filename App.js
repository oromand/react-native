import React from "react"
import  {StatusBar, View} from "react-native"
import {createBottomTabNavigator, createStackNavigator, createAppContainer, createMaterialTopTabNavigator, createTabNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen"
import ResultScreen from "./ResultScreen"

import style from "./Style"

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Result: ResultScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

const TabComponent = createAppContainer(TabNavigator);

 export default class App extends React.Component {
   render() {
     return(
       <View style={style.container}>
          <StatusBar />
          <TabComponent/>
       </View>
     )
   }
 }
