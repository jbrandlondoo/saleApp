/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions,createMaterialTopTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import LoginView from "./app/Views/LoginView";
import RegisterView from "./app/Views/RegisterView";
import MyShopView from "./app/Views/MyShopView";
import ShopView from "./app/Views/ShopView";
import ProfileView from "./app/Views/ProfileView";
import AddProductView from "./app/Views/AddProductView";
<<<<<<< HEAD
import CameraView from "./app/Views/CameraView";
import CameraRollView from "./app/Views/CameraRollView";
=======
>>>>>>> parent of 1b8ee96... camera



const TabNavigator = createMaterialTopTabNavigator(
  {
    Shop:{
        screen:ShopView,
        navigationOptions:  {
          title:'Tienda',
        },
      },
    Myshop: {
        screen:MyShopView,
        navigationOptions:  {
          title:'My tienda',
        },
      },
    Profile: {
        screen:ProfileView,
        navigationOptions:  {
          title:'Perfil',
        },
      },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#AB3A1F',
        height: 40,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#FBA99F',
        borderBottomWidth: 2,
      },
    },
  }
);

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginView,
  },

  Home: {
    screen: TabNavigator,
    navigationOptions:  {
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#AB3A1F',
      },
      headerTintColor: '#FFFFFF',
      title: 'SaleApp',
    },
  },

  AddProduct:{
    screen: AddProductView,
    navigationOptions:  {
    },
  },
  Register:{
    screen: RegisterView,
    navigationOptions:  {
    },
  },
<<<<<<< HEAD
    CameraRoll:{
    screen: CameraRollView,
    navigationOptions:  {
    },
  },
  Camera:{
    screen:CameraView,
    navigationOptions:  {
     headerStyle: {
         backgroundColor: '#000000',
      },
      headerTintColor: '#FFFFFF',
      title: 'SaleApp',
    },
  },
=======
>>>>>>> parent of 1b8ee96... camera
}, {
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);