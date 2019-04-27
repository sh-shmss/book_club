import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClubEditorComponent } from './club-editor/club-editor.component';
import { ListClubsComponent } from './list-clubs/list-clubs.component';
import { ClubService } from './club.service';
import {MatSelectModule} from '@angular/material/select';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ViewcommentComponent } from './viewcomment/viewcomment.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EventformComponent } from './eventform/eventform.component';
import {MatToolbarModule} from '@angular/material/toolbar';



const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: ListUsersComponent
 },       {
  path: 'addUser',         //when users added
   component: NameEditorComponent
 },      {
  path: 'editUser/:_id',         //when students edited
   component: NameEditorComponent
},      {
   path: 'listUsers',       //when users listed
   component: ListUsersComponent
},       {
  path: 'addClub',       //when users listed
  component: ClubEditorComponent
},       {
  path: 'editClub/:_id',       //when users listed
  component: ClubEditorComponent
},       {
  path: 'listClubs',       //when users listed
  component: ListClubsComponent
},        {
 path: 'addcomment',
 component: AddCommentComponent
 },
 {
   path: 'edit/:_id',
   component: AddCommentComponent
   },
{
   path:'view',
   component:ViewcommentComponent
 }

 ,       {
  path: 'addEvent',         //when events added
  component: EventformComponent
},       {
 path: 'editEvent/:_id',         //when events edited
 component: EventformComponent
},          {
  path: 'listEvent',       //when events listed
  component: ListEventComponent
} ,


 {
  path: '**',                 //when path cannot be found
  component: NotFoundComponent
},
];


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    NavigationMenuComponent,
    ListUsersComponent,
    NotFoundComponent,
    ClubEditorComponent,
    ListClubsComponent,
    AddCommentComponent,
    ViewcommentComponent,
    ListEventComponent,
    EventformComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,ClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }



// key: m1fBr3Av6nUHKoStY6tA
// secret: OxmObFmejN5FHQuEWoZP9mfZk1OVcjRQdL0Xq1ueZE
