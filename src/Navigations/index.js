import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import LoginScreen from '../Screens/Login';
import SignupScreen from '../Screens/Signup';
import HomeGymDetailsScreen from '../Screens/HomeGymDetailsScreen';
import HomeCoachesDetailsScreen from '../Screens/HomeCoachesDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from '../Config';
export default function Navigations() {

    const Tab = createBottomTabNavigator()
    const [isUser, setIsUser] = useState('')
    Auth(isUser)
        .then(res => {
            setIsUser(res)
            console.log(res)
        })

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
                        <Tab.Screen name="signUp" component={SignupScreen} />
                        <Tab.Screen name="logIn" component={LoginScreen} />
                    </> :
                    <>
                        <Tab.Screen name="homegym" component={HomeGymDetailsScreen} options={{ title: 'GYMS' }} />
                        <Tab.Screen name="homecoach" component={HomeCoachesDetailsScreen} options={{ title: 'COACHES' }} />
                    </>}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
