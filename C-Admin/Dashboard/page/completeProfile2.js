


var auth = firebase.auth();
var database = firebase.database();
var storage = firebase.storage();
storage.useEmulator("localhost", 9199);
auth.useEmulator("http://localhost:9099");
database.useEmulator("localhost", 9000);
var storageRef = firebase.storage().ref();
var uidd;
var coverlocation;
var logolocation;
var provider = new firebase.auth.GoogleAuthProvider();
var cover=false;
var logo=false;
firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
    console.log("loged")
     uidd=user.uid;
   // window.location.replace("../../Dashboard/");
    
     
   } else {
     console.log("notloged")
   //  window.location.replace("Auth/login");
   }
 });



var loadFile = function (event) {
    var image = document.getElementById("output");
    var file=document.getElementById("changeCover").files[0];
    var uploadTask = storageRef.child("CC/"+uidd+"/images/info/cover.jpg").put(file).then(() =>{
      coverurl();
     
    } );

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    document.getElementById("progressbar").style.visibility="visible";
    const progresss = document.querySelector(".js-completed-bar");
    if (progresss) {
      progresss.style.width = progress + "%";
      progresss.style.opacity = 1;
      
    }
    cover=true;
    if(progresss.style.width=="100%"){
      document.getElementById("addhere").innerHTML += '<span class="badge bg-gradient-success">Uploaded Cover</span>';
      document.getElementById("progressbar").style.visibility="hidden";
      
    }
    if(cover==true && logo==true){
      document.getElementById("nexthere").innerHTML = ' <button onclick="nextt()" class="button btn bg-gradient-dark" style="color: #fff" >Continue</button>';
    }

    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
     coverlocation=downloadURL;
      var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    });
  }
);
  };

  var loadFile1 = function (event) {
    var image = document.getElementById("output2");
    var file=document.getElementById("changePicture").files[0];
    var uploadTask = storageRef.child("CC/"+uidd+"/images/info/cover.jpg").put(file).then(() =>{
      logourl();
     
    } );

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');

    document.getElementById("progressbar").style.visibility="visible";
    const progresss = document.querySelector(".js-completed-bar");
    if (progresss) {
      progresss.style.width = progress + "%";
      progresss.style.opacity = 1;
      
    }
    logo=true;
    if(progresss.style.width=="100%"){
      document.getElementById("addhere").innerHTML += '<span class="badge bg-gradient-success">Uploaded Logo</span>';
      document.getElementById("progressbar").style.visibility="hidden";
      
    }
    if(cover==true && logo==true){
      document.getElementById("nexthere").innerHTML = ' <button onclick="nextt()" class="button btn bg-gradient-dark" style="color: #fff" >Continue</button>';
    }
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      logolocation=downloadURL;
      var image = document.getElementById("output2");
    image.src = URL.createObjectURL(event.target.files[0]);
    });
  }
);
  };

  function coverurl(){
    firebase.database().ref('users/' + uidd+"/campus").update({
      coverurl:coverlocation
      

    });
  }

  function logourl(){
    firebase.database().ref('users/' + uidd+"/campus").update({
      logourl:logolocation
      

    });
  }

  function nextt(){
    firebase.database().ref('users/' + uidd).update({
        
      registrationstatus:"done"

    }).then(() =>{
      window.location.replace("load.html");
     
    } );
  }