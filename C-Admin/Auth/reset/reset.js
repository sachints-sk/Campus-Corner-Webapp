var auth = firebase.auth();
var database = firebase.database();

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log("loged")
      
    // window.location.replace("../../Dashboard/");
     
      
    } else {
      console.log("notloged")
    //  window.location.replace("Auth/login");
    }
  });
  var email=document.getElementById("email").value;
  function resett(){
var email=document.getElementById("email").value;

firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
    Swal.fire({
        icon: 'success',
        title: "Reset email sent",
        text: "Check your mailbox for reset mail",
        
      })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(error);
    Swal.fire({
        icon: 'error',
        title: errorCode,
        text: errorMessage,
        
      })
  });

  }