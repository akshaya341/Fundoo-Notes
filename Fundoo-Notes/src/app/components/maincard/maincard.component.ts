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
  responce: any;
   color: any = "#fafafa";
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate([''])
  }

 

  @Output() messageEvent = new EventEmitter<string>();


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
          color  : 'this.color',
          reminder : '',
          collaberators : ''
       }
        console.log("model data",this.model)
       this.httpService.encodedPostForm('notes/addNotes',this.model).subscribe(data =>{
        console.log("responace data",data);
        this.responce = data;
        console.log("id: ",this.responce.id );
        this.messageEvent.emit(this.model);
      },
      err =>
      {
        alert('Something went wrong ');
        console.log("error-------",err);   
      })
     }
     
   }
   Changes($event){
    
     
     this.color=$event;
     console.log("im reached in main card",this.color);
   }


  reverseFlag($event) {
    this.flag = !this.flag;
  
  }
 
}
