
var auth = firebase.auth();
var database = firebase.database();
database.useEmulator("localhost", 9000);
auth.useEmulator("http://localhost:9099");
const dbRef = firebase.database().ref();
firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
    
    dbRef.child("users").child(user.uid).get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        console.log(snapshot.val().registrationstatus);

if(snapshot.val().registrationstatus=="new"){
  window.location.replace("start.html");
}
if(snapshot.val().registrationstatus=="new1"){
  window.location.replace("completeProfile1.html");
}
if(snapshot.val().registrationstatus=="new2"){
  window.location.replace("completeProfile2.html");
}


      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
     
   //  window.location.replace("../C-Admin/Dashboard/");
    console.log("loged");
     
   } else {
     console.log("notloged")
    window.location.replace("../../Auth/Login/");
   }
 });