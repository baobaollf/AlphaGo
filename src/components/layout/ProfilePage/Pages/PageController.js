import React, {Component} from 'react';
import Profile from "./Profile";
import History from "./History";
import AboutUs from "./AboutUs";

const selectPage = (props) => {
    if (props.page === "About us") {
        return <AboutUs/>
    } else if (props.page === "History") {
        return <History/>
    } else {
        return <Profile style={{
            padding: 500,
        }}/>
    }
}

export default function PageController(props) {
    return selectPage(props);
}