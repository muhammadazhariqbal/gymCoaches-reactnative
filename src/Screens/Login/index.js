import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import headIcon from '../../../assets/ic_login.png';
import { Foundation, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Auth from '../../Config';

export default function LoginScreen({ navigation, route }) {
    navigation.setOptions({ tabBarVisible: false })
    const [showloader, setShowLoader] = useState(false)
    const [onFocusValue, setOnFocusValue] = useState('false')
    const [loaded] = useFonts({
        OpenSans: require('../../../assets/Open_Sans/OpenSans-Regular.ttf')
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={headIcon} />
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.main}>
                    <Text style={styles.head}>Login</Text>
                    <Text style={styles.para}>Pease sign in to continue</Text>
                    <View style={onFocusValue === 'emailfocus' ? styles.onfocus : styles.inputContainer}>
                        {onFocusValue === 'emailfocus' ? <Text style={styles.label}>EMAIL</Text> : null}
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                            <Foundation name="mail" size={24} color="gray" />
                            <TextInput
                                onFocus={() => { setOnFocusValue('emailfocus') }}
                                onBlur={() => { setOnFocusValue(false) }}
                                style={styles.input}
                                placeholder="Email" />
                        </View>
                    </View>
                    <View style={onFocusValue === 'pswrdfocus' ? styles.onfocus : styles.inputContainer}>
                        {onFocusValue === 'pswrdfocus' ? <Text style={styles.label}>PASSWORD</Text> : null}
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                            <Foundation name="lock" size={24} color="gray" />
                            <TextInput
                                secureTextEntry
                                onFocus={() => { setOnFocusValue('pswrdfocus') }}
                                onBlur={() => { setOnFocusValue(false) }}
                                style={styles.input}
                                placeholder="Password" />
                        </View>
                    </View>
                    {!showloader ? <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            setShowLoader(true)
                         setTimeout(() => {
                               route.params.x(true)
                                setShowLoader(false)
                            }, 2000)
                        }}>
                        <Text style={{ color: "#fff", fontFamily: 'OpenSans', fontSize: 15 }}>LOGIN </Text>
                        <AntDesign name="arrowright" size={15} color="#FFF" />
                    </TouchableOpacity> : null}
                    {showloader ? <ActivityIndicator size="large" color="#f3b149" style={{ marginLeft: 'auto', paddingTop: 5 }} /> : null}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.para}>Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('signUp') }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#f3b149',
                        fontFamily: 'OpenSans',
                        fontWeight: 'bold'
                    }}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
// secondarycolor : #101010
// primarycolor : ##f3b149
//shadow : rgba(246,246,246,255)
// para color : #cecece
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        fontSize: 45,
        textAlign: 'left',
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    para: {
        fontSize: 20,
        color: 'gray',
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    header: {
        flex: 3,
        width: '100%',
        alignItems: 'flex-end'
    },
    main: {
        flex: 6,
        width: '100%',
        justifyContent: 'center',
        padding: 15
    },
    image: {
        height: 250,
        width: 200,
        marginTop: 20
    },
    inputContainer: {
        backgroundColor: '#fff',
        height: 60,
        padding: 10,
        width: '100%',
        fontFamily: 'OpenSans',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    input: {
        width: '80%',
        color: 'gray'
    },
    onfocus: {
        backgroundColor: '#fff',
        height: 60,
        padding: 10,
        width: '100%',
        fontFamily: 'OpenSans',
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    label: {
        color: 'gray',
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    btn: {
        height: 60,
        width: 150,
        backgroundColor: "#f3b149",
        borderRadius: 50,
        marginLeft: "auto",
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    footer: {
        flex: 0.8,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center'
    }

});
