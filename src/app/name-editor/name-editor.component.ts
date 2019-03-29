import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ClubService } from '../club.service';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() nickName: string;
  @Input() email: string;
  @Input() bookClub: string;


  private mode = 'add'; // default mode
  private id: string; // user ID
  public users;
  public clubs;

  public x;
  public y;

  onSubmit(){
    if(this.mode == 'add')
    // console.log('You submitted: ' + this.firstName + ' ' + this.lastName + ' ' + this.nickName + ' ' + this.email + ' ' + this.bookClub);
    this._myService.addUsers (this.firstName , this.lastName, this.nickName, this.email, this.bookClub);
    // this.router.navigate(['/listUsers']);
    window.location.replace('/listUsers'); //I referred to https://developer.mozilla.org/en-US/docs/Web/API/Location/reload to find this method.
    if(this.mode == 'edit')
    // alert ("Hi");
    this._myService.updateUser (this.id, this.firstName , this.lastName, this.nickName, this.email, this.bookClub);
    // location.reload();
    // this.router.navigate(['/listUsers']);
    window.location.replace('/listUsers');
  }

  constructor(private _myService: UserService, private _myService2: ClubService, private router: Router, public route: ActivatedRoute) { }
  // myFunction(){
  //   this.x = document.getElementById("add");
  //   this.y = document.getElementById("edit");
  //   this.x.style.display = "none";
  //   this.y.style.display = "block";
  //  }

  // buttonOnMouseOver(x){
  //   //  console.log (x)
  //   this.firstName = x.firstName;
  //   this.lastName = x.lastName;
  //   this.nickName = x.nickName;
  //   this.email = x.email;
  //   this.bookClub = x.bookClub;
  //  }

   myFunction2(x){
      for (let i = 0; i < x.length; i++){
           if(x[i]._id == this.id) {
              return i;
      }
    }
   }

   myFunction3(x){
    //  console.log (x)
    this.firstName = x.firstName;
    this.lastName = x.lastName;
    this.nickName = x.nickName;
    this.email = x.email;
    this.bookClub = x.bookClub;
   }

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'edit'; /*request had a parameter _id */
           this.id = paramMap.get('_id');
          }
      //  else {this.mode = 'add';
      //      this.id = null;
      //      this.firstName = '';
      //      this.lastName = '';
      //      this.nickName = '';
      //      this.email = '';
      //      this.bookClub = '';
      //     }
     });
     if (this.mode == 'edit') {
      //
       this.x = this._myService.getUsers ();
       this._myService.getUsers().subscribe(
            //read data and assign to public variable students
            data => { this.users = data},
            err => console.error(err),
            () => this.myFunction3(this.users[this.myFunction2(this.users)])
      );
        // this.myFunction()
      }
      this.x = this._myService2.getClubs ();
      this._myService2.getClubs().subscribe(
          //read data and assign to public variable students
          data => { this.clubs = data},
          err => console.error(err),
          () => console.log ('Clubs loaded')
      );
     }
}
