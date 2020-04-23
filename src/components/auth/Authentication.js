// import FBClient from "./Client";
// import db from './client';

const { firebase } = require("./Client");

const userSignUp = async (email, password) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (user.user) {
      console.log("success");
      return user.user;
    } else console.log(234);
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const userSignIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    let user = firebase.auth().currentUser;
    if (user) {
      console.log(user.uid);
      return user.uid;
    } else {
    }
  } catch (error) {
    var errorMessage = error.message;
    console.log(`${errorMessage}
            Sign in failed, please try again!`);
    return null;
  }
};

const userLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log("signed out"));
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    // back to the normal signed out home page
  });
};

module.exports = { userSignUp, userSignIn, userLogout };

// test here

// userSignUp("kkk@dd.com", "testtest");

const test = async () => {
  const result = await userSignIn("ttt@dd.com", "testtest");
  console.log(result);
};

test();
// userSignIn("skipwen2008@gmail.com", "testtest");
// userLogout();
