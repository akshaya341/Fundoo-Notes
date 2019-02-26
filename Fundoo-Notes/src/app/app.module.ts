
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMaterial } from './app.material.module';
import { ForgetComponent } from './components/forget/forget.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetComponent } from './components/reset/reset.component';
import { NotecardComponent } from './components/notecard/notecard.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { NoteComponent } from './components/note/note.component';
import { IconListComponent } from './components/icon-list/icon-list.component';
import { ContentComponent } from './components/content/content.component';
import { EditLableComponent } from './components/edit-lable/edit-lable.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { TrashComponent } from './components/trash/trash.component';
import {AddArchiveComponent} from './components/add-archive/add-archive.component';
// import { ComponentsComponent } from './components/components/components.component';

   // import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgetComponent,
    ResetComponent,
    NotecardComponent,
    MaincardComponent,
    NoteComponent,
    IconListComponent,
    ContentComponent,
    EditLableComponent,
    UpdateNoteComponent,
    ArchieveComponent,
    SearchComponent,
    SearchFilterPipe,
    TrashComponent,
    AddArchiveComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([]),
    HttpClientModule ,
   AppMaterial
  ],
  entryComponents:[
    EditLableComponent,
  ],
  // exports : [
  //   EditLableComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
