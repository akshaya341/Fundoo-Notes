import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DashboardComponent, DialogData } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-edit-lable',
  templateUrl: './edit-lable.component.html',
  styleUrls: ['./edit-lable.component.scss']
})
export class EditLableComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef< DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  // close() : void {

  //     // this.dialogRef.close();
  //   }

   
   
    onNoClick(): void {
      this.dialogRef.close();
      console.log("im in edit label")
    }
  
  }





