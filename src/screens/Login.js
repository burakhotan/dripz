import React, { Component } from 'react';
import { View,SafeAreaView,StyleSheet,Text, Button } from 'react-native';
import ButtonComp from '../components/ButtonComp';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default class LoginScreen extends Component {
  render() {
    const { navigation } = this.props;
    return ( 
        <SafeAreaView style={styles.container}>

          <View style={styles.mainBoard}>
            <View style={styles.usernameBar}>
              <TextInput
                placeholder='Username'
              />
          </View>

           <View style={styles.passwordBar}>
              <TextInput
                placeholder='Password'
                secureTextEntry={true}
                  
              />
            </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
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
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    bottomBar:{
        backgroundColor:'#000000',
        flex:0.05,
        flexDirection:'row' ,
        alignItems:'flex-start',
        justifyContent:'space-around',
        padding:7
      },
      mainBoard:{
        flex:0.60,
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      buttonsContainer:{
        flex:0.35,
        justifyContent:'flex-start'
      },
      loginButton:{
        alignSelf: 'stretch',
        backgroundColor: '#000000',
        padding: 10,
        margin:10,
        marginLeft: 100,
        marginRight:100,
        alignItems: 'center',
        borderRadius:10
      },
      loginText:{
        color:'#FFFFFF',
        fontSize:18,
      },
      registerButton:{
        alignSelf: 'stretch',
        backgroundColor: '#000000',
        padding: 10,
        margin:10,
        marginLeft: 100,
        marginRight:100,
        alignItems: 'center',
        borderRadius:10
      },
      registerText:{
        color:'#FFFFFF',
        fontSize:18,
      },
      usernameBar: {
        alignSelf: 'stretch',
        padding:10,
        marginLeft: 50,
        margin:5,
        marginRight:50,
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 2 
        
      },
      passwordBar: {
        alignSelf: 'stretch',
        padding: 10,
        marginLeft: 50,
        margin:5,
        marginRight:50,
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: 2 
      },
    
  });
  
