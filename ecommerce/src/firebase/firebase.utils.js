import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyByi22DrK17bJK-odr8GRJ5jQsLoMtCei0",
    authDomain: "commerce-db-16df2.firebaseapp.com",
    databaseURL: "https://commerce-db-16df2.firebaseio.com",
    projectId: "commerce-db-16df2",
    storageBucket: "commerce-db-16df2.appspot.com",
    messagingSenderId: "443650744350",
    appId: "1:443650744350:web:777ab3edd68d1523494e0f", 
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){ //false
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.log("error creating user",error.message);
        }

    }

    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
