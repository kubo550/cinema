import app from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCZe38xaTxlvEv5lPOdW358Eac1M7gIj4c",
    authDomain: "fortnite-store-caf63.firebaseapp.com",
    databaseURL: "https://fortnite-store-caf63.firebaseio.com",
    projectId: "fortnite-store-caf63",
    storageBucket: "fortnite-store-caf63.appspot.com",
    messagingSenderId: "471633064361",
    appId: "1:471633064361:web:c6a944b5802d57e91794b8",
    measurementId: "G-HLJXPC5D32"
};

class Firebase {
    constructor() {        
        this.firebase = app.initializeApp(firebaseConfig);         
        this.auth = this.firebase.auth()
        this.firestore = this.firebase.firestore()
    }
    
    register(email, password) {
        try {
            return this.auth.createUserWithEmailAndPassword(email, password)

        } catch (err) {
            return console.error(err.message)
        }
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    addToCart(item) {
        if(!this.auth.currentUser) return 
        try {
            const dbRef = this.firestore.doc(`users-cart/${this.auth.currentUser.uid}`)
            return dbRef.set({items: item})
        } catch (err) {
            return console.error(err.message)
        }
    }
    getFromCart() {
        if(!this.auth.currentUser) return 
        try {
            return this.firestore.doc(`users-cart/${this.auth.currentUser.uid}`).get()
        } catch (err) {
            return console.error(err.message)
        }
    }
    logout() {
        return this.auth.signOut()
    }

}

export default new Firebase()
