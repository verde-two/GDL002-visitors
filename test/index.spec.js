import { signIn } from '../src/index.js';

const firebase

describe('signIn', () => {
    it('deberia poder iniciar sesion con email y password', () => {
        return signIn("laboratoria@gmail.com").then ((data)=>{
        expect(data).toBe('laboratoria@gmail.com');
       }) 
    })
});
