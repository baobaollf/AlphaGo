import firebase from './Client';

export const userSignUp = async (email, password) => {
    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        if (user.user) {
            return 'SignUp OK';
        }
    } catch (error) {
        return error.message;
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
        var errorMessage = error.message;
        return `${errorMessage} Sign in failed, please try again!`;
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
