import React, { Component } from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';

//screens
import SearchScreen from './Search';

export default class ModalScreen extends Component {

  render() {
      const {navigation,brandName,sneakerName,price}=this.props;
      const getter= new SearchScreen();
      const a =  getter.getValueContacts().toString();
    return (
    <View style={styles.modalContainer}>
     <Text >{a}</Text>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    modalContainer:{
        alignItems:'center',
        justifyContent:'center'
    }
  });
  