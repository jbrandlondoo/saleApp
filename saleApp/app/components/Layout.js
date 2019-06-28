import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
// import LoginLayout from "./app/components/layout/LoginLayout";

export default class Login extends React.Component{
	render(){
		return (
      <View style={styles.container}>
        <View style={styles.logoViewLogin}>
          <Text style={styles.textLogo}>SaleApp</Text>
        </View>
        <View style={styles.inputsLogin}>
          <TextInput
            style={styles.inputCredential}
            onChangeText={this.add}
            placeholder="Mail"
          />
          <TextInput
            style={styles.inputCredential}
            onChangeText={this.add}
            placeholder="Contraseña"
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textButtonLogin}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textButtonLogin}>Registarme</Text>
          </TouchableOpacity>
        </View>   
      </View>
    );
	}
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoViewLogin: {
    flex: 1,
    backgroundColor: '#F5F8F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    color:'#71726F',
    fontSize: 25,
  },
  inputsLogin:{
    flex: 2,
    alignItems: 'center',
  },
  inputCredential:{
    marginLeft:20,
    marginRight:20,
    height: 40,
    borderBottomWidth: 0.3,
    width:250
  },
  buttonLogin:{
    justifyContent: 'center',
    alignItems: 'center',
    height:40,
    borderWidth:0.2,
  },
  textButtonLogin:{
    color:'#71726F',
    fontSize:18,
  },
});