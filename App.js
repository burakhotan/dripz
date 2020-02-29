import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button, TouchableOpacity,Image, ScrollView} from 'react-native';
import ButtonComp from './src/components/ButtonComp';
import CardComp from './src/components/CardComp';
import MainCard from './src/components/MainCard';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
        <Image source ={require('./src/assets/logo/dripz_logo_white.png')} style={styles.logoImg}/>
        </View> 

        <View style={styles.mainBoard}>
          <MainCard
            mainCardText={'AİR JORDAN 1 HİGH OG " UNC TO CHİCAGO " BLACK / DK POWDER BLUE GYM RED'}
            mainSneakerImg={require('./src/assets/sneakerImages/jordan.jpg')}
            mainPriceText={'$180'}
          />
        </View>

        <View style={styles.bottomBar}>
          <ButtonComp
          photo = {require('./src/assets/buttonImages/search.png')}
          />
          <ButtonComp
          photo = {require('./src/assets/buttonImages/sneaker.png')}
          />
          <ButtonComp
          photo = {require('./src/assets/buttonImages/profile.png')}
          />

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({ //STYLES
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  topBar: {
    flex: 0.1,
    flexDirection:'row',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent:'center'

  },
  mainBoard:{
    flex: 0.85,
    padding: 10,
    justifyContent:'center',
    alignItems:'center'
    
  },
  bottomBar:{
    backgroundColor:'#000000',
    flex:0.05,
    flexDirection:'row' ,
    alignItems:'flex-start',
    justifyContent:'space-around',
    padding:7

  },
  logoImg:{
    width:150,
    height:150
    },
   
  
  
});