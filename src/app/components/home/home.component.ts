import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, FormBuilder, FormArray } from '@angular/forms';
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
export class HomeComponent implements OnInit, OnDestroy {
  myFormValueChanges$;
  ourForm: FormGroup;
  constructor(private readonly authService: HomeService,
    private firestore: AngularFirestore, private router: Router, private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.ourForm = this.formBuilder.group({
      department: new FormControl('', [Validators.required]),
      school: new FormControl('', [Validators.required]),
      moduleName: new FormControl('', [Validators.required]),
      moduleCode: new FormControl('', [Validators.required]),
      nameOfSender: new FormControl('', [Validators.required]),
      moduleLecture: new FormControl('', [Validators.required]),
      moduleYear: new FormControl('', [Validators.required]),
      studentEnrolled: new FormControl('', [Validators.required]),
      reasonRequest: new FormControl('', [Validators.required]),
      tutors: this.formBuilder.array([
        this.getTutor()
      ]),
    })
    this.myFormValueChanges$ = this.ourForm.controls['tutors'].valueChanges;

  }

  ngOnDestroy(): void {
    this.myFormValueChanges$.unsubscribe();
  }

  submitData(data: form): any {
    this.authService.submitData(data).then(() => {
      this.router.navigate(['/Submit']);
    }).catch(err => {
      console.log(err.message);
    });
  }

  getTutor() {
    return this.formBuilder.group({
      tutorName: ['', Validators.required],
      tutorSurname: ['', Validators.required],
      studentNum: ['', Validators.required],
      yearStudy: ['', Validators.required],
      sessionNum: ['', Validators.required],
      numHours: ['', Validators.required]
    })
  }

  addTutor() {
    const control = <FormArray>this.ourForm.controls['tutors'];
    control.push(this.getTutor());
  }

  removeTutor(i: number) {
    const control = <FormArray>this.ourForm.controls['tutors'];
    control.removeAt(i);
  }

  clearAllTutors() {
    const control = <FormArray>this.ourForm.controls['tutors'];
    while (control.length) {
      control.removeAt(control.length - 1);
    }
    control.clearValidators();
    control.push(this.getTutor());
  }
}
