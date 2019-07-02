import React, {Component} from 'react';
import { StyleSheet,FlatList, View,ScrollView,Text} from 'react-native';
import BoxProduct from "./components/BoxProduct";
import firebaseConfig from './../CredentialsFirebase';
import firebase from 'firebase';

export default class ShopView extends React.Component{
	static navigationOptions = {
	    title: 'SaleApp',
  	};

  	constructor(props) {
    super(props);
    
   }
   state={
      listProduct:'',
      loading:true,
    }
  	componentWillMount() {
	  try{
	  firebase.initializeApp(firebaseConfig);
	  }catch{
	  }
	  var self = this;
	  firebase.database().ref('products/').on('value',function(snapshot){
	  var items = [];
      snapshot.forEach((child) => {
        items.push({
            nameProduct:child.val().description,
      		cost:child.val().cost,
      		url:child.val().url,
      		nameUser:child.val().userName,
        });
      });

      self.setState({
        listProduct: items,
        loading:false,
      });

        });

	}
	render(){
		if (this.state.loading) {
			return(
			<View>
			</View>
			);
		}
		return(
			<View>
				<FlatList
				  data={this.state.listProduct}
				  renderItem={({item}) => <BoxProduct val={item}/>}
				/>		
			</View>
		);
	}
}