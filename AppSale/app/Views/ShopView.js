import React, {Component} from 'react';
import { StyleSheet,FlatList, View,ScrollView,Text} from 'react-native';
import BoxProduct from "./components/BoxProduct";
import firebaseConfig from './../CredentialsFirebase';
import firebase from 'firebase';

export default class ShopView extends React.Component{
	static navigationOptions = {
	    title: 'AppSale',
  	};

	constructor(props) {
		super(props);
	    this.state={
	      listProduct:'',
	      loading:true,
	    }
    
   }


  	componentDidMount() {
	  try{
	  firebase.initializeApp(firebaseConfig);
	  }catch{
	  }
	  let self = this;
	  firebase.database().ref('products/').on('value',function(snapshot){
	  let items = [];
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
				inverted
				  data={this.state.listProduct}
				  renderItem={({item}) => <BoxProduct val={item}/>}
				/>		
			</View>
		);
	}
}