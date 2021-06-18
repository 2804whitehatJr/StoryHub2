import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDaDubCr66lT7jb1XvfPucjIQvfEiqDCXM",
  authDomain: "story-hub-c288c.firebaseapp.com",
  projectId: "story-hub-c288c",
  storageBucket: "story-hub-c288c.appspot.com",
  messagingSenderId: "897128886171",
  appId: "1:897128886171:web:43938f8555fe5b32753b3e"
};

// Initialize Firebase
   if(!firebase.apps.length)
  {
  firebase.initializeApp(firebaseConfig);
  }