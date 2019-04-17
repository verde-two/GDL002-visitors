<<<<<<< HEAD
//import { signIn } from '../src/index.js';
=======
import { signIn } from '../src/main';
>>>>>>> rocio/desarrollo

//const firebase

//describe('signIn', () => {
//    it('deberia poder iniciar sesion con email y password', () => {
//        return signIn("laboratoria@gmail.com").then ((data)=>{
//        expect(data).toBe('laboratoria@gmail.com');
//       }) 
//    })
//});

import {signIn} from '../src/index';

describe('signIn', () => {
<<<<<<< HEAD
    it('deberia...', () => {
        expect(typeof signIn).tobe('function');
    });
});
=======
    it('deberia poder iniciar sesion con email y password', () => {
        return signIn("rocio.chavoya@gmail.com").then ((data)=>{
        expect(data).toBe('rocio.chavoya@gmail.com');
       }) 
    })
});
>>>>>>> rocio/desarrollo
