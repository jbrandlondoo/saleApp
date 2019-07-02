import React, {Component} from 'react';
import {Alert,AsyncStorage, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import firebaseConfig from './../../CredentialsFirebase';
import firebase from 'firebase';


export default class Login extends React.Component{


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
  AsyncStorage.setItem('session',"Jose");
  AsyncStorage.setItem('phone','1234');

  AsyncStorage.getItem('session').then((value)=>{
    if(value){
     this.props.navEvent.navigation.navigate('Home');
    }
  });
  };

fetchUser = ()=>{
        let passWordD = this.state.passWord;
        let nav = this.props.navEvent.navigation;
        const temp = firebase.database().ref('users/'+this.state.userName).on('value',function(snapshot){
            let passWordB = snapshot.val().passWord;
            if (passWordB === passWordD) {
              nav.navigate('Home');
            }else{
            Alert.alert('Intentelo de nuevo');
            }
        });
};

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.inputsLogin}>
          <TextInput
            style={styles.inputCredential}
            onChangeText={(typedText)=>{this.setState({userName:typedText})}} 
            placeholder="Nombre usuario"
          />
          <TextInput
            style={styles.inputCredential}
            onChangeText={(typedText)=>{this.setState({passWord:typedText})}}
            secureTextEntry = {true}
            placeholder="Contraseña"
          />
          <TouchableOpacity 
          style={styles.buttonLogin}
           onPress={this.fetchUser}
          >
            <Text style={styles.textButtonLogin}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin}
          onPress={() => this.props.navEvent.navigation.navigate('Register')}
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