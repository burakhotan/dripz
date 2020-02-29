import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';

export default class CardComp extends Component {
    
  render() {
    const {sneaker}=this.props;
    return (
        <TouchableOpacity>
        <View style ={styles.cardContainer}>
            <Image source ={sneaker} style={styles.photo1}/>
        </View>
        </TouchableOpacity>
      
    );
  }
}
const styles = StyleSheet.create ({
    cardContainer:{
        width:100,
        height:100,
        borderWidth:3,
        borderColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center'
    },
    photo1:{
        width:97,
        height:97,
        resizeMode:'center'
    }

});

