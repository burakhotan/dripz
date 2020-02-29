import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import HomeScreen from './screens/Home'    

const Stack = createStackNavigator();

 function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name= "Home" component={HomeScreen}
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;