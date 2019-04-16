
// event.preventDefault();


const signIn  = () => {

  let email = document.getElementById("logUpEmail").value;
  let password = document.getElementById("logUpPass").value;
  
  console.log(email);
  console.log(password);
  
  
  
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    
    // ...
  });

};

document.getElementById('btnLogUp').addEventListener('click', signIn());





  // document.getElementById('btnLogIn').addEventListener('click', function (event) {
  //   event.preventDefault();
  //   let email = document.getElementById("logInEmail").value;
  //   let password = document.getElementById("logInPass").value;
    
  //   console.log(email);
  //   console.log(password);
    
    
    
  //   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage);
      
      
  //     // ...
  //   });
    
  //     });  






