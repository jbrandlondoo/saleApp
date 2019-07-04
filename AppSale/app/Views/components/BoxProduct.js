import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image,Alert} from 'react-native';


export default class BoxProduct extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nameProduct:this.props.val.nameProduct,
      date:"27/05/2019",
      cost:this.props.val.cost,
      url:this.props.val.url,
      nameUser:this.props.val.nameUser,
    }
  }
	render(){
		return (
		<View style={styles.showProduct}>
        	<View style={styles.data}> 
        	<Text style={styles.nameTxt}>{this.state.nameProduct}</Text> 
        	<Text style={styles.nameTxt}>--</Text> 
        	<Text style={styles.nameTxt}>{this.state.nameUser}</Text> 
        	</View>
        	<Image style={styles.image} source={{uri:this.state.url}}/> 
        	<Text style={styles.cost}>Valor:{this.state.cost+'$'}</Text>
        </View>
		);
	}
}

const styles = StyleSheet.create({
  data:{
    flexDirection:'row',
  },
  showProduct:{
    height: 370,
    backgroundColor: '#FFFFFF',
    borderWidth:0.5,
    borderRadius:5,
    margin:3,
  },
  cost:{
    fontSize:15,
    marginLeft:10,
  },
  image:{
    height:300,
    resizeMode:'contain',
    borderRadius:5,
  },
  whattsapptxt:{
    fontSize:15,
    marginLeft:10,
    color:'green'
  },
  nameTxt:{
    fontSize:15,
    marginLeft:10,
  },
  date:{
    fontSize:10,
    marginLeft:10,
  },
});
