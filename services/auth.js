import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

function initFirebase() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAxK9IfAoHr9sVo429wb-Eb-CISzCghgW8",
    authDomain: "lyricstalk-1fb09.firebaseapp.com",
    databaseURL: "https://lyricstalk-1fb09.firebaseio.com",
    projectId: "lyricstalk-1fb09",
    storageBucket: "lyricstalk-1fb09.appspot.com",
    messagingSenderId: "254840958476"
  }
  if (!firebase.apps.length) {
    return firebase.initializeApp(config)
  }
  return
}

function facebookGetRedirectResult() {
  return firebase
    .auth()
    .getRedirectResult()
}

function facebookSignIn() {
  let provider = new firebase.auth.FacebookAuthProvider()
  // provider.addScope('email')
  // provider.setCustomParameters({
  //   'display': 'popup'
  // })
  return firebase
    .auth()
    .signInWithRedirect(provider)
}

export {
  initFirebase,
  facebookSignIn,
  facebookGetRedirectResult
}
