var auth = firebase.auth();
var database = firebase.database();
database.useEmulator("localhost", 9000);
auth.useEmulator("http://localhost:9099");
const dbRef = firebase.database().ref();
var uidd;
firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
    uidd=user.uid;
    console.log("loged");
     
   } else {
     console.log("notloged")
    window.location.replace("../../Auth/Login/");
   }
 });

 function startt(){
console.log("1");
  firebase.database().ref('users/' + uidd).update({
    
    registrationstatus:"new1"
    

  }).then(() =>{
   window.location.replace("load.html");
   
  } );



 }