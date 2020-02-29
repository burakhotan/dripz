import React, { Component } from 'react';
import {StyleSheet, View, Text,TouchableOpacity,Image} from 'react-native';

export default class ButtonComp extends Component {
  render() {
    const {photo,navigation,screen}=this.props;
    return (
      <View>
       <TouchableOpacity>
            <View style={styles.mButtonContainer}>
              <Image source ={photo} style={styles.button1}/>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    mButtonContainer:{
        padding:5,
        
      },
      button1:{
        width:30,
        height:22
      }

});

