import { Component, OnInit, Input } from '@angular/core';
import { ClubService } from '../club.service';
import { UserService } from '../user.service'
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-club-editor',
  templateUrl: './club-editor.component.html',
  styleUrls: ['./club-editor.component.css']
})
export class ClubEditorComponent implements OnInit {

  @Input() clubName: string;
  @Input() createdOn;
  @Input() bookTitle: string;
  @Input() author: string;
  @Input() members;
  @Input() isbn;


  current_date = new Date(); // Copied from https://angular.io/guide/pipes

  private mode = 'add'; // default mode
  private id: string; // club ID
  public clubs;
  public users;
  public x;
  public y;

  onSubmit(){
    if(this.mode == 'add')
    this._myService.addClubs (this.clubName , this.createdOn, this.bookTitle, this.isbn, this.author, this.members);
    window.location.replace('/listClubs'); //I referred to https://developer.mozilla.org/en-US/docs/Web/API/Location/reload to find this method.
    if(this.mode == 'edit')
    // alert ("Hi");
    this._myService.updateClub (this.id, this.clubName , this.createdOn, this.bookTitle, this.isbn, this.author, this.members);
    window.location.replace('/listClubs');
  }

  constructor(private _myService: ClubService, private _myService2: UserService, private router: Router, public route: ActivatedRoute) { }
   myFunction2(x){
      for (var i = 0; i < x.length; i++){
           if(x[i]._id == this.id) {
              return i;
      }
    }
   }

   myFunction3(x){
    //  console.log (x)
    this.clubName = x.clubName;
    this.createdOn = x.createdOn;
    this.bookTitle = x.bookTitle;
    this.isbn = x.isbn;
    this.author = x.author;
    this.members = x.members;
   }

   myFunction (x){
     let counter = 0;
     let club_name;
     let other_users;
     for (let i = 0; i < x.length; i++){
      if(x[i]._id == this.id) {
        club_name = x[i].clubName;
      }
    }
  this._myService2.getUsers().subscribe(
    //read data and assign to public variable clubs
    data => { other_users = data},
    err => console.error(err),
    () => (this.myfunction4(other_users, club_name))
  );
}

  myfunction4(arry,name){
    let counter = 0;
    for (let i = 0; i < arry.length; i++){
      if(arry[i].bookClub == name) {
        counter = counter+1;
      }
    }
    this.members = counter;
  }

   formatDate(){
     let day = this.current_date.getDate();
     let month = this.current_date.getMonth();
     let year = this.current_date.getFullYear();
     return month + "/" + day + "/" + year;
   }

  ngOnInit(){
   this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'edit'; /*request had a parameter _id */
           this.id = paramMap.get('_id');
          }

     });
     if (this.mode == 'edit') {
      //
       this.x = this._myService.getClubs ();
       this._myService.getClubs().subscribe(
            //read data and assign to public variable clubs
            data => { this.clubs = data},
            err => console.error(err),
            () => this.myFunction3(this.clubs[this.myFunction2(this.clubs)])
      );
      }
      else if (this.mode == 'add') {
        this.createdOn = this.formatDate();
        this.members = 0;
      }
      this.x = this._myService.getClubs ();
      this._myService.getClubs().subscribe(
            //read data and assign to public variable clubs
            data => { this.clubs = data},
            err => console.error(err),
            () => this.myFunction(this.clubs)
        );
}
}
