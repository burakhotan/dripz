import * as React from 'react';
import {Platform, StyleSheet, Text, View,Button, TouchableOpacity,Image,SafeAreaView} from 'react-native';
import ButtonComp from '../components/ButtonComp';
import CardComp from '../components/CardComp';
import MainCard from '../components/MainCard';


function ApparelScreen ({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
          <Image source ={require('../assets/logo/dripz_logo_white.png')} style={styles.logoImg}/>
      </View> 

      <View style={styles.mainBoard}>
        <MainCard
          mainCardText={'Nikelab x OFF-WHITE Mercurial NRG X Hoodie Black'}
          mainSneakerImg={require('../assets/apparelImages/offwhite.jpg')}
          mainPriceText={'$659'}
        />
        
      </View>

      <View style={styles.bottomBar}>
        <ButtonComp
        photo = {require('../assets/buttonImages/search.png')}
        screen={'SearchApparel'}
        navigation={navigation}
        
        />
        <ButtonComp
        photo = {require('../assets/buttonImages/jacket.png')}
        screen={'Apparel'}
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
export default ApparelScreen;

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

