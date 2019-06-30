import React, {Component} from 'react';
import Profile from "./components/Profile";
export default class ProfileView extends React.Component{
	static navigationOptions = {
	    title: 'SaleApp',
  	};
	render(){
		return(
			<Profile/>
		);
	}
}
