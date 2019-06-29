import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert, TextInput,TouchableOpacity} from 'react-native';


export default class HeaderBar extends React.Component{
	constructor(){
		super();
		this.state = {
		styleHome:styles.textButtonNav,
		styleMyShop:styles.textButtonNav,
		profile:styles.textButtonNav,
		}
	}
	changeView(id){
        this.setState({ 
    		styleHome: styles.textButtonNav,
    		styleMyShop: styles.textButtonNav,
    		profile: styles.textButtonNav,
    	});
		switch(id) {
	      case 'inicio':
	      	this.setState({ 
    			styleHome: styles.textBTNSelected,
    		});
	        break;
	      
	      case 'miTienda':
	      	this.setState({ 
    			styleMyShop: styles.textBTNSelected,
    		});
	        break;
	 
	      case 'perfil':
	      	this.setState({ 
    			profile: styles.textBTNSelected,
    		});
	        break;
		}
	}
	render(){
		return (
		<View style={styles.header}>
		<View style={styles.titleBar}>
		  <Text style={styles.titleText}> SaleApp </Text>
		</View>
		<View style={styles.buttonsNav}>
		<TouchableOpacity id='inicio' style={styles.buttonNav} onPress={()=>{this.changeView('inicio')}}>
		    <Text style={this.state.styleHome}>Inicio</Text>
		</TouchableOpacity>
		<TouchableOpacity id='miTienda' style={styles.buttonNav} onPress={()=>{this.changeView('miTienda')}}>
		  <Text style={this.state.styleMyShop}>Mi tienda</Text>
		</TouchableOpacity>
		<TouchableOpacity id='perfil' style={styles.buttonNav} onPress={()=>{this.changeView('perfil')}}>
		  <Text style={this.state.profile}>Perfil</Text>
		</TouchableOpacity>
		</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
  header:{
    height: 90,
    backgroundColor: '#F5F8F1',
  },
  titleText:{
    color:'#71726F',
    fontSize: 20,
  },
  titleBar:{
    marginTop:20,
    marginBottom:10,
    alignItems:'center',

  },
  buttonsNav:{
    height: 30,
    flexDirection:'row',
  },
  buttonNav:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  textButtonNav:{
  	color:'#B0B4A9',
    fontSize: 15,
  },
  textBTNSelected:{
  	color:'#3D5609',
  },
});
