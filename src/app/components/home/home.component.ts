import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from '../../services/home.service';
import { AuthLogin } from 'src/app/interfaces/auth';
import { form } from 'src/app/interfaces/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private readonly authService: HomeService, private fb: FormBuilder,
    private firestore: AngularFirestore, private router: Router) {


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
    tutorName_2: new FormControl('', [Validators.required]),
    tutorSurname_2: new FormControl('', [Validators.required]),
    studentNum_2: new FormControl('', [Validators.required]),
    tutorName_3: new FormControl('', [Validators.required]),
    tutorSurname_3: new FormControl('', [Validators.required]),
    studentNum_3: new FormControl('', [Validators.required]),
    tutorName_4: new FormControl('', [Validators.required]),
    tutorSurname_4: new FormControl('', [Validators.required]),
    studentNum_4: new FormControl('', [Validators.required]),
    tutorName_5: new FormControl('', [Validators.required]),
    tutorSurname_5: new FormControl('', [Validators.required]),
    studentNum_5: new FormControl('', [Validators.required]),
    tutorName_6: new FormControl('', [Validators.required]),
    tutorSurname_6: new FormControl('', [Validators.required]),
    studentNum_6: new FormControl('', [Validators.required]),
    tutorName_7: new FormControl('', [Validators.required]),
    tutorSurname_7: new FormControl('', [Validators.required]),
    studentNum_7: new FormControl('', [Validators.required]),
    tutorName_8: new FormControl('', [Validators.required]),
    tutorSurname_8: new FormControl('', [Validators.required]),
    studentNum_8: new FormControl('', [Validators.required]),
    tutorName_9: new FormControl('', [Validators.required]),
    tutorSurname_9: new FormControl('', [Validators.required]),
    studentNum_9: new FormControl('', [Validators.required]),
    tutorName_10: new FormControl('', [Validators.required]),
    tutorSurname_10: new FormControl('', [Validators.required]),
    studentNum_10: new FormControl('', [Validators.required]),

    yearStudy: new FormControl('', [Validators.required]),
    sessionNum: new FormControl('', [Validators.required]),
    numHours: new FormControl('', [Validators.required])

  })


  ngOnInit(): void {

  }

  submitData(data: form): any {
    this.authService.submitData(data).then(() => {
      this.router.navigate(['/Submit']);
    }).catch(err => {
      console.log(err.message);
    });
  }

}
