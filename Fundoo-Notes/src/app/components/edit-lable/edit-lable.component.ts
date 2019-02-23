import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DashboardComponent, DialogData } from '../dashboard/dashboard.component';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-lable',
  templateUrl: './edit-lable.component.html',
  styleUrls: ['./edit-lable.component.scss']
})
export class EditLableComponent implements OnInit {

  label_content=new FormControl('',[Validators.required])
  
  constructor(
    public dialogRef: MatDialogRef< DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }
 
    onNoClick(): void {
      this.dialogRef.close();
      console.log("im in edit label")
    }
  
  }





