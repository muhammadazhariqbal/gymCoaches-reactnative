import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import gymImg from '../../../assets/gym.jpg'
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Auth from '../../Config';

export default function HomeCoachesDetailsScreen() {
    const [loaded] = useFonts({
        OpenSans: require('../../../assets/Open_Sans/OpenSans-Regular.ttf')
    });
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.head}>All Coaches</Text>
                <TouchableOpacity
                    onPress={() => { Auth(false) }}>
                    <AntDesign name="logout" size={24} color="##f3b149" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 6 }} showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={gymImg} />
                        <View stryle={styles.details}>
                            <Text style={styles.head}>Muhammad Habib</Text>
                            <Text style={styles.para}>Gym Trainer at civic center Riyadh</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}> SR 300 </Text>
                                <TouchableOpacity style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}>
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}>
                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
    header: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    main: {

        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        height: 100,
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 20
    },
    head: {
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontFamily: 'OpenSans',
    },
    para: {
        fontSize: 15,
        color: 'gray',
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontFamily: 'OpenSans',

    }
});
