import app from 'firebase/app';
import auth from 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWY12d3bV2ZjVXcr3DHHS9AyDir9r11LM",
    authDomain: "levian-815b4.firebaseapp.com",
    databaseURL: "https://levian-815b4.firebaseio.com",
    projectId: "levian-815b4",
    storageBucket: "levian-815b4.appspot.com",
    messagingSenderId: "921301760102",
    appId: "1:921301760102:web:8e98fca909655cbdead5a7",
    measurementId: "G-RQQ52RV5N7"
}

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email,password) => {
        this.auth.createUserWithEmailAndPassword(email,password);
    }

    doSignInWithEmailAndPassword = (email, password) =>{
        this.auth.signInWithEmailAndPassword(email,password);
    }

    doSignOut = () =>{
        this.auth.signOut();
    }

    doPasswordReset = email => {this.auth.sendPasswordResetEmail(email);}

    doUpdatePassword = password => {
        this.auth.currentUser.updatePassword(password);
    }
}

export default Firebase;
