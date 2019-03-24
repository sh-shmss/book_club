import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    NavigationMenuComponent,
    ListUsersComponent,
    NotFoundComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
