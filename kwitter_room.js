

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcgMHmFV9vCwDfwN4FDLfW60eZfJFm5d0",
  authDomain: "classtest-63a10.firebaseapp.com",
  databaseURL: "https://classtest-63a10-default-rtdb.firebaseio.com",
  projectId: "classtest-63a10",
  storageBucket: "classtest-63a10.appspot.com",
  messagingSenderId: "448529056789",
  appId: "1:448529056789:web:c0a7257b26fc5d4dce3a1c"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room name - " + room_name);
        row = "<div class ='room_name' id= "+room_name+" onclick = 'redirectToroomname(this.id)' >#"+ room_name +"</div><br>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addroom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    
        localStorage.setItem("room_name", room_name);
    
        window.location = "kwitter_page.html";
}
function redirectToroomname (name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"
}
