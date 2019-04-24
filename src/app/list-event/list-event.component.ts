import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';  

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  
  public events;  
  //initialize the call using eventService
  constructor(private _myService: EventService) { }
  ngOnInit() {
    this.getEvents();
  }
  //method called OnInit
  getEvents() {
    this._myService.getEvents().subscribe(
      //read data and assign to public variable students
      data => { this.events = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  
  onDelete(eventId: string) {
    this._myService.deleteEvent(eventId);
  }
}
