import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookclub Web Application - Component 1: Users';
  nameForm = 'Registration Form';
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
    onDelete(suserId: string) {
      this._myService.deleteUser(suserId);
    }


}
