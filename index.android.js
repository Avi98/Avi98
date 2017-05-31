/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Loogin from './loogin';
import AppContainer from './appContainer';

export default class login extends Component {
  constructor(props){
    super(props);

    this.state={
             isLogin:false
         }
  }
  render() {
   
      if(!this.state.isLogin){
      return(
          <AppContainer />
      );
      }
      else{
        return(

    <View style={styles.container}>
        <Loogin  onlogin={this.onlogin}/>
      </View>
        );
      }
  }
onlogin(){
  this.setState({
    isLogin:true
  })
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('login', () => login);
