document.getElementById('btnLogin').addEventListener('click', function () {

let email = document.getElementById("inputEmail").value;
let password = document.getElementById("inputPass").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  
  
  // ...
});

  });









