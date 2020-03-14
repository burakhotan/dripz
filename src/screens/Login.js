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
          screen={'Search'}
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
      backgroundColor: '#FFFFFF'
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
        flex:0.95,
        justifyContent:'space-around',
     
      },
      loginButton:{
        backgroundColor:'#000000',
        flexDirection:'row',
        borderRadius:6,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
      },
      loginText:{
        color:'#FFFFFF',
        fontSize:18,
      },
      registerButton:{
        backgroundColor:'#000000',
        flexDirection:'row',
        borderRadius:6,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
      },
      registerText:{
        color:'#FFFFFF',
        fontSize:18,
      },
      usernameBar: {
        flex: 0.07,
        flexDirection:'row',
        padding: 10,
        backgroundColor:'#FFFFFF',
        borderWidth:0.7,
        borderColor:'#000000',
        
      },
      passwordBar: {
        flex: 0.07,
        padding: 10,
        backgroundColor:'#FFFFFF',
        borderWidth:0.7,
        borderColor:'#000000',
      },
    
  });
  
