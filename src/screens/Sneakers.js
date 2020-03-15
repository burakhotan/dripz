import * as React from 'react';
import {Platform, StyleSheet, Text, View,Button, TouchableOpacity,Image,SafeAreaView} from 'react-native';
import ButtonComp from '../components/ButtonComp';
import CardComp from '../components/CardComp';
import MainCard from '../components/MainCard';



 function SneakersScreen ({navigation}) {
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
            <Image source ={require('../assets/logo/dripz_logo_white.png')} style={styles.logoImg}/>
        </View> 

        <View style={styles.mainBoard}>
          <MainCard
            mainCardText={'JORDAN 1 RETRO HIGH TRAVIS SCOTT'}
            mainSneakerImg={require('../assets/sneakerImages/travis.jpg')}
            mainPriceText={'$770'}
          />
          
        </View>

        <View style={styles.bottomBar}>
          <ButtonComp
          photo = {require('../assets/buttonImages/search.png')}
          screen={'SearchSneakers'}
          navigation={navigation}
          
          />
          <ButtonComp
          photo = {require('../assets/buttonImages/sneaker.png')}
          screen={'Sneakers'}
          navigation={navigation}
          />
          <ButtonComp
          photo = {require('../assets/buttonImages/profile.png')}
          screen={'Login'}
          navigation={navigation}
          />

        </View>
      </SafeAreaView>
    );
  }
  export default SneakersScreen;

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
