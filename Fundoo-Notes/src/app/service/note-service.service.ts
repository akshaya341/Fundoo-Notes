import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
 

  constructor(private httpService : HttpService,private http: HttpClient) { }
   baseUrl = "http://34.213.106.173/api/"

  postcolor(body){
    return this.httpService.postJSON('/note/changesColorNotes',body)
  }

    getcard(){
         return this.httpService.getHttp('notes/getNotesList');
    }
    getTrash(){
      return this.httpService.getHttp('notes/getTrashNotesList')
    }
    // deleteNote(body){
    //   console.log(body);
    //   return this.httpService.postJSON('notes/trashNotes',body)
    // }

    deleteNote(body) :any{
      console.log(body);
      //const-Type
      const httpOptions ={
        headers : new HttpHeaders({
        'content-Type' : 'application/json',  
        'Authorization' : localStorage.getItem('token')
  
      })
      }
      console.log(localStorage.getItem('token'));
      return this.http.post(this.baseUrl+'notes/trashNotes',body,httpOptions);
    }
}
