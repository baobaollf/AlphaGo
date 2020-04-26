import firebase from '../firebase/Client';

export const userSignUp = async (email, password) => {
    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(user);
        if (user.user) {
            return 'SignUp OK';
        }
    } catch (error) {
        return 0;
    }
};

export const userSignIn = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = firebase.auth().currentUser;
        if (user) {
            return user.uid;
        }
    } catch (error) {
        return 0;
    }
};

export const userLogout = async () => {
    try {
        await firebase.auth().signOut();
        return 'Signout OK';
    } catch (error) {
        return error.message + ' Logout Failed';
    }
};
