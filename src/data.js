//import { signIn } from ".";

//firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
//    var errorCode = error.code;
//    var errorMessage = error.message;
    // ...
//  });

//  signIn(() => {
//    console.log(diste un clip);
      
//  });

// Funcion para obtener informacon de input coworking
const saveName = () => {
    let nombreCoworking = document.getElementById("nombre").value;//Guardando valor de nombre
    let emailCoworking = document.getElementById("email").value;//Guardando valor de email
    let giro = document.getElementById("turn").value;
    console.log(nombreCoworking,emailCoworking,giro);
    main.addCoworking(nombreCoworking,emailCoworking,giro);
    
};
document.getElementById("boton").addEventListener("click", saveName);
  