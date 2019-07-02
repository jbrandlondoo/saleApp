import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text,TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
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
					<View style={styles.contAddView}>
				        <TouchableOpacity style={styles.btnAddView}
				        onPress={() => this.props.navigation.navigate('AddProduct')}
				        >
				          <Text style={styles.txtAddView}>+Agregar</Text>
				        </TouchableOpacity> 
      				</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  contAddView:{
    backgroundColor:'white',
    borderRadius:5,
    alignItems:'center',
    margin:3,
  },
  btnAddView:{
    backgroundColor:'#AB3A1F',
    borderRadius:20,
    alignItems:'center',
    height:40,
    width:200,
    justifyContent: 'center',
  },
  txtAddView:{
    color:'white'
  }
});
