import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthLogin } from 'src/app/interfaces/auth';
import { form } from 'src/app/interfaces/auth';
import {  AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private submmisionForm:  AngularFirestoreCollection<any>;


  constructor(private readonly authService: AuthService, private fb: FormBuilder, private firestore: AngularFirestore) {
   
    
   }
  
  ourForm : FormGroup;
    

  ngOnInit(): void {
    
    this.submmisionForm = this.firestore.collection('Submissions');
   
    this.ourForm = this.fb.group({
      department: ['',[Validators.required]],
      school:  ['',[Validators.required]],
      moduleName: ['',[Validators.required]],
       moduleCode:['',[Validators.required]],
       nameOfSender:  ['',[Validators.required]],
       moduleLecture: ['',[Validators.required]],
      moduleYear: ['',[Validators.required]],
      studentEnrolled:  ['',[Validators.required]],
      reasonRequest:  ['',[Validators.required]],
      tutorName:  ['',[Validators.required]],
      tutorSurname: ['',[Validators.required]],
      studentNum: ['',[Validators.required]],
      yearStudy: ['',[Validators.required]],
       sessionNum: ['',[Validators.required]],
      numHours:  ['',[Validators.required]]
     

    });

  }
  
  submitData(value : form)
    {
   this.submmisionForm.add(value).then(res =>{
  console.log('Request added') ; 
  }).catch(err => console.log(err));
    }

    onSubmit()
    {
      alert(JSON.stringify(this.ourForm.value))
    }

}
