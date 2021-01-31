import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ParkingScreen from '../Screens/ParkingScreen';
import SplashScreen from '../Screens/SplashScreen';
import ParkedScreen from '../Screens/ParkedScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Parking' ,headerLeft:null,headerTitleAlign:'center'}}
          
        />
         <Stack.Screen
          name="Parking"
          component={ParkingScreen}
          options={{ title: 'ParkingLot' }}
        />
         <Stack.Screen
          name="Parked"
          component={ParkedScreen}
          options={{ title: 'ParkedLot' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;