import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from '../../services/home.service';
import { AuthLogin } from 'src/app/interfaces/auth';
import { form } from 'src/app/interfaces/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private readonly authService: HomeService, private fb: FormBuilder, private firestore: AngularFirestore) {


  }

  ourForm = new FormGroup({

    department: new FormControl('', [Validators.required]),
    school: new FormControl('', [Validators.required]),
    moduleName: new FormControl('', [Validators.required]),
    moduleCode: new FormControl('', [Validators.required]),
    nameOfSender: new FormControl('', [Validators.required]),
    moduleLecture: new FormControl('', [Validators.required]),
    moduleYear: new FormControl('', [Validators.required]),
    studentEnrolled: new FormControl('', [Validators.required]),
    reasonRequest: new FormControl('', [Validators.required]),
    tutorName: new FormControl('', [Validators.required]),
    tutorSurname: new FormControl('', [Validators.required]),
    studentNum: new FormControl('', [Validators.required]),
    yearStudy: new FormControl('', [Validators.required]),
    sessionNum: new FormControl('', [Validators.required]),
    numHours: new FormControl('', [Validators.required])

  })


  ngOnInit(): void {

  }

  submitData(data: form): any {
    this.authService.submitData(data).then(() => {
      console.log('created');
    }).catch(err => {
      console.log(err.message);
    });
  }

}
