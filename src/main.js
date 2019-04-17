const signUp  = () => {
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

//document.getElementById('btnLogUp').addEventListener('click', signUp);
document.getElementById('btnLogUp').addEventListener('click', (event) => {
  event.preventDefault();
  signUp();
});



const signIn = () => {
    let email = document.getElementById("logInEmail").value;
    let password = document.getElementById("logInPass").value;
    
    console.log(email);
    console.log(password);
    
    
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
};

// document.getElementById('btnLogIn').addEventListener('click', signIn);
document.getElementById('btnLogIn').addEventListener('click', (event) => {
  event.preventDefault();
  signIn();
}); 

const observerFb = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("logeado");
      wallPaper();
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(user);
      
      // ...
    } else {
      // User is signed out.
      console.log("no logeado");
      
      // ...
    }
  });
};
observerFb();

const wallPaper = () => {
  document.getElementById("container");
  container.innerHTML = `
  <h3>HOLA</h3>
  `
};

const logOut = () => {
firebase.auth().signOut()
.then(function(){
console.log("saliendo.....");

})
.catch(function(error){
  console.log("error")
})
};
// document.getElementById('btnLogOut').addEventListener('click', logOut);
document.getElementById('btnLogOut').addEventListener('click', (event) => {
  event.preventDefault();
  logOut();
});
