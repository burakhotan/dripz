import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet,TouchableOpacity,Image, ImageBackground } from 'react-native';
import data from '../data/sneakersData';
import ModalSneakersScreen from '../screens/ModalSneakers';
export default class SampleCard extends Component {
  state = {
    text: '',
    contacts: data
  };
  renderContactsItem = ({ item}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemContainer}
        onPress={() => this.props.navigation.navigate('ModalSneakers',{selectedItem:item},)}
        >
          <View style={[styles.card,{backgroundColor:item.color}]}>
            <Text style={styles.cardSneakerName}>
            {item.sneakerName}
            </Text>
            <Image
              style={styles.avatar}
              source={ item.picture }
            />
          </View>
        </TouchableOpacity>
      </View> 
    )
  };

  render() {
    return (
      <View style={styles.list}>
        <FlatList
            renderItem={this.renderContactsItem}
            keyExtractor={(item) => item._id}
            data={this.state.contacts}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
         />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,

  },
  avatar: {
    width: 150,
    height: 100,
    position:'absolute',
  },
  list:{
   flex:0.6
  },
  sneakerName: {
    fontSize: 10,
  },
  card:{
    alignItems:'center',
    justifyContent:'center',
    width:170,
    height:210,
    backgroundColor:'#FEFEFE',
    borderRadius:10,
    marginHorizontal:7,
    elevation: 10,
    
    
  },
  cardSneakerName:{
   opacity:0.1,
   position: 'absolute',
   fontSize:30,
   fontWeight:'bold',
   textAlign:'auto',
  }

 
});
