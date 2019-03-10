import { Component, OnInit, Input } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  // first_name = new FormControl('');
  // last_name = new FormControl('');
  // nickname = new FormControl('');
  // email = new FormControl('');
  // bookclub = new FormControl('');
  // first_name_placeholder = 'John';
  // last_name_placeholder = 'Smith';
  // nickname_placeholder = 'jsmith1985';
  // email_placeholder = 'jsmith@yahoo.com';
  // bookclub_placeholder = 'spring_2019';

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() nickName: string;
  @Input() email: string;
  @Input() bookClub: string;

  constructor(private _myService: UserService) { }
      ngOnInit() {
  }
  onSubmit(){
    console.log('You submitted: ' + this.firstName + ' ' + this.lastName + ' ' + this.nickName + ' ' + this.email + ' ' + this.bookClub);
    this._myService.addUsers (this.firstName , this.lastName, this.nickName, this.email, this.email);
  }
  // updateInfo() {
    // this.first_name.setValue('');
    // this.last_name.setValue('');
    // this.email.setValue('');
    // this.nickname.setValue('');
    // this.bookclub.setValue('');
  // }
}
