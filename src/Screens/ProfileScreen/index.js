import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { auth, db, getAllUsers } from '../../Config/firebase';
import firebase from 'firebase/app';
import "firebase/firestore";
export default function ProfileScreen({ navigation, route }) {
    const [currentUser, setCurrentUser] = useState('')
    useEffect(() => {
        firebase.firestore().collection('allUsers').get()
            .then(snapshot => {
                var arr = [];
                snapshot.forEach(doc => {

                    arr.push({ ...doc.data() })

                    arr.map(docs => {
                        if (route.params.userID.uid === docs.userID) {
                            console.log(docs)
                            setCurrentUser(docs)

                        }
                    })



                })

            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])
    const [loaded] = useFonts({
        OpenSans: require('../../../assets/Open_Sans/OpenSans-Regular.ttf')
    });


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Text style={{ color: "#fff", fontSize: 65, fontWeight: 'bold' }}>{currentUser ? currentUser.fullName.charAt(0) : '--'}</Text>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.head}>{currentUser ? currentUser.fullName : '--'}</Text>
                <Text style={styles.para}>{currentUser ? currentUser.email : '--'}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { auth.signOut() }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#fff',
                        fontFamily: 'OpenSans',
                        fontWeight: 'bold'
                    }}>Log out</Text>
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
    avatar: {
        backgroundColor: '#f3b149',
        height: '50%',
        width: '50%',
        borderRadius: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        flex: 4,
        width: '100%',

        justifyContent: 'center'
    },
    main: {
        flex: 6,
        width: '100%',

        alignItems: 'center',
        padding: 15
    },
    image: {
        height: 250,
        width: 200,
        marginTop: 20
    },



    btn: {
        height: 60,
        width: 150,
        backgroundColor: "#f3b149",
        borderRadius: 50,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },


});
