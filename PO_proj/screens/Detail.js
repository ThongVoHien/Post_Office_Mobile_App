import React, { Component } from 'react';
import {Image, Text, StyleSheet, Button, View, Dimensions, Vibration} from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Card, ListItem} from 'react-native-elements'

export default class Detail extends React.Component {
 constructor(props){
 super(props);
 this.state = {
 backgroundColor: 'yellow'
 }; 
 }
 static navigationOptions = {
    title: 'Package Detail',
    headerStyle: {backgroundColor: '#d69523'},
    headerTitleStyle: {color:'white'},
    headerBackTitleStyle: {color: 'white'},
    headerTintColor: 'white',
 }
 render(){
 const { navigate } = this.props.navigation;
 const { params } = this.props.navigation.state;
 return (
  <Card title = {params.trackno}>
   <Text style={{height: 20, fontWeight: 'bold', color: '#514e48'}}>Name:                            {params.name}</Text>
   <Text style={{height: 20, fontWeight: 'bold',color: '#514e48'}}>Carrier                           {params.carrier}</Text>
   <Text style={{height: 20, fontWeight: 'bold',color: '#514e48'}}>Status:                           {params.status}</Text>
   <Text style={{height: 20, fontWeight: 'bold',color: '#514e48'}}>Date:                              {params.month}/{params.day}/{params.year}</Text>
  </Card>
 
 );
}
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    margin: 20
  },

});
