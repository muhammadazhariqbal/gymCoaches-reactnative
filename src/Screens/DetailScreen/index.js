import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Modal, ScrollView, TouchableOpacity, Linking, TouchableHighlight } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useFonts } from 'expo-font';
import StarRating from 'react-native-star-rating';
import nodataimg from '../../../assets/X.png'
export default function DetailScreen({ navigation, route }) {
    const [detailFormName, setDetailFormName] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [userDate, setUserDate] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const handleConfirmTime = (date) => {
        var arr = {
            day: date.getDay().toString(),
            month: date.getMonth().toString(),
            year: date.getFullYear().toString(),
            hour: date.getHours().toString(),
            min: date.getMinutes().toString()
        }
        setUserDate(arr)
    }
    if (route.params === undefined) {
        return <View style={styles.container}>
            <Image style={{ height: 200, width: 200 }} source={nodataimg} />
            <Text style={styles.para}>SELECT GYM OR COACH FIRST!</Text>
        </View>
    }
    const [loaded] = useFonts({
        OpenSans: require('../../../assets/Open_Sans/OpenSans-Regular.ttf')
    });
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <ScrollView
                style={{ width: '90%', flex: 6 }}
                showsVerticalScrollIndicator={false}
            >
                <View syle={styles.main}>

                    <Text style={styles.head}>{route.params.name}</Text>
                    <Text style={styles.para}>{route.params.address}</Text>
                    <Text style={{ color: '#f3b149', fontWeight: 'bold', fontSize: 25, textAlign: 'center', fontFamily: 'OpenSans' }}>{route.params.status}</Text>
                    <TouchableOpacity
                        style={{ backgroundColor: '#f3b149', borderRadius: 10, padding: 5, alignItems: "center", margin: 5 }}
                        onPress={() => { Linking.openURL('mailto:support@example.com') }}>
                        <Entypo name="mail" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: 'black', borderRadius: 10, padding: 5, alignItems: "center", margin: 5 }}
                        onPress={() => { Linking.openURL(`tel:${route.params.phoneNo}`) }}>
                        <Ionicons name="call" size={20} color="#f3b149" />
                    </TouchableOpacity>
                    <StarRating
                        fullStarColor="#f3b149"
                        starSize={20}
                        maxStars={5}
                        rating={route.params.rating}
                    />
                    <Text style={{ fontSize: 25, textAlign: 'left', fontFamily: 'OpenSans', fontWeight: 'bold', color: "#f3b149" }}>REVIEWS</Text>

                    <Text style={{ fontSize: 20, textAlign: 'left', fontFamily: 'OpenSans', fontWeight: 'bold', color: "#f3b149" }}>IMRAN</Text>
                    <Text style={{ fontSize: 15, textAlign: 'left', fontFamily: 'OpenSans', fontWeight: 'bold', color: "gray" }}>ITS A VERY CLEAN, LOW KEY GYM</Text>

                    <Text style={{ fontSize: 20, textAlign: 'left', fontFamily: 'OpenSans', fontWeight: 'bold', color: "#f3b149" }}>Habib</Text>
                    <Text style={{ fontSize: 15, textAlign: 'left', fontFamily: 'OpenSans', fontWeight: 'bold', color: "gray" }}>HIGH QUALITY, DIVERSE GROUP CLASSES; EQUIPMENTS IN GOOD CONDITION; PEOPLE ARE NICE TO ONE ANOTHER LIKE IN A FRIENDLY COMMUNITY</Text>

                    <Text style={{ fontSize: 20, textAlign: 'left', fontFamily: 'OpenSans', fontWeight: 'bold', color: "#f3b149" }}>Zubair</Text>
                    <Text style={{ fontSize: 15, textAlign: 'left', fontFamily: 'OpenSans', fontWeight: 'bold', color: "gray" }}>CONVENIENTLY LOCATED GOOD AESTHETICS PLENTY OF ROOMS</Text>
                </View>
                {
                    route.params.screenMode === 'gym' ?
                        <>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../../../assets/GymImages/gym1.jpg')} />
                                <Image style={styles.image} source={require('../../../assets/GymImages/gym2.jpg')} />
                                <Image style={styles.image} source={require('../../../assets/GymImages/gym3.jpeg')} />

                            </View>
                        </>
                        :
                        <>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../../../assets/CoachImages/coach1.jpg')} />
                                <Image style={styles.image} source={require('../../../assets/CoachImages/coach2.jpg')} />
                                <Image style={styles.image} source={require('../../../assets/CoachImages/coach3.jpg')} />


                            </View>
                        </>
                }

                <TouchableOpacity
                    onPress={() => {
                        setDetailFormName(route.params.name)
                        setModalVisible(true);
                        setDatePickerVisibility(false)
                    }} style={styles.btn}>
                    <Text style={{ color: '#fff' }}>BOOK NOW</Text>

                </TouchableOpacity>
            </ScrollView>

            <Modal
                animationType="fade"
                visible={modalVisible}
                presentationStyle="fullScreen"
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <ScrollView>
                    <View style={{ marginTop: 20 }}>
                        <TouchableHighlight
                            style={{ marginLeft: 'auto' }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Entypo name="cross" size={40} color="#f3b149" />
                        </TouchableHighlight>
                        <View style={styles.modalView}>

                            <Text style={styles.head}>{detailFormName}</Text>
                            <Text style={styles.head}>BOOK NOW!</Text>
                            <Text style={styles.para}>Please fill out the information below to complete your online booking.</Text>

                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} placeholder="Your Name" />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} placeholder="Description" />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} keyboardType="numeric" placeholder="Your Number" />
                            </View>


                            <View style={styles.inputContainer}>
                                <Text style={{ color: 'gray' }}>Date : {userDate.day ? userDate.day : '--'}/{userDate.month ? userDate.month : '--'}/{userDate.year ? userDate.year : '--'}</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={{ color: 'gray' }}>Time : {userDate.hour ? userDate.hour : '--'} Hour {userDate.min ? userDate.min : '--'} Min</Text>
                            </View>





                            <View>
                                <TouchableOpacity onPress={() => { setDatePickerVisibility(true) }}>
                                    <Text style={{ color: '#f3b149', fontFamily: 'OpenSans', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>SELECT DATE & TIME</Text>
                                </TouchableOpacity>

                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="datetime"
                                    onConfirm={handleConfirmTime}
                                    onCancel={() => { setDatePickerVisibility(false) }}
                                />
                            </View>
                            <TouchableHighlight
                                style={styles.btn}
                                onPress={() => {
                                    setModalVisible(false);
                                }}>
                                <Text style={{ color: "#fff" }}>SUBMIT</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
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
        textAlign: 'center',
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    para: {
        fontSize: 20,
        color: 'gray',
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header: {
        flex: 0.2,
        width: '100%',
        alignItems: 'center',

    },
    btn: {
        height: 60,
        width: '90%',
        backgroundColor: "#f3b149",
        borderRadius: 30,
        alignSelf: "center",
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },

    modalView: {
        margin: 20,
        height: 'auto',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        justifyContent: 'center',
        alignItems: 'center',

    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: '80%',
        color: 'gray'
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
    imageContainer: {

        height: 120,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 10,
        margin: 5
    }

});
