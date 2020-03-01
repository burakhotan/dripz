import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';    

const Stack = createStackNavigator();

 function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen name= "Home" component={HomeScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "Search" component={SearchScreen}
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;