import { db } from './Client.js';

export const updateUserInfo = async (uid, userInfo) => {
    try {
        await db.collection('Users').doc(uid).update(userInfo);
        return 'updated successfully';
    } catch (err) {
        return err.message + ' update failed';
    }
};

export const getUserInfo = async (uid) => {
    try {
        const snapshot = await db.collection('Users').doc(uid).get();
        return snapshot.data();
    } catch (error) {
        console.log(error.message);
        return error.message + 'get userInfo failed';
    }
};
