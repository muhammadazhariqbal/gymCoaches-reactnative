import firebase from 'firebase/app';
import { Alert } from 'react-native'
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBLhWQ6TKtGfEpZcxFmuAkaY_AsBQSGMbM",
  authDomain: "fitnessapp-5fc28.firebaseapp.com",
  projectId: "fitnessapp-5fc28",
  storageBucket: "fitnessapp-5fc28.appspot.com",
  messagingSenderId: "414199288594",
  appId: "1:414199288594:web:26c435cec60721e57c99cb"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()

// function for signing in user
const signInUser = (email, password) => {
  // calling firebase method for signing in user
  return auth.signInWithEmailAndPassword(email, password)
    .then(res => { console.log(`user here ${res}`) })
    .catch(error => {
      Alert.alert(
        "ERROR",
        error.message,
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
    });
}
// function for signing up user
const signUpUser = (email, password, fullName) => {
  // calling firebase method for signing in user
  return auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var userID = userCredential.user.uid;
      db.collection('allUsers').add({
        email,
        fullName,
        userID

      })
        .then((rES) => { console.log('data stored!') })
        .catch(error => { console.log(`error  ${error.message}`) })


    })
    .catch(error => {
      Alert.alert(
        "ERROR",
        error.message,
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
    });
}



export {
  auth,
  signInUser,
  signUpUser,


}