import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthRegister, AuthLogin, form } from '../interfaces/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  formCollection: AngularFirestoreCollection<form>;
  items: Observable<form[]>;
  uid;

  constructor(private afireAuth: AngularFireAuth, private aFire: AngularFirestore, private router: Router) {
    this.uid = localStorage.getItem('uid');
  }



  login(data: AuthLogin): any {
    return this.afireAuth.signInWithEmailAndPassword(data.email, data.password).then((user) => {
      this.router.navigate(['home']);
      localStorage.setItem('uid', user.user.uid);
      console.log(user.user.email + 'logged in successfully');
    }).catch(err => {
      console.log(err.message);

    });
  }

  register(data: AuthRegister): any {
    return this.afireAuth.createUserWithEmailAndPassword(data.email, data.password).then(user => {
      this.aFire.collection('users').doc(user.user.uid).set({ email: data.email, name: data.name, surname: data.surname }).then(() => {
        console.log(user.user.email + 'Registered successfully');
        localStorage.setItem('uid', user.user.uid);
        this.router.navigate(['home']);
      }).catch(err => {
        console.log(err.message);
      });
    });
  }



}
