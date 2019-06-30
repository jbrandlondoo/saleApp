/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import LoginView from "./app/Views/LoginView";
import MyShopView from "./app/Views/MyShopView";
import ShopView from "./app/Views/ShopView";
import ProfileView from "./app/Views/ProfileView";

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginView,
  },
  Shop: {
    screen: ShopView,
  },
  Profile: {
    screen: ProfileView,
  },
  MyShop: {
    screen: MyShopView,
  },
}, {
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);