import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens sneakers
import SneakersScreen from './screens/Sneakers';
import SearchSneakersScreen from './screens/SearchSneakers';
import ModalSneakersScreen from './screens/ModalSneakers';  
import LoginScreen from './screens/Login';
import MainScreen from './screens/Main';

//screens apparel
import ApparelScreen from './screens/Apparel';
import SearchApparelScreen from './screens/SearchApparel';
import ModalApparelScreen from './screens/ModalApparel';

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
            <Stack.Screen name= "SearchSneakers" component={SearchSneakersScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "ModalSneakers" component={ModalSneakersScreen}
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
            <Stack.Screen name= "Apparel" component={ApparelScreen}
            options={{
                headerShown:false
            }}
            
            />
            <Stack.Screen name= "SearchApparel" component={SearchApparelScreen}
            options={{
                headerShown:false
            }}
            
            />
            <Stack.Screen name= "ModalApparel" component={ModalApparelScreen}
            options={{
                headerShown:false
            }}
            
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;