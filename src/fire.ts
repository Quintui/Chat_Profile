import firebase from "firebase";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAWXqw_TLf9vAGp_2yzMfQ6YNQGtQxg6oU",
  authDomain: "login-chat-b6ac9.firebaseapp.com",
  projectId: "login-chat-b6ac9",
  storageBucket: "login-chat-b6ac9.appspot.com",
  messagingSenderId: "205755668249",
  appId: "1:205755668249:web:931159260ceb02c8c3d788",
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default fire;
