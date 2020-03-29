import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,Image } from 'react-native';
import data from '../data/sneakersData';
export default class SearchBarComp extends Component {
    state = {
        text: '',
        contacts: data
      };
      searchFilter = (text) => {
        const newData = data.filter(item => {
          const listItem = `${item.sneakerName.toLowerCase()}`;
    
          return listItem.indexOf(text.toLowerCase()) > -1;
        });
        this.setState({
          contacts: newData,
        });
      };
      render() {
        const { text } = this.state;
        return (
            <View style={styles.searchBar}>
              <Image 
              source={require('../assets/buttonImages/search-black.png')} 
              style={styles.searchIcon}
              />  
              <TextInput
                onChangeText={(text) => {
                  this.setState({
                    text,
                  });
                  this.searchFilter(text);
                }}
                value={text}
                style={styles.searchInput}
              />
            </View>
        );
}
}
const styles = StyleSheet.create({
    searchBar: {
      width:300,
      height:40,
      backgroundColor:'#FFFFFF',
      borderRadius:10,
      marginVertical:10,
      alignSelf:'center',
      elevation:5,
      flexDirection:'row'
    },
    searchInput: {
      fontSize:15,
      
    },
    searchIcon:{
      marginHorizontal:10,
      width:20,
      height:20,
      marginVertical:3,
      alignSelf:'center'  
    }

  });
  
