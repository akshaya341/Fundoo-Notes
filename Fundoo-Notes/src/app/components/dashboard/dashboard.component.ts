/************************************************************************************************
* Execution : 1. default node cmd> dashboard.ts 
* 
* Purpose :dashboard to fundoo
* 
* @file : dashboard.ts
* @module : dashboard.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 2-2-2019
*
*************************************************************************************************/


import { Component, OnInit, ChangeDetectorRef, Inject, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { EditLableComponent } from '../edit-lable/edit-lable.component';
import { MatSnackBar} from '@angular/material'
export interface DialogData {
 data: "akshaya"
}
/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})




export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  message : any;
  content : any;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,
     public dialog: MatDialog, private snackBar :MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
ngOnInit(){

}
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  recieveMessage($event){
    this.message= $event ;
    console.log ("event data..", this.message);
  }

  

  isclick() {
    return false;
  }
  openLabel(){
    console.log("Lable clicked..");
    const dialogRef = this.dialog.open(EditLableComponent, {
      width: '350px',
      // data: this.content
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });

  }
  
  addAccount() {
    this.router.navigate(['register']);
  }

  signout(){
    this.router.navigate(['login']);
  }
  alert = "Note Archieved";
  action = "undo";
  archieve( message : String, action : String){
    this.snackBar.open(this.alert, this.action,{
      duration : 4000
    })
    
  }

}
