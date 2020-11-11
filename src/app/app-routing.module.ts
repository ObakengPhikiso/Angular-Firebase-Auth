import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ThanksComponent } from './components/thanks/thanks.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'Submit', component: ThanksComponent, pathMatch: 'full'
  },
  {
    path: 'register', component: RegisterComponent, pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'thanks', component: ThanksComponent, pathMatch: 'full'
  },
  {
    path: 'login', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
