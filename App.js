import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase'
import '@firebase/firestore';


const styles = StyleSheet.create({
  container: {
  },
  red: {
    color: 'red',
  },
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZk4I-m5fWR4_ktpChqhQYmfO2sx2P4Rc",
  authDomain: "balloon-factory.firebaseapp.com",
  databaseURL: "https://balloon-factory.firebaseio.com/",
  storageBucket: "gs://balloon-factory.appspot.com",
  projectId:"balloon-factory",
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

dbh.collection("characters").doc("mario").set({
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball"
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text >Here you go!</Text>
    </View>
  );
}