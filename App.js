import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from './screens/searchScreen';
import TransactionScreen from './screens/transactionScreen';

export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
 }
}

const TabNavigator=createBottomTabNavigator({
  transaction:{screen:TransactionScreen},
  search:{screen:SearchScreen}
},
{defaultNavigationOptions:({navigation})=>
({tabBarIcon:()=>{
  const routeName=navigation.state.routeName;
if(routeName==="Transction"){
  return(
    <Image source={require("./assets/book.png")} style={{width:40,height:40}} />
  )
}
else if(routeName==="Search"){
  return(
    <Image source={require("./assets/searchingbook.png")} style={{width:40,height:40}} />
  )
}
}})}
)


const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
