import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.scss']
})
export class MaincardComponent implements OnInit {

  flag = true;
  noteTitle: any;
  noteContent: any;
  model : any;
  constructor(private httpService: HttpService, private router: Router) { }

  colorArray = ["white", "red","orange", "yellow","green","teal","blue","darkblue","purple","pink","brown","gray"];

  ngOnInit() {
  }

  logout() {
    this.router.navigate([''])
  }

  reverseFlag() {
    this.flag = !this.flag;
  }


  //colorArray=["white", "red","orange", "yellow","green","teal","blue","darkblue","purple","pink","brown","gray"];

   addNote(){
     this.flag = !this.flag;
     this.noteTitle=document.getElementById('noteTitle').innerHTML;
     this.noteContent = document.getElementById('noteContent').innerHTML;

     //console.log()
     if(this.noteTitle || this.noteContent)
     {
      this.model= {
         title : this.noteTitle,
         description : this.noteContent,
         labelIdList	: '',
         checklist   : '',
         isPined   : false,
         isArchived : false,
          color  : '',
          reminder : '',
          collaberators : ''
       }
     }
     
   }


}
