import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EventService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data
    getEvents() {
        return this.http.get('http://localhost:8000/events');
    }

    // Uses http.post() to post data
    addEvents(booktitle: string, eventtitle: string, eventurl: string, street: string, city: string, state: string, zip: number, country: string, startdate: number, starttime: number, enddate: number, endtime: number, eventdescription: string, organizername: string) {
        this.http.post('http://localhost:8000/events',{ booktitle, eventtitle, eventurl, street, city, state, zip, country, startdate, starttime, enddate, endtime, eventdescription, organizername })
        .subscribe((responseData) => {
            console.log(responseData);
        });
        // location.reload(true);
        window.location.replace('listEvent');

    }

    deleteEvent(eventId: string) {
        this.http.delete("http://localhost:8000/events/" + eventId)
          .subscribe(() => {
              console.log('Deleted: ' + eventId);
        });
        location.reload();
      }

      updateEvent(eventId: string, booktitle, eventtitle: string, eventurl: string, street: string, city: string, state: string, zip: number, country: string, startdate: number, starttime: number, enddate: number, endtime: number, eventdescription: string, organizername: string) {
        //request path http://localhost:8000/students/5xbd456xx
        //first and last names will be send as HTTP body parameters
            this.http.put("http://localhost:8000/events/"
                 + eventId,{ booktitle, eventtitle, eventurl, street, city, state, zip, country, startdate, starttime, enddate, endtime, eventdescription, organizername })
              .subscribe(() => {
                  console.log('Updated: ' + eventId);
              });
              location.reload();
    }

}

