import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

    //declare variable to hold response and make it public to be accessible from components.html
    public users;
    //initialize the call using StudentService
    constructor(private _myService: UserService) { }
    ngOnInit() {
      this.getUsers();
    }
    //method called OnInit
    getUsers() {
     this._myService.getUsers().subscribe(
        //read data and assign to public variable students
        data => { this.users = data},
        err => console.error(err),
        () => console.log('finished loading')
      );
    }
    onDelete(userId: string) {
      this._myService.deleteUser(userId);
    }
}

