import { db, fieldValue } from './Client.js';
import { generateBriefDayPlan, generateDetailDayPlan, poiArrayConverter } from './Utils.js';
export const addHistory = async (uid, planId, cityName, dayPlan, nearBy) => {
    const briefDayPlan = generateBriefDayPlan(dayPlan);
    const detailPlan = generateDetailDayPlan(dayPlan, nearBy);
    const history = {
        createdAt: fieldValue.serverTimestamp(),
        lastModifiedAt: fieldValue.serverTimestamp(),
        days: dayPlan.length,
        briefPlan: briefDayPlan,
        cityName: cityName
    };
    try {
        let batch = db.batch();
        //save briefPlan
        const planRef = db.collection('Users').doc(uid).collection('dayPlan').doc(planId);
        batch.set(planRef, history);

        //save detail plan
        const detailRef = planRef.collection('detailPlan').doc('plan');
        batch.set(detailRef, detailPlan);

        await batch.commit();
        return 'add history success';
    } catch (error) {
        console.log(error);
        return error.message;
    }
};

export const updateHistory = async (uid, planId, cityName, newDayPlan, newNearBy) => {
    const briefDayPlan = generateBriefDayPlan(newDayPlan);
    const detailPlan = generateDetailDayPlan(newDayPlan, newNearBy);
    const modified = {
        lastModifiedAt: fieldValue.serverTimestamp(),
        briefPlan: briefDayPlan,
        days: newDayPlan.length,
        cityName: cityName
    };
    try {
        let batch = db.batch();
        //update brief dayPlan
        const planRef = db.collection('Users').doc(uid).collection('dayPlan').doc(planId);
        batch.update(planRef, modified);

        //update detail dayPlan
        const detailRef = planRef.collection('detailPlan').doc('plan');
        batch.update(detailRef, detailPlan);
        await batch.commit();
        return 'update history success';
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
};

export const getAllBriefHistory = async (uid) => {
    try {
        let historyList = [];
        const planRef = db
            .collection('Users')
            .doc(uid)
            .collection('dayPlan')
            .orderBy('lastModifiedAt', 'desc');
        const planDocuments = await planRef.get();
        planDocuments.forEach((document) => {
            historyList.push({
                planId: document.id,
                info: document.data()
            });
        });
        return historyList;
    } catch (err) {
        console.log(err.message);
        return err.message;
    }
};

export const getDetailHistory = async (uid, planId) => {
    try {
        const document = await db
            .collection('Users')
            .doc(uid)
            .collection('dayPlan')
            .doc(planId)
            .collection('detailPlan')
            .doc('plan')
            .get();
        const planAndNearBy = poiArrayConverter(document.data());
        return planAndNearBy;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
};

export const delUserHistory = async (uid, planId) => {
    try {
        const historyRef = db.collection('Users').doc(uid).collection('dayPlan').doc(planId);
        await historyRef.delete();
        return 1;
    } catch (error) {
        console.log(error);
        return 0;
    }
};

export const generateNewPlanId = async (uid) => {
    try {
        const document = db.collection('Users').doc(uid).collection('dayPlan').doc();
        const planId = document.id;
        await document.set({});
        return planId;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
};
