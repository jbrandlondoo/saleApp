import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import BoxProduct from "./components/BoxProduct";
export default class ShopView extends React.Component{
	static navigationOptions = {
	    title: 'SaleApp',
  	};
	render(){
		return(
			<View>
				<ScrollView>
				<BoxProduct/>
				</ScrollView>			
			</View>
		);
	}
}