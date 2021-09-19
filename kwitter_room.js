
var firebaseConfig = {
      apiKey: "AIzaSyBMyEMmt85OP4d4B-y3YxoMBSz2oWm_dMU",
      authDomain: "classtest-e87b0.firebaseapp.com",
      databaseURL: "https://classtest-e87b0-default-rtdb.firebaseio.com",
      projectId: "classtest-e87b0",
      storageBucket: "classtest-e87b0.appspot.com",
      messagingSenderId: "719011733423",
      appId: "1:719011733423:web:918de1664ff75baecc995a",
      measurementId: "G-2SXTXF34LJ"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_nmae");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
          localStorage.setItem("room_name " , room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
      
       Room_names = childKey;
      
       console.log("Room Name - " + Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name)
{
      conclose.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
