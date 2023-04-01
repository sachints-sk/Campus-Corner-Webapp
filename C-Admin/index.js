
var auth = firebase.auth();


firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     
     
     window.location.replace("../C-Admin/Dashboard/");
    
     
   } else {
     console.log("notloged")
     window.location.replace("Auth/Login");
   }
 });