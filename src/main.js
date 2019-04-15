const email = document.getElementById("inputEmail").value;
const password = document.getElementById("inputPass").value;

const signIn = (email,password) => {
    firebase.auth().singInWithEmailAndPassword (email,password)
};
