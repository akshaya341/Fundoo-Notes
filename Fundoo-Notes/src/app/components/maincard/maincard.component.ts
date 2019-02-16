import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {  Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.scss']
})
export class MaincardComponent implements OnInit {

  flag = true;
  noteTitle = new FormControl('',[Validators.required,Validators.required]);
  noteContent = new FormControl('',[Validators.required,Validators.required]);
  model : any;
  
  constructor(private httpService: HttpService, private router: Router) { }

  colorArray = ["white", "red","orange", "yellow","green","teal","blue","darkblue","purple","pink","brown","gray"];

  ngOnInit() {
  }

  logout() {
    this.router.navigate([''])
  }

 

  @Output() messageEvent = new EventEmitter<string>();

  //colorArray=["white", "red","orange", "yellow","green","teal","blue","darkblue","purple","pink","brown","gray"];

   addNote(){
    
     this.flag = !this.flag;
    //  this.noteTitle=document.getElementById('noteTitle').innerHTML;
    //  this.noteContent = document.getElementById('noteContent').innerHTML;

     
     if(this.noteTitle  || this.noteContent )
     {
      this.model= {
         title : this.noteTitle.value,
         description : this.noteContent.value,
         labelIdList	: '',
         checklist   : '',
         isPined   : false,
         isArchived : false,
          color  : '',
          reminder : '',
          collaberators : ''
       }
        console.log("model data",this.model)
       this.httpService.encodedPostForm('notes/addNotes',this.model).subscribe(data =>{
        console.log("responace data",data);
        this.messageEvent.emit(this.model);
      },
      err =>
      {
        alert('Something went wrong ');
        console.log("error-------",err);   
      })
     }
     
   }
  
  //  messageHit($event){
  //   this.addNote=$event;
  //   console.log("MessageHit" );
  //  }

  reverseFlag($event) {
    this.flag = !this.flag;
  
  }
 
}
