  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional 
  var firebaseConfig = {
   apiKey: "AIzaSyBvRTPMptujPMgpkMxKug_tJvTrHLJ-OQM",
   authDomain: "aarav-social-website.firebaseapp.com",
   databaseURL: "https://aarav-social-website-default-rtdb.firebaseio.com",
   projectId: "aarav-social-website",
   storageBucket: "aarav-social-website.appspot.com",
   messagingSenderId: "166484540934",
   appId: "1:166484540934:web:b8537b2df3dec274ce8d87"
  };

// const firebaseConfig = {
//  apiKey: "AIzaSyAMEt9riozs5XSflMKcraa5Rqct33SMAGk",
//  authDomain: "playapp-e6773.firebaseapp.com",
//  databaseURL: "https://playapp-e6773-default-rtdb.firebaseio.com",
//  projectId: "playapp-e6773",
//  storageBucket: "playapp-e6773.appspot.com",
//  messagingSenderId: "427877958347",
//  appId: "1:427877958347:web:c3f33190fe559f3148914e",
//  measurementId: "G-PF9HXN3W4L"
//};

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "<h3>Welcome " + user_name + "!</h3>";

  function addRoom() {
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "Codesend_page.html";
  }

  function getData() {
   
//   var ref = firebase.database().ref('/');
//   ref.on('value', function (snapshot) {
//    console.log(snapshot);
//   })
   
   
   firebase.database().ref("/").on('value', function (snapshot) {
    // document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
     childKey = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
     // document.getElementById("output").innerHTML += row;
    });
   });

  }

  getData();
  function toroom(){
    namef = document.getElementById("toroomin").value;
    redirectToRoomName(namef);
  }
  function redirectToRoomName(name) {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "Codesend_page.html";
  }

  function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
  }
document.domain = "https://CodeSend5.com";
