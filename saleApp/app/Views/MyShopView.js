import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import BoxProductProfile from "./components/BoxProductProfile";
import AddProduct from "./components/AddProduct";
export default class ShopView extends React.Component{
	static navigationOptions = {
	    title: 'SaleApp',
  	};
	render(){
		return(
			<View>
				<ScrollView>
					<AddProduct/>
					<BoxProductProfile/>
					<BoxProductProfile/>
				</ScrollView>
			</View>
		);
	}
}