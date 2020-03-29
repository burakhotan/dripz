import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import ButtonComp from '../components/ButtonComp';
//screens

export default class ModalSneakersScreen extends Component {


  render() {
    const {selectedItem} = this.props.route.params;
    const { navigation } = this.props;
    return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>
        <ButtonComp
          photo = {require('../assets/buttonImages/goback.png')}
          screen={'Sneakers'}
          navigation={navigation}
        >
        </ButtonComp>
        <Text style={styles.snkrNameText}>{selectedItem.sneakerName}</Text>  
      </View>
      <View style={styles.mainBoard}>
        <Text style={styles.sneakerNameStyle}>{selectedItem.sneakerName}</Text>
        <Image 
          style={styles.imageStyle}
          source ={selectedItem.picture}/>
        <Text style={{fontWeight:'bold'}} > Retail Price:{selectedItem.retailPrice}</Text>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    imageStyle:{
      width:300,
      height:200,
      borderColor:'#DEDAD1',
      borderWidth:0.5,
    },
    sneakerNameStyle:{
      fontWeight:'bold',
      textAlign:'center'
    },
    header: {
      flex: 0.09,
      flexDirection:'row',
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent:'flex-start'
  
    },
    mainBoard:{
      flex: 0.91,
      padding: 10,
      justifyContent:'space-around',
      alignItems:'center'
      
    },
    snkrNameText:{
      fontWeight:'bold',
      color:'#FFFFFF',
      textAlign:'auto',
      paddingLeft:10
      

    }
  });
  