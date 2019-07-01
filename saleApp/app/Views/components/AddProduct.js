import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image,Alert,TextInput} from 'react-native';


export default class AddProduct extends React.Component{
  constructor(){
    super();
    this.state={
      url:require('./../../img/icons8-producto-filled-100.png'),
    }
  }

	render(){
		return (
		<View style={styles.container}>
        <View style={styles.inputsDescriptionConta} >
          <TextInput
              style={styles.inputDescription}
              placeholder="Nombre producto"
            />
          <TextInput
            style={styles.inputDescription}
            placeholder="Precio"
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.options}>
          <View style={styles.btnOptions}>
          <TouchableOpacity
          onPress={() => this.props.navEvent.navigation.navigate('Camera')}
          >
              <Image style={styles.imageOption} source={require('./../../img/icons8-cámara-compacta-filled-50.png')}/> 
        </TouchableOpacity>
          </View>
          <View style={styles.btnOptions}>
            <TouchableOpacity>
              <Image style={styles.imageOption} source={require('./../../img/icons8-carpeta-filled-50.png')}/> 
        </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containimageProduct}>
          <Image style={styles.imageProduct} source={this.state.url}/> 
        </View>
        <View style={styles.containerSave}>
          <TouchableOpacity style={styles.btnSave}>
            <Text style={styles.txtSave}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    borderWidth:0.5,
    height:450,
    backgroundColor:'white',
    borderRadius:5,
    margin:3,
  },
  inputsDescriptionConta:{
    alignItems: 'center',
  },
  inputDescription:{
    borderWidth:0.3,
    margin:5,
    height:37,
    borderRadius:3,
    width:300,
  },
  options:{
    flexDirection:'row',
    height:50,
  },
  imageOption:{
    height:40,
    resizeMode:'contain',
  },
  imageProduct:{
    height:250,
    resizeMode:'contain',
    borderRadius:5,
  },
  containimageProduct:{
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth:0.3,
  },
  btnOptions:{
    flex:1,
    alignItems: 'center',
  },
  containerSave:{
    alignItems: 'center',
  },
  btnSave:{
    height: 37,
    width: 150,
    borderRadius:5,
    borderWidth:0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSave:{
    fontSize: 15,
  },
});
