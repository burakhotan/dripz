import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import SneakersScreen from './screens/Sneakers';
import SearchScreen from './screens/Search';
import ModalScreen from './screens/Modal';  
import LoginScreen from './screens/Login';
import MainScreen from './screens/Main';
import ClothesScreen from './screens/Clothes';

const Stack = createStackNavigator();

  function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">

            <Stack.Screen name= "Sneakers" component={SneakersScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "Search" component={SearchScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "Modal" component={ModalScreen}
            options={{
                headerShown:false,
                
            }}
            />
            <Stack.Screen name= "Login" component={LoginScreen}
            options={{
                headerShown:false
            }}
            
            />
            <Stack.Screen name= "Main" component={MainScreen}
            options={{
                headerShown:false
            }}
            
            />
            <Stack.Screen name= "Clothes" component={ClothesScreen}
            options={{
                headerShown:false
            }}
            
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;