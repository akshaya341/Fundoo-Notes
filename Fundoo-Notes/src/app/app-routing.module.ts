import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [
  {
    path : '',
    component:  LoginComponent
  },{
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'forget',
    component:  ForgetComponent
  },
  {
    path:'resetpassword/:token',
    component:  ResetComponent
  },
  {
    path : 'resetpassword',
    component : ResetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
