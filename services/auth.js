import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

async function saveUserAnswer(key, uid, answers) {
  let updates = {};
  let newAnsKey = await firebase
    .database()
    .ref()
    .child(`quizes/${key}/answers`)
    .push().key;
  updates[`/quizes/${key}/answers/${newAnsKey}`] = answers;
  updates[`/user/${uid}/quizesList/${key}/answers/${newAnsKey}`] = answers;
  const x = await firebase
    .database()
    .ref()
    .update(updates);
  return newAnsKey;
}

function initFirebase() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyAxK9IfAoHr9sVo429wb-Eb-CISzCghgW8',
    authDomain: 'lyricstalk-1fb09.firebaseapp.com',
    databaseURL: 'https://lyricstalk-1fb09.firebaseio.com',
    projectId: 'lyricstalk-1fb09',
    storageBucket: 'lyricstalk-1fb09.appspot.com',
    messagingSenderId: '254840958476'
  };
  if (!firebase.apps.length) {
    return firebase.initializeApp(config);
  }
  return;
}

function facebookGetRedirectResult() {
  return firebase.auth().getRedirectResult();
}

function facebookSignIn() {
  let provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('email');
  provider.addScope('public_profile');
  provider.addScope('user_friends');
  // provider.setCustomParameters({
  //   'display': 'popup'
  // })
  // return firebase.auth().signInWithPopup(provider);
  return firebase.auth().signInWithRedirect(provider)
}

function facebookSignOut() {
  return firebase.auth().signOut();
}

function getUser() {
  return firebase.auth();
}

export {
  initFirebase,
  facebookSignIn,
  facebookGetRedirectResult,
  saveUserAnswer,
  facebookSignOut,
  getUser
};
