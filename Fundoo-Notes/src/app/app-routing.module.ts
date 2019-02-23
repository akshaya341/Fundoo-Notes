import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';
import { NoteComponent } from './components/note/note.component';
import { ContentComponent } from './components/content/content.component';
import { TrashComponent } from './components/trash/trash.component';

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
    path : 'resetpassword/:token',
    component : ResetComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    children:[   
      {
      path:'note',
      component : NoteComponent
    },
      {
        path:'content',
        component : ContentComponent
      },
      {
        path : 'trash',
        component : TrashComponent
      }
    ]
    
  },
  {
    path:'forget',
    component:  ForgetComponent
  },
  {
    path:'resetpassword/:token',
    component:  ResetComponent
  },
    {path: '**', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
