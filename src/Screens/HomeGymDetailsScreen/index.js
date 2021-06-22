import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import StarRating from 'react-native-star-rating';


export default function HomeGymDetailsScreen({ navigation, route }) {
    const [loaded] = useFonts({
        OpenSans: require('../../../assets/Open_Sans/OpenSans-Regular.ttf')
    });
   
    
    
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.head}>All Gyms</Text>
                <TouchableOpacity
                    onPress={() => { route.params.x(false) }}>
                    <AntDesign name="logout" size={24} color="#f3b149" />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 6, }} showsVerticalScrollIndicator={false}>
                <View style={styles.main}>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/GymImages/nineRound.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>9ROUND</Text>
                            <Text style={styles.para}>MQFH+HF, Isa Al Malaji, Al Safa, Riyadh 12853, Saudi Arabia</Text>
                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={4.4}
                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>OPEN</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}>
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 9200 19910') }}>
                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    

                                        navigation.navigate('details', {
                                           name: '9ROUND',
                                            address:'MQFH+HF, Isa Al Malaji, Al Safa, Riyadh 12853, Saudi Arabia',
                                            phoneNo:'966 9200 19910',
                                            rating: 4.4,
                                           status: 'OPEN'
                                        })

                                    }}>
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/GymImages/fitnessCodeSportCenter.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>Fitness Code Sport Center</Text>
                            <Text style={styles.para}>Sheikh Abdul Rahman Ibn Furayyan,As Suwaidi Al Gharabi, </Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={3.8}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>CLOSE</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 55 220 2619') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    
                                    navigation.navigate('details',{
                                       name: 'Fitness Code Sport Center',
                                        address: 'Sheikh Abdul Rahman Ibn Furayyan,As Suwaidi Al Gharabi,',
                                       phoneNo: '966 55 220 2619',
                                        rating :3.8,
                                        status:'CLOSE',
                                        screenMode:'gym'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/GymImages/FitnessFirstARGA.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>Fitness First ARGA</Text>

                            <Text style={styles.para}>Prince Mashal Ibn Abdul Aziz Road،Arga, Riyadh Saudi Arabia</Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={3.8}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>OPEN</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 11 230 4464') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {

                                        name: 'Fitness First ARGA',
                                        address: 'Prince Mashal Ibn Abdul Aziz Road،Arga, Riyadh Saudi Arabia',
                                        status: 'OPEN',
                                        rating: 3.8,
                                        phoneNo: '966 11 230 4464',
                                        screenMode:'gym'
                                        

                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/GymImages/FitnessDays.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>Fitness Days</Text>

                            <Text style={styles.para}>As Sulimaniyah, Riyadh 12621,Saudi Arabia</Text>


                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={4.2}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>CLOSED</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 54 0427852') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'Fitness Days',
                                        address: 'As Sulimaniyah, Riyadh 12621,Saudi Arabia',
                                        status: 'CLOSED',
                                        rating: 4.2,
                                        phoneNo: '966 54 0427852',
                                        screenMode:'gym'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/GymImages/StrongGym.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>Strong Gym</Text>

                            <Text style={styles.para}>Al Wizarat, Riyadh 11564,Saudi Arabia</Text>


                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={3.9}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>OPEN</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 54 042 8882') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'Strong Gym',
                                        address: 'Al Wizarat, Riyadh 11564,Saudi Arabia',
                                        status: 'OPEN',
                                        rating: 3.9,
                                        phoneNo: '966 54 042 8882',
                                        screenMode:'gym'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/GymImages/PalmsFitnessClub.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>Palms Fitness Club</Text>

                            <Text style={styles.para}>4244 المعذر, Al Mutamarat,Riyadh 12712, Saudi Arabia</Text>


                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={4.3}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>OPEN</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 50 885 9966') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'Palms Fitness Club',
                                        address: '4244 المعذر, Al Mutamarat,Riyadh 12712, Saudi Arabia',
                                        status: 'OPEN',
                                        rating: 4.3,
                                        phoneNo: '966 50 885 9966',
                                        screenMode:'gym'
                                    })
                                }}
                            >
                                <Text style={{ color: '#fff' }}>VIEW MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../../assets/GymImages/NuYuFitnessCentreIshbilia.jpg')} />
                        <View style={styles.details}>
                            <Text style={styles.head}>NuYu Fitness Centre Ishbilia</Text>


                            <Text style={styles.para}>طريق الشيخ حسن بن حسين بن علي، Shaikh، Riyadh Saudi Arabia</Text>
                            <Text style={styles.para}></Text>

                            <StarRating
                                fullStarColor="#f3b149"
                                starSize={20}
                                maxStars={5}
                                rating={3.8}

                            />
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans', }}>OPEN</Text>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, marginLeft: 'auto' }}
                                    onPress={() => { Linking.openURL('mailto:support@example.com') }}
                                >
                                    <Entypo name="mail" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, marginLeft: 5 }}
                                    onPress={() => { Linking.openURL('tel:966 9200 07576') }}
                                >

                                    <Ionicons name="call" size={20} color="#f3b149" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        name: 'NuYu Fitness Centre Ishbilia',
                                        address: 'طريق الشيخ حسن بن حسين بن علي، Shaikh، Riyadh Saudi Arabia',
                                        status: 'OPEN',
                                        rating: 3.8,
                                        phoneNo: '966 9200 07576',
                                        screenMode:'gym'
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
    details: {
        height: 'auto',
        width: '50%',

    }
});
