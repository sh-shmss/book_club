import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ClubService } from '../club.service';


@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {

  @Input() eventtitle: string;
  @Input() eventurl: string;
  @Input() street: string;
  @Input() city: string;
  @Input() state: string;
  @Input() zip: number;
  @Input() country: string;
  @Input() startdate: number;
  @Input() starttime: number;
  @Input() enddate: number;
  @Input() endtime: number;
  @Input() eventdescribe: string;
  @Input() organizername: string;

  private mode = 'Add';
  private id: string;
  public x;
  public y;
  public clubs;
  public Events;


  constructor(private _myService : EventService, private _myService2: ClubService, private router:Router, public route: ActivatedRoute ) { }

  onSubmit(){
    console.log("You submitted: " + this.eventtitle + " " + this.eventurl + " " + this.street + " " + this.city + " " + this.state + " " + this.zip + " " + this.country +  " " + this.startdate + " " + this.starttime + " " + this.enddate + " " + this.endtime + " " + this.eventdescribe + " " + this.organizername );
    if(this.mode == 'Add')
      this._myService.addEvents(this.eventtitle, this.eventurl, this.street, this.city, this.state, this.zip, this.country, this.startdate, this.starttime, this.enddate, this.endtime, this.eventdescribe, this.organizername);
      window.location.replace('/listEvent');
    if(this.mode == 'Edit')
      this._myService.updateEvent(this.id, this.eventtitle, this.eventurl, this.street, this.city, this.state, this.zip, this.country, this.startdate, this.starttime, this.enddate, this.endtime, this.eventdescribe, this.organizername);
    window.location.replace('/listEvent');
  }


  myFunction4(x){
    for (let i = 0; i < x.length; i++){
         if(x[i]._id == this.id) {
            return i;
    }
  }
 }

 myFunction5(x){
  //  console.log (x)
  this.eventtitle = x.eventtitle;
  this.eventurl = x.eventurl;
  this.street = x.street;
  this.city = x.city;
  this.state = x.state;
  this.zip = x.zip;
  this.country = x.country;
  this.startdate = x.startdate;
  this.starttime = x.starttime;
  this.enddate = x.enddate;
  this.endtime = x.endtime;
  this.eventdescribe = x.eventdescribe;
  this.organizername = x.organizername;
 }


  ngOnInit() {
    this.x = this._myService2.getClubs ();
    this._myService2.getClubs().subscribe(
        //read data and assign to public variable students
        data => { this.clubs = data},
        err => console.error(err),
        () => console.log ('Clubs loaded')
    );


    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
        { this.mode = 'Edit'; /*request had a parameter _id */
          this.id = paramMap.get('_id');}
      else {this.mode = 'Add';
          this.id = null; }
    });


    this.x = this._myService.getEvents();
    this._myService.getEvents().subscribe(
      data => { this.Events = data},
      err => console.error(err),
      //() => console.log ('Events loaded')
      () => this.myFunction5(this.Events[this.myFunction4(this.Events)])
    );

  }


}
