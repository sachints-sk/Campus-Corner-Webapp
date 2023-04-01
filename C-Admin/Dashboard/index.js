var auth = firebase.auth();


firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     
     
     console.log("test logedin");
    
     
   } else {
     console.log("notttttttloged")
     window.location.replace("../Auth/Login/");
   }
 });

 function logout(){
     console.log("tyr");
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

 }