

import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import authService from './AuthService';

import {
  
  StyleSheet,
  Text,
  TextInput,TouchableHighlight,
  View
} from 'react-native';

export default class Loogin extends Component {
    constructor(props){
        super(props);

         this.state={
             username:'sometext',
             password:'sometext',
        //             animated:true,
                   indeterminate: false,
         //         progress:0
         }
    }

    render(){
        var errCtrl=<View />
        if(!this.state.success && this.state.badCredentials){
            errCtrl=<Text style={styles.error} >this is a bad credentials</Text>
        }
        if(!this.state.success && this.state.unknownError){
            errCtrl=<Text style={styles.error}> this is unknown error</Text> 
        }
        return (
            <View style={styles.container}>
                {/*<Image style={styles.logo} source={require('image!Octocat')} />*/}
                <Text style={styles.heading}>Github browser</Text>
                <TextInput 
                onChange={(text)=>this.setState({username:text})}
                style={styles.loginInput} 
                placeholder="Github username">
                </TextInput>
               
                <TextInput 
                onChange={(text)=>this.setState({password:text})}
                style={styles.loginInput} 
                placeholder="Github password" 
                secureTextEntry>
                </TextInput>
                <TouchableHighlight 
                onPress={this.onLoginPressed.bind(this)}
                style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableHighlight>
                {errCtrl}
               <Progress.Circle style={styles.loader}  
               indeterminate={this.state.indeterminate}
              
              />
            </View>


        );
    }
 onLoginPressed() {
   
    console.log("u are name is " + this.state.username);
    this.setState({indeterminate:true});
    //var authService = require('./AuthService');
    authService.login({
           
                username:this.state.username,
                password:this.state.password
     },(result)=>{
         this.setState(Object.assign({
             indeterminate:false
         }, result))
         if(results.success && this.props.onLogin){
                this.props.onLogin();
            }
        if (results.sucess && this.props.onlogin){
            return this.props.onlogin;
        }
     }
    );
}
   
   }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        paddingTop: 40,
        padding: 10,
        alignItems: 'center',
        flex: 1
    },
    loader:{
        marginTop:10,
        width:200,
        alignItems:'center'
            },
    logo: {
        width: 66,
        height:55
    },
    heading: {
        fontSize: 30,
        margin: 10,
        marginBottom: 20
    },
    loginInput: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 0,
        color: '#48BBEC'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    error:{
        color:'red'

    }
});

