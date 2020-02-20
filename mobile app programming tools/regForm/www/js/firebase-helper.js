/**
 * Created by ac on 8/20/16.
 */

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzwBBFyB9tndydbCP7LRrvj74SPLp-NZw",
  authDomain: "testapp-5c22a.firebaseapp.com",
  databaseURL: "https://testapp-5c22a.firebaseio.com",
  storageBucket: "testapp-5c22a.appspot.com"
};
var dbApp = firebase.initializeApp(config);

var saveToDb = function (item) {
  var newKey = firebase.database().ref().child("hitsory").push().key;
  item["key"] = newKey;
  firebase.database().ref("history/"+newKey).set(item);
};

