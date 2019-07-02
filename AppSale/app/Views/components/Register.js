import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import firebaseConfig from './../../CredentialsFirebase';
import firebase from 'firebase';

export default class Register extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      phone:'',
      passWord:'',
    };
  }

  componentWillMount() {
  try{
  firebase.initializeApp(firebaseConfig);
  }catch{

  }
  };

  insertUser = ()=>{
            firebase.database().ref('users/'+this.state.userName).set(
            {
                phone: this.state.phone,
                passWord:this.state.passWord
            }
            ).then(() => {
                this.props.navEvent.navigation.goBack();
            }).catch((error) => {
                // Alert.alert(error+"");
            });
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.inputsLogin}>
          <TextInput
            style={styles.inputCredential}
            onChangeText={(typedText)=>{this.setState({userName:typedText})}}
            placeholder="nombre usuario"
          />
          <TextInput
            style={styles.inputCredential}
            onChangeText={(typedText)=>{this.setState({phone:typedText})}} 
            placeholder="Teléfono"
            keyboardType={'numeric'}

          />
          <TextInput
            style={styles.inputCredential}
            onChangeText={(typedText)=>{this.setState({passWord:typedText})}}
            secureTextEntry = {true}
            placeholder="Contraseña"
          />
          <TouchableOpacity style={styles.buttonLogin}
            onPress={this.insertUser}
          >
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