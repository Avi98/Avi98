import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
 TabBarIOS,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default  class AppContainer extends Component{
    //  constructor(props){
    //     super(props);

    //     //  this.state={
    //     //      selectedTab:'feed'
    //     //  }
    // }
  render(){
  return(
    /*<TabBarIOS style={styles.container}>
        <TabBarIOS.Item
            title="feed"
            selected={this.state.selectedTab=='feed'}
            onPress={()=>this.setState({selectedTab:'feed'})}
            />
            <Text style={styles.welcome}>this tab1</Text>
    </TabBarIOS>*/


    <ScrollableTabView >
        <Text tabLabel="React" ></Text>
        <Text tabLabel="Flow" ></Text>
      
      </ScrollableTabView>

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
 welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});