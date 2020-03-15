import React, { Component } from 'react';
import { View,StyleSheet,TouchableOpacity,Image } from 'react-native';

//SCREENS
import Sneakers from './Sneakers';
import Apparel from './Apparel';

export default class Main extends Component {

  render() {
      const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.sneakersContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Sneakers')} style={styles.sneakerButton}>
                <Image source ={require('../assets/buttonImages/sneaker.png')} style={styles.button1}/>
            </TouchableOpacity>
        </View>
        <View style={styles.apparelContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Apparel')} style={styles.apparelButton}>
                <Image source ={require('../assets/buttonImages/jacket.png')} style={styles.button2}/>
            </TouchableOpacity>
            
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({ //STYLES
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      flexDirection:'row'
    },
    sneakersContainer:{
      flex:0.5,
      backgroundColor:'#000000',
      borderRightWidth:0.5,
      borderRightColor:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center'

    },
    apparelContainer:{
      flex:0.5,
      backgroundColor:'#000000',
      borderLeftWidth:0.5,
      borderLeftColor:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center'     
    },
    sneakerButton:{
      
    },
    apparelButton:{

    },
    button1:{
     width:150,
     height:100
    },
    button2:{
     width:150,
     height:150
    } 
  });
  
