import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import LoginScreen from '../Screens/Login';
import SignupScreen from '../Screens/Signup';
import HomeGymDetailsScreen from '../Screens/HomeGymDetailsScreen';
import HomeCoachesDetailsScreen from '../Screens/HomeCoachesDetailsScreen';
import DetailScreen from '../Screens/DetailScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screens/ProfileScreen';
import { Entypo, Ionicons,MaterialCommunityIcons, AntDesign,FontAwesome5,FontAwesome } from '@expo/vector-icons';

export default function Navigations() {

    const Tab = createBottomTabNavigator()
    const [isUser, setIsUser] = useState('')


    const auth = (value) => {
        console.log(`auth == ${value}`)
        setIsUser(value)
    }



    isUser ? console.log('user is here') : console.log('user is not here')

    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                labelStyle: {
                    textTransform: "none",
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#f3b149',
                    fontFamily: 'OpenSans',
                }
            }}>

                {!isUser ?
                    <>
                        <Tab.Screen name="signUp" component={SignupScreen} initialParams={{ x: auth }} />
                        <Tab.Screen name="logIn" component={LoginScreen} initialParams={{ x: auth }} />
                    </> :

                    <>
                        <Tab.Screen
                            name="homegym"
                            component={HomeGymDetailsScreen}
                            options={{
                                tabBarLabel: 'GYMS',
                                tabBarIcon: () => (
                                    <FontAwesome5 name="dumbbell" size={24} color="#f3b149" />
                                )
                            }}
                            initialParams={{ x: auth }} />

                        <Tab.Screen name="homecoach" component={HomeCoachesDetailsScreen} options={{
                            tabBarLabel: 'COACHES',
                            tabBarIcon: () => (
                                <MaterialCommunityIcons name="weight-lifter" size={24} color="#f3b149" />
                            )
                        }} initialParams={{ x: auth }} />
                        <Tab.Screen name="details" component={DetailScreen}
                            options={{
                                tabBarLabel: 'DETAILS',
                                tabBarIcon: () => (
                                    <AntDesign name="menuunfold" size={24} color="#f3b149" />
                                )
                            }}
                        />
                        <Tab.Screen name="profile" component={ProfileScreen}
                            options={{
                                tabBarLabel: 'PROFILE',
                                tabBarIcon: () => (
                                    <FontAwesome name="user" size={24} color="#f3b149" />
                                )
                            }}
                            initialParams={{ x: auth }} />

                    </>

                }

            </Tab.Navigator>
        </NavigationContainer>
    );
}
