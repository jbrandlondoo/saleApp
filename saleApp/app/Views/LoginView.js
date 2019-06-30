import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import Login from "./components/Login";
export default class LoginView extends React.Component{
	static navigationOptions = {
	    title: 'SaleApps',
	    alignSelf: 'center',
  	};
	render(){
		return(
			<View style={styles.root}>
			<Login/>
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