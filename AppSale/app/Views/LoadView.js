import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';

export default class LoadView extends React.Component {
  state ={
    change1:styles.time1,
    change2:styles.time1,
    change3:styles.time1,
    old:styles.time2
  }
  componentWillMount() {
     let self = this
    setInterval(function(){
        let tempOld = self.state.old 
        let tempNew1 = self.state.change1
        let tempNew2 = self.state.change2 
        let tempNew3 = self.state.change3 
        self.setState({
          old:tempNew3,
          change1:tempOld,
          change2:tempNew1,
          change3:tempNew2,
        })
     }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textLo}>
        <View style={this.state.change1}></View>
        <View style={this.state.change2}></View>
        <View style={this.state.change3}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  time1:{
    height:5,
    width:5,
    backgroundColor:'#AB3A1F',
    borderRadius:2,
    margin:3,
  },
  time2:{
    height:5,
    width:5,
    backgroundColor:'#FFF',
    borderRadius:2,
    margin:3,
  },
  textLo:{
    flexDirection:'row',
  }
});
