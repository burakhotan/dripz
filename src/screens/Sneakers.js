import * as React from 'react';
import {Platform, StyleSheet, Text, View,Button, TouchableOpacity,Image,SafeAreaView} from 'react-native';
import ButtonComp from '../components/ButtonComp';
import SampleCard from '../components/SampleCard';
import SearchBarComp from '../components/SearchBarComp';
 function SneakersScreen ({navigation,screen}) {
    return (
      <SafeAreaView style={styles.container}> 
        <View style={styles.topBar}>
           <Image source ={require('../assets/logo/dripz_logo_white.png')} style={styles.logoImg}/>
        </View> 
        <View>
          <SearchBarComp/>
          <Text style={styles.latestText}>Latest Released</Text>
        </View>
        <View style={styles.mainBoard}>
          
          <SampleCard
          navigation={navigation}
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
    flex: 0.81,
    
  },
  bottomBar:{
    backgroundColor:'#000000',
    flex:0.05,
    flexDirection:'row' ,
    alignItems:'flex-start',
    justifyContent:'space-around',
    padding:7,
    borderRadius:12,
    marginHorizontal:50

  },
  logoImg:{
    width:150,
    height:150
  },
  welcomeText:{
    
  },
  card:{
    width:50,
    height:100,
    backgroundColor:'#fd3f1e',
    elevation:20
  },
  latestText:{
    fontSize:20,
    fontWeight:'bold',
    paddingHorizontal:10
  }
});
