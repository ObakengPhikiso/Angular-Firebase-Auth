import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {  form } from '../interfaces/auth';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  formCollection: AngularFirestoreCollection<form>;
  items : Observable<form[]>;


  constructor( private afireAuth: AngularFireAuth, private aFire: AngularFirestore, private router: Router) { }

  submitData(data: form): Promise<any> {
    return this.aFire.collection('Submissions').doc(JSON.stringify(data.studentNum)).set(data);
  }
  
}
