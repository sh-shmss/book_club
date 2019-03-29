import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';


@Component({
  selector: 'app-list-clubs',
  templateUrl: './list-clubs.component.html',
  styleUrls: ['./list-clubs.component.css']
})
export class ListClubsComponent implements OnInit {

    //declare variable to hold response and make it public to be accessible from components.html
    public clubs;
    //initialize the call using StudentService
    constructor(private _myService: ClubService) { }
    ngOnInit() {
      this.getClubs();
    }
    //method called OnInit
    getClubs() {
     this._myService.getClubs().subscribe(
        //read data and assign to public variable students
        data => { this.clubs = data},
        err => console.error(err),
        () => console.log('finished loading')
      );
    }
    onDelete(clubId: string) {
      this._myService.deleteClub(clubId);
    }
}

