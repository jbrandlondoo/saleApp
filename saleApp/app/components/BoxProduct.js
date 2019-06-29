import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image,Alert} from 'react-native';


export default class BoxProduct extends React.Component{
	url = 'https://i.pinimg.com/236x/5b/f4/b7/5bf4b77a469746a0d45c52bac9c125fa.jpg';
	add = ()=>{
    	Alert.alert("ir a Wattsapp");
  	}
	render(){
		return (
		<View style={styles.showProduct}>
        	<View style={styles.data}> 
        	<Text style={styles.nameTxt}>La mejor del anime</Text> 
        	<Text style={styles.nameTxt}>--</Text> 
        	<Text style={styles.nameTxt}>Niko robbin</Text> 
        	</View>
        	<Image style={styles.image} source={{uri:this.url}}/> 
        	<Text style={styles.cost}>2^infinito$</Text>
        	<TouchableOpacity onPress={()=>{this.add()}}>
			    <Text style={styles.whattsapptxt}>Whattsapp</Text>
			    </TouchableOpacity>
        	<Text style={styles.date}>27/05/2019</Text>
        </View>
		);
	}
}

const styles = StyleSheet.create({
  data:{
    flexDirection:'row',
  },
  showProduct:{
    height: 390,
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
