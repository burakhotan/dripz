import React, {Component} from 'react';
import {Text, View,StyleSheet,SafeAreaView,FlatList,Image,TouchableOpacity,TextInput} from 'react-native';
import ButtonComp from '../components/ButtonComp';
import data from '../data/jordanData';

function SearchScreen ({navigation}) {
    renderContactsItem = ({item,index}) => {
      return(
        <TouchableOpacity style={styles.itemContainer}>
          <Image 
          style={styles.avatar} 
          source={{uri:item.picture}}    
          />
          <View style={styles.textContainer}>
              <Text style={styles.name} >{item.sneakerName}</Text>
          </View>
        </TouchableOpacity>
      )

    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput placeholder='Search' style={styles.searchInput}
          />
        </View>
        <View style={styles.searchElements}>
          <FlatList 
          renderItem={this.renderContactsItem}
          keyExtractor={(item)=>item._id}
          data={data}
          />
        </View>

        <View style={styles.bottomBar}>
          <ButtonComp
          photo = {require('../assets/buttonImages/search.png')}
          screen={'Search'}
          navigation={navigation}
          
          />
          <ButtonComp
          photo = {require('../assets/buttonImages/sneaker.png')}
          screen={'Home'}
          navigation={navigation}
          />
          <ButtonComp
          photo = {require('../assets/buttonImages/profile.png')}
          />

        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create ({
    container:{
      flex: 1,
      backgroundColor: '#F5F5F5'
    },
    itemContainer:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:10,
      paddingLeft:5,
      borderBottomWidth:1,
      borderBottomColor:'#000000'
    },
    avatar:{
      width:60,
      height:50,
      marginHorizontal:5
    },
    name:{
      fontSize:10
    },
    bottomBar:{
      backgroundColor:'#000000',
      flex:0.05,
      flexDirection:'row' ,
      alignItems:'flex-start',
      justifyContent:'space-around',
      padding:7
    },
    searchBar:{
      flex:0.07,
      padding:10
    },
    searchInput:{
      fontSize:16
    },
    searchElements:{
      flex:0.88
    }
});
  export default SearchScreen;