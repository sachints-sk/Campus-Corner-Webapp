var auth = firebase.auth();
var database = firebase.database();

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
    console.log("loged")
     
    window.location.replace("../../Dashboard/");
    
     
   } else {
     console.log("notloged")
   //  window.location.replace("Auth/login");
   }
 });



function register(){
  var name = document.getElementById("name").value;
  var email1 = document.getElementById("email").value;
  var pass1=document.getElementById("pass1").value;
  var pass2=document.getElementById("pass2").value;
if(pass1==pass2){
  console.log(pass1);
  console.log(pass2);
  Swal.showLoading();
  firebase.auth().createUserWithEmailAndPassword(email1, pass2)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    
    firebase.database().ref('users/' + user.uid).set({
      username: name,
      email: email1,
      registrationstatus:"new"
      

    }).then(() =>{
     window.location.replace("../../Dashboard/");
     
    } );
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    Swal.fire({
      icon: 'error',
      title: errorCode,
      text: errorMessage,
      
    })
    // ..
  });
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Passwords do not match!',
    
  })
}



}