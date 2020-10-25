import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB1eeVv8nHJpuiBIbDz25f8ofomiMXeYUM",
  authDomain: "worth-55c58.firebaseapp.com",
  databaseURL: "https://worth-55c58.firebaseio.com",
  projectId: "worth-55c58",
  storageBucket: "worth-55c58.appspot.com",
  messagingSenderId: "240111441828",
  appId: "1:240111441828:web:f1b69bfd5941b45a311331",
  measurementId: "G-XWSY8MLX77"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;