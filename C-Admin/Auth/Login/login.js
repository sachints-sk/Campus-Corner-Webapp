var auth = firebase.auth();
var database = firebase.database();

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
    console.log("loged")
     
    window.location.replace("../../Dashboard/");
    
     
   } else {
     console.log("notloged")
   // window.location.replace("Auth/login");
   }
 });
 

  function signin(){
    Swal.showLoading();
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
   
    firebase.auth().signInWithEmailAndPassword(email, pass)
     .then((userCredential) => {
       // Signed in
       var user = userCredential.user;
       window.location.replace("../../Dashboard/");
     
       // ...
     })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       Swal.fire({
        icon: 'error',
        title: errorCode,
        text: errorMessage,
        
      })
     });


  }