import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import headIcon from '../../../assets/ic_login.png';
import { Foundation, Entypo, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { signUpUser } from '../../Config/firebase';
export default function SignupScreen({ navigation, route }) {

    navigation.setOptions({ tabBarVisible: false })

    const [onFocusValue, setOnFocusValue] = useState('false')
    const [showloader, setShowLoader] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [fullName, setfullName] = useState('')
    const [repPassword, setRepPassword] = useState('')

    const [loaded] = useFonts({
        OpenSans: require('../../../assets/Open_Sans/OpenSans-Regular.ttf')
    });
    const signingUp = (email, password, fullName) => {
        if (password === repPassword) {
            signUpUser(email, password, fullName)
            return
        }
        else {
            Alert.alert(
                "ERROR",
                "Password do not match!",
                [
                    {
                        text: "",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={headIcon} />
            </View>

            <ScrollView style={{ width: '100%' }}>
                <View style={styles.main}>
                    <Text style={styles.head}>Create Account</Text>
                    <View style={onFocusValue === 'namefocus' ? styles.onfocus : styles.inputContainer}>
                        {onFocusValue === 'namefocus' ? <Text style={styles.label}>Full Name</Text> : null}
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                            <Entypo name="user" size={24} color="gray" />
                            <TextInput
                                onFocus={() => { setOnFocusValue('namefocus') }}
                                onBlur={() => { setOnFocusValue(false) }}
                                style={styles.input}
                                placeholder="Full Name"
                                onChangeText={(text) => { setfullName(text) }} />
                        </View>
                    </View>
                    <View style={onFocusValue === 'emailfocus' ? styles.onfocus : styles.inputContainer}>
                        {onFocusValue === 'emailfocus' ? <Text style={styles.label}>EMAIL</Text> : null}
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                            <Foundation name="mail" size={24} color="gray" />
                            <TextInput
                                onFocus={() => { setOnFocusValue('emailfocus') }}
                                onBlur={() => { setOnFocusValue(false) }}
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={(text) => { setEmail(text) }}
                            />
                        </View>
                    </View>
                    <View style={onFocusValue === 'pswrdfocus' ? styles.onfocus : styles.inputContainer}>
                        {onFocusValue === 'pswrdfocus' ? <Text style={styles.label}>PASSWORD</Text> : null}
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                            <Foundation name="lock" size={24} color="gray" />
                            <TextInput
                                onFocus={() => { setOnFocusValue('pswrdfocus') }}
                                onBlur={() => { setOnFocusValue(false) }}
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry
                                onChangeText={(text) => { setpassword(text) }}
                            />
                        </View>
                    </View>
                    <View style={onFocusValue === 'reppswrdfocus' ? styles.onfocus : styles.inputContainer}>
                        {onFocusValue === 'reppswrdfocus' ? <Text style={styles.label}>PASSWORD</Text> : null}

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                            <Foundation name="lock" size={24} color="gray" />

                            <TextInput
                                onFocus={() => { setOnFocusValue('reppswrdfocus') }}
                                onBlur={() => { setOnFocusValue(false) }}
                                style={styles.input}
                                placeholder="Repeat Password"
                                secureTextEntry
                                onChangeText={(text) => { setRepPassword(text) }} />
                        </View>
                    </View>
                    {!showloader ? <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            console.log('TRUEEEE')
                            setShowLoader(true)
                            signingUp(email, password, fullName)
                            setShowLoader(false)

                        }}>
                        <Text style={{ color: "#fff", fontFamily: 'OpenSans', fontSize: 15 }}>SIGN UP </Text>
                        <AntDesign name="arrowright" size={15} color="#FFF" />
                    </TouchableOpacity> : null}
                    {showloader ? <ActivityIndicator size="large" color="#f3b149" style={{ marginLeft: 'auto', paddingTop: 5 }} /> : null}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.para}>Already have an account? </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('logIn')
                    }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#f3b149',
                        fontFamily: 'OpenSans',
                        fontWeight: 'bold'
                    }}>Log in</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

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
        height: 220,
        width: 180,
        marginTop: 20
    },
    inputContainer: {
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
        flex: 0.9,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center'
    }

});
