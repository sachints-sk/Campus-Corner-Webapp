var auth = firebase.auth();
var database = firebase.database();
var storage = firebase.storage();
storage.useEmulator("localhost", 9199);
auth.useEmulator("http://localhost:9099");
database.useEmulator("localhost", 9000);
var storageRef = firebase.storage().ref();
var uidd;
var provider = new firebase.auth.GoogleAuthProvider();
var cover=false;
var logo=false;
firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
    console.log("logggged")
     uidd=user.uid;
   // window.location.replace("../../Dashboard/");
    
     
   } else {
     console.log("notloged")
   //  window.location.replace("Auth/login");
   }
 });

 
 

 function details(){
    var name=document.getElementById("input-name").value; 
    var email=document.getElementById("input-email").value;
    var address=document.getElementById("input-address").value;
    var city=document.getElementById("input-city").value;
    var state=document.getElementById("input-state").value;
    var pin=document.getElementById("input-postal-code").value;
    var about=document.getElementById("about").value;


    firebase.database().ref('users/' + uidd+"/campus").update({
        name: name,
        email: email,
        address:address,
        city:city,
        state:state,
        pin:pin,
        about:about
        
  
      }).then(() =>{
       updateinfo();
       
      } );
 }
 function updateinfo(){
    firebase.database().ref('users/' + uidd).update({
        
        registrationstatus:"new2"
  
      }).then(() =>{
        window.location.replace("load.html");
       
      } );

 }