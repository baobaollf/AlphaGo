export const generateBriefDayPlan = (dayPlan) => {
    const briefDayPlan = dayPlan.map((eachDay, index) => ({
        ['Day-' + (index + 1)]: eachDay.map((poi) => poi.name)
    }));
    return briefDayPlan;
};

export const generateDetailDayPlan = (dayPlan) => {
    let detailPlan = {};
    dayPlan.forEach((eachDay, index) => {
        detailPlan['Day-' + (index + 1)] = { order: index, poiArray: eachDay };
    });
    return detailPlan;
};

export const poiArrayConverter = (historyObject) => {
    let raw = [];
    for (const eachDay in historyObject) {
        raw.push(historyObject[eachDay]);
    }
    raw.sort((a, b) => a.order - b.order);
    const result = raw.map((eachDay) => eachDay.poiArray);
    return result;
};
