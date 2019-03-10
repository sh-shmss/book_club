import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  last_name = new FormControl('');
  nickname = new FormControl('');
  email = new FormControl('');
  // bookclub = new FormControl('');
  name_placeholder = 'John';
  last_name_placeholder = 'Smith';
  nickname_placeholder = 'jsmith1985';
  email_placeholder = 'jsmith@yahoo.com';
  // bookclub_placeholder = 'spring_2019';

  constructor() { }
    ngOnInit() {
  }

  updateInfo() {
    this.name.setValue('');
    this.last_name.setValue('');
    this.email.setValue('');
    this.nickname.setValue('');
    // this.bookclub.setValue('');
  }
}
