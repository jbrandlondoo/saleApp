import React, {Component} from 'react';
import {StyleSheet, Text,AsyncStorage, View,TouchableOpacity,Image,Alert,TextInput} from 'react-native';
import firebaseConfig from './../../CredentialsFirebase';
import firebase from 'firebase';

export default class Profile extends React.Component{
    constructor(){
    super();
    this.state = {
      userName:'',
      passWord:'',
      phone:'',
    }
  }

  async componentWillMount() {
  try{
  firebase.initializeApp(firebaseConfig);
  }catch{
  }
    await AsyncStorage.getItem('session').then((value)=>{
    if(value){
        this.setState({
          userName:value,
        });
      }
    });
    let self = this
    firebase.database().ref('users/'+this.state.userName).on('value',function(snapshot){
        let phone = snapshot.val().phone;
        let passWord = snapshot.val().passWord;
        self.setState({
          phone:phone,
          passWord:passWord,
        })
    });

  };

logout = ()=>{
  AsyncStorage.removeItem('session');
  this.props.navEvent.navigation.navigate('Login');
}

saveChange(){
  
  Alert.alert('¡Oops! todavía no está disponible')
} 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerClose}>
          <View style={{flex:1}}></View>
          <TouchableOpacity style={styles.btnClose}
            onPress={this.logout}
          >
            <Text style={styles.txtClose}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
        <Text>Usuario : {this.state.userName}</Text>
        <Text>Teléfono : {this.state.phone}</Text>        
        <TextInput
          style={styles.inputUpdateData}
          placeholder='nuevo'
          keyboardType={'numeric'}
          onChangeText={(typedText)=>{this.setState({phone:typedText})}}          
        />
        <Text>Contraseña</Text>
         <TextInput
          style={styles.inputUpdateData}
          placeholder='nueva'
          secureTextEntry = {true}
          onChangeText={(typedText)=>{this.setState({passWord:typedText})}}            
        />
        <View style={styles.containerSave} >
          <TouchableOpacity style={styles.btnSave} onPress={()=>{
          Alert.alert('¡Oops! todavía no está disponible')
        }}>
            <Text style={styles.txtSave}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }  

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    margin:3
  },
  containerClose:{
    flexDirection:'row',
    margin:2,
  },
  btnClose:{
    height: 37,
    width: 100,
    marginTop:3,
    justifyContent: 'center',
  },
  txtClose:{
    fontSize: 15,
    color:'red',
  },
  inputUpdateData:{
    borderWidth:0.3,
    height:37,
    margin:5,
    borderRadius:3,
    width:300,
  },
  containerSave:{
  },
  btnSave:{
    height: 37,
    width: 150,
    marginTop:3,
    borderRadius:5,
    borderWidth:0.3,
    borderTopWidth:0,
    borderLeftWidth:0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSave:{
    fontSize: 15,
  },
});
