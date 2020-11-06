import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthRegister, AuthLogin } from '../interfaces/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afireAuth: AngularFireAuth, private aFire: AngularFirestore, private router: Router) { }

  login(data: AuthLogin): any {
    return this.afireAuth.signInWithEmailAndPassword(data.email, data.password).then((user) => {
      this.router.navigate(['home']);
      console.log(user.user.email + 'logged in successfully');
    }).catch(err => {
      console.log(err.message);

    })
  }

  register(data: AuthRegister): any {
    return this.afireAuth.createUserWithEmailAndPassword(data.email, data.password).then(user => {
      this.aFire.collection('users').doc(user.user.uid).set({ email: data.email, name: data.name, surname: data.surname }).then(() => {
        console.log(user.user.email + 'Registered successfully');
        this.router.navigate(['home']);
      }).catch(err => {
        console.log(err.message);
      });
    });
  }
}
