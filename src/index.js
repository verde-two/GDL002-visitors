export const signIn = (email,password) => {
    firebase.auth().singInWithEmailAndPassword (email,password)
};