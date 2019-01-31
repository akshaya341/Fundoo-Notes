import { NgModule } from '@angular/core';
import { 
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDividerModule,

    } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout'
    @NgModule({
        imports: [
          MatInputModule,
          FormsModule,
          MatButtonModule,
          MatCardModule,
          FlexLayoutModule,
          BrowserAnimationsModule,
          MatToolbarModule,
          MatSidenavModule,
          MatIconModule,
          MatMenuModule,
          MatDialogModule,
          MatFormFieldModule,
          ReactiveFormsModule ,
          MatDividerModule
          
        ],
        exports: [
          MatInputModule,
          FormsModule,
          MatButtonModule,
          MatCardModule,
          BrowserAnimationsModule,
          FlexLayoutModule,
          MatToolbarModule,
          MatSidenavModule,
          MatIconModule,
          MatMenuModule,
          MatDialogModule,
          MatFormFieldModule,
          ReactiveFormsModule ,
          MatDividerModule
         

        ]
      })
      
export class AppMaterial {

}