import React, {Component} from 'react';
import Profile from "./components/Profile";
import { StyleSheet, View,ScrollView,Text} from 'react-native';

export default class ProfileView extends React.Component{
	static navigationOptions = {
	    title: 'SaleApp',
  	};
	render(){
		return(
			<View>
				<ScrollView>
					<Profile/>
				</ScrollView>
			</View>
		);
	}
}
