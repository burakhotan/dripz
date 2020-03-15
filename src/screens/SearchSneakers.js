import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import ButtonComp from '../components/ButtonComp';
import data from '../data/jordanData';
import ModalSneakersScreen from './ModalSneakers';

export default class SearchSneakersScreen extends Component {
  
  state = {
    text: '',
    contacts: data
  };

  renderContactsItem = ({ item, index}) => {
    return (
      <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => this.props.navigation.navigate('ModalSneakers',{selectedItem:item},)}
      >
        
        <Image
          style={styles.avatar}
          source={{ uri: item.picture }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name} >{item.sneakerName}</Text>
        </View>
      </TouchableOpacity>
    )

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
    const { navigation } = this.props;
    const { text } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            onChangeText={(text) => {
              this.setState({
                text,
              });
              this.searchFilter(text);
            }}
            value={text}
            placeholder='Search by brand name, model, etc.'
            style={styles.searchInput}
          />
        </View>
        <View style={styles.searchElements}>
          <FlatList
            renderItem={this.renderContactsItem}
            keyExtractor={(item) => item._id}
            data={this.state.contacts}
          />
        </View>

        <View style={styles.bottomBar}>
          <ButtonComp
            photo={require('../assets/buttonImages/search.png')}
            screen={'SearchSneakers'}
            navigation={navigation}

          />
          <ButtonComp
            photo={require('../assets/buttonImages/sneaker.png')}
            screen={'Sneakers'}
            navigation={navigation}
          />
          <ButtonComp
            photo={require('../assets/buttonImages/profile.png')}
            screen={'Login'}
            navigation={navigation}
          />

        </View>
      </SafeAreaView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000000'
  },
  avatar: {
    width: 70,
    height: 50,
    marginHorizontal: 5,
    borderWidth:0.5,
    borderColor:'#DEDAD1'
  },
  name: {
    fontSize: 10
  },
  bottomBar: {
    backgroundColor: '#000000',
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 7,
  },
  searchBar: {
    flex: 0.07,
    padding: 10,
    backgroundColor:'#FFFFFF',
    borderWidth:0.7,
    borderColor:'#000000'
  },
  searchInput: {
    fontSize: 16
  },
  searchElements: {
    flex: 0.88
  }
});
