import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import StarRating from 'react-native-star-rating';
import { auth } from '../../Config/firebase';
export default function HomeCoachesDetailsScreen({ navigation, route }) {
    const [loaded] = useFonts({
        OpenSans: require('../../../assets/Open_Sans/OpenSans-Regular.ttf')
    });
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.head}>All Coaches</Text>
                <TouchableOpacity
                    onPress={() => { auth.signOut() }}>
                    <AntDesign name="logout" size={24} color="#f3b149" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 6 }} showsVerticalScrollIndicator={false}>
                <View style={styles.main}>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/CoachImages/HaniShobaki.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>Hani Shobaki</Text>
                            <Text style={styles.para}> King Saud Street, Al Olaya, Riyadh 11411, Saudi Arabia</Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={4.7}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>SR 1500</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 50 324 7515') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'Hani Shobaki',
                                        address: 'King Saud Street, Al Olaya, Riyadh 11411, Saudi Arabia',
                                        status: null,
                                        rating: 4.7,
                                        phoneNo: '966 50 324 7515',
                                        screenMode: 'coach'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/CoachImages/SEFA.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>SEFA</Text>
                            <Text style={styles.para}> قرطبة،, Riyadh 13244, Saudi Arabia</Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={5}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>SR 1500</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 11 834 3080') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'SEFA',
                                        address: ' قرطبة، Riyadh 13244, Saudi Arabia',
                                        status: null,
                                        rating: 5,
                                        phoneNo: '966 11 834 3080',
                                        screenMode: 'coach'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/CoachImages/لارين.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>لارين</Text>
                            <Text style={styles.para}>طريق عثمان بن عفان الفرعي Saudi Arabia</Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={4.1}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>SR 1000</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 11 834 3005') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'لارين',
                                        address: 'طريق عثمان بن عفان الفرعي  Saudi Arabia',
                                        status: null,
                                        rating: 4.1,
                                        phoneNo: '966 11 834 3005',
                                        screenMode: 'coach'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/CoachImages/لاڤال.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>لا ڤال</Text>
                            <Text style={styles.para}>King Abdul Aziz Rd, An Nafal, Riyadh 13312, Saudi Arabia</Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={3.7}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>SR 500</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 11 834 3007') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'لا ڤال',
                                        address: 'King Abdul Aziz Rd, An Nafal, Riyadh 13312, Saudi Arabia',
                                        status: null,
                                        rating: 3.7,
                                        phoneNo: '966 50 324 7515',
                                        screenMode: 'coach'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/CoachImages/FitnessTime-OlayaViewFT.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>Fitness Time - Olaya View FT</Text>
                            <Text style={styles.para}>Olaya Street, Riyadh Saudi Arabia</Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={4}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>SR 1600</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 9200 03131') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'Fitness Time - Olaya View FT',
                                        address: 'Olaya Street, Riyadh Saudi Arabia',
                                        status: null,
                                        rating: 4,
                                        phoneNo: '966 9200 03131',
                                        screenMode: 'coach'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/CoachImages/BodyMasters.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>Body Masters</Text>
                            <Text style={styles.para}>Riyadh</Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={5}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>SR 1200</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 9200 45881') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'Body Masters',
                                        address: 'Riyadh',
                                        status: null,
                                        rating: 5,
                                        phoneNo: '966 9200 45881',
                                        screenMode: 'coach'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
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
        height: 'auto',
        width: '95%',
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    image: {
        height: 150,
        width: '40%',

        borderRadius: 20,



    },
    head: {
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
    },
    para: {
        fontSize: 15,
        color: 'gray',
        fontFamily: 'OpenSans',
        fontWeight: 'bold',


    },
    btn: {
        height: 30,
        width: 150,
        backgroundColor: "#f3b149",
        borderRadius: 20,
        margin: 5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    details: {
        height: 'auto',
        width: '50%',

    }
});