import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthLogin } from 'src/app/interfaces/auth';
import {  AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private submmisionForm:  AngularFirestoreCollection<any>;

  constructor(private readonly authService: AuthService, private fb: FormBuilder, private firestore: AngularFirestore) { }
  form = new FormGroup({
    school: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    moduleCode: new FormControl('', [Validators.required]),
    moduleName: new FormControl('', [Validators.required]),
    moduleDetails: new FormControl('', [Validators.required]),
    moduleLecture: new FormControl('', [Validators.required]),
    moduleYear: new FormControl('', [Validators.required]),
    studentEnrolled: new FormControl('', [Validators.required]),
    reasonRequest: new FormControl('', [Validators.required]),
    yearStudy: new FormControl('', [Validators.required]),
    tutorName: new FormControl('', [Validators.required]),
    tutorSurname: new FormControl('', [Validators.required]),
    studentNum: new FormControl('', [Validators.required]),
    numHours: new FormControl('', [Validators.required]),
    sessionNum: new FormControl('', [Validators.required])
   
  });
  ourForm : FormGroup;

  ngOnInit(): void {
    this.submmisionForm = this.firestore.collection('Submissions');
    this.ourForm = this.fb.group({
      department: ['',Validators.required],
      school: ['',Validators.required],
      moduleName: ['',Validators.required],
       moduleCode: ['',Validators.required],
     
       moduleLecture: ['',Validators.required],
      moduleYear: ['',Validators.required],
      studentEnrolled: ['',Validators.required],
      reasonRequest: ['',Validators.required],
      tutorName: ['',Validators.required],
      tutorSurname: ['',Validators.required],
      studentNum: ['',Validators.required],
      yearStudy: ['',Validators.required],
       sessionNum: ['',Validators.required],
      numHours: ['',Validators.required]
     

    });

    
  }
  submitData(value : any)
    {
  this.submmisionForm.add(value).then(res =>{
  console.log('Request added') ; 
  }).catch(err => console.log(err));
    }

    onSubmit()
    {
      alert(JSON.stringify(this.form.value))
    }

}
