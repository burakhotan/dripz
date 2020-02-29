import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';

export default class MainCard extends Component {
  
render() {
  const {mainCardText,mainSneakerImg,mainPriceText}=this.props;
    return (
      <View style= {styles.main}>
        <Text style={styles.mainSneakerText}>{mainCardText}</Text>
        <Image source = {mainSneakerImg} style= {styles.mainSneaker} />
        <TouchableOpacity style={styles.priceButton}>
          <Text style={styles.priceText}>{mainPriceText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  mainSneaker:{
    height:350,
    width:350

  },
  mainSneakerText:{
    fontWeight:'bold',
    textAlign:'center'

  },
  priceText:{
    color:'#FFFFFF'
  },
  priceButton:{
    alignSelf:'center',
    borderRadius:8,
    backgroundColor:'#000000',
    paddingHorizontal:10,
    padding:3

  },
});