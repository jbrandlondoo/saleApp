import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import Register from "./components/Register";
export default class RegisterView extends React.Component{
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
			<Register navEvent={this.props}/>
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