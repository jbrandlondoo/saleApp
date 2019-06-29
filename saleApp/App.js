/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';

import LoginLayout from "./app/components/Login";
import HeaderBar from "./app/components/HeaderBar";
import BoxProduct from "./app/components/BoxProduct";
import AddProduct from "./app/components/AddProduct";
import Profile from "./app/components/Profile";

export default class App extends React.Component {
 render() {
    return (
    	<View style={styles.root}>
    		<HeaderBar/>
        <Profile/>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
  	flex: 1,
  	backgroundColor:'white',
  }
});