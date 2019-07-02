import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import AddProduct from "./components/AddProduct";


export default class ShopView extends React.Component{
	static navigationOptions = {
	    title: 'SaleApps',
      	headerTintColor: '#FFFFFF',
	    headerStyle: {
      		backgroundColor: '#AB3A1F',
    	},
  	};
	render(){
		return(
			<View>
				<ScrollView>
					<AddProduct navEvent={this.props}/>
				</ScrollView>
			</View>
		);
	}
}

