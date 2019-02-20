import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {

  ngOnInit() {
  }
  flag=true;
  message= "";
  action = "Undo ";
  result = "Action Undone";
  constructor(private snackBar: MatSnackBar) {}

  
  reverseFlag(){
    this.flag == !this.flag;
  }

  // recieveEvent(){
  //   this.reverseFlag
  // }

}
