import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import LoginScreen from '../Screens/Login';
import SignupScreen from '../Screens/Signup';
import HomeGymDetailsScreen from '../Screens/HomeGymDetailsScreen';
import HomeCoachesDetailsScreen from '../Screens/HomeCoachesDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Navigations() {

    const Tab = createBottomTabNavigator()
    const [isUser, setIsUser] = useState('')
   
  
        const auth = (value) =>{
            console.log(`auth == ${value}`)
            setIsUser(value)
        }
   
    isUser ? console.log('user is here') : console.log('user is not here')

    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                labelStyle: {
                    textTransform: "none",
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#f3b149',
                    fontFamily: 'OpenSans',
                }
            }}>

                {!isUser ?
                    <>
                        <Tab.Screen name="signUp" component={SignupScreen} initialParams={{x:auth}} />
                        <Tab.Screen name="logIn" component={LoginScreen} initialParams={{x:auth}}  />
                    </> :
                    <>
                        <Tab.Screen name="homegym" component={HomeGymDetailsScreen} options={{ title: 'GYMS' }} initialParams={{x:auth}}  />
                        <Tab.Screen name="homecoach" component={HomeCoachesDetailsScreen} options={{ title: 'COACHES' }}  initialParams={{x:auth}} />
                    </>}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
