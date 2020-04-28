export const generateBriefDayPlan = (dayPlan) => {
    const briefDayPlan = dayPlan.map((eachDay, index) => ({
        ['Day-' + (index + 1)]: eachDay.map((poi) => poi.name)
    }));
    return briefDayPlan;
};

export const generateDetailDayPlan = (dayPlan, nearBy) => {
    let detailPlan = {
        plan: {},
        nearBy: {}
    };
    dayPlan.forEach((eachDay, index) => {
        detailPlan.plan['Day-' + (index + 1)] = { order: index, poiArray: eachDay };
    });
    nearBy.forEach((eachDay, index) => {
        detailPlan.nearBy['Day-' + (index + 1)] = { order: index, nearByArray: eachDay };
    });
    return detailPlan;
};

export const poiArrayConverter = (detailPlanObject) => {
    let rawDayPlan = [];
    let rawNearBy = [];
    for (const eachDay in detailPlanObject.plan) {
        rawDayPlan.push(detailPlanObject.plan[eachDay]);
    }
    rawDayPlan.sort((a, b) => a.order - b.order);
    const dayPlan = rawDayPlan.map((eachDay) => eachDay.poiArray);

    for (const eachDay in detailPlanObject.nearBy) {
        rawNearBy.push(detailPlanObject.nearBy[eachDay]);
    }
    rawNearBy.sort((a, b) => a.order - b.order);
    const nearBy = rawNearBy.map((eachDay) => eachDay.nearByArray);
    return [dayPlan, nearBy];
};
