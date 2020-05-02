import { auth, db } from './Client.js';

export const userSignUp = async (username, email, password) => {
    try {
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        const userInfo = {
            email: email,
            username: username
        };
        await db.collection('Users').doc(cred.user.uid).set(userInfo);
        return 'SignUp OK';
    } catch (error) {
        return error.message;
    }
};

export const userSignIn = async (email, password) => {
    try {
        const cred = await auth.signInWithEmailAndPassword(email, password);
        return cred.user.uid;
    } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        return 0;
    }
};

export const userLogout = async () => {
    try {
        await auth.signOut();
        return 'Signout OK';
    } catch (error) {
        return error.message + ' Logout Failed';
    }
};
