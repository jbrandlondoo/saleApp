import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import Login from "./components/Login";
export default class LoginView extends React.Component{
	static navigationOptions = {
	    title: 'SaleApps',
      	headerTintColor: '#FFFFFF',
	    headerStyle: {
      		backgroundColor: '#AB3A1F',
    	},
  	};
	render(){
		return(
			<View style={styles.root}>
			<Login navEvent={this.props}/>
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