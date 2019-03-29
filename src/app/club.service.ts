import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClubService {

    constructor(private http:HttpClient) {}
    // Uses http.post() to post data
    addClubs(clubName: string, createdOn: string, bookTitle: string, author: string, members: string) {
      this.http.post('http://localhost:8000/clubs',{ clubName, createdOn, bookTitle, author, members })
    .subscribe((responseData) => {
        console.log(responseData);
      });
      // location.reload();

    }
    // Uses http.get() to load data
    getClubs() {
        return this.http.get('http://localhost:8000/clubs');
    }

        deleteClub(clubId: string) {
      this.http.delete("http://localhost:8000/clubs/" + clubId)
        .subscribe(() => {
            console.log('Deleted: ' + clubId);
        });
      location.reload();
    }

    updateClub(clubId: string, clubName: string, createdOn: string, bookTitle: string, author: string, members: string) {
      // first and last names will be send as HTTP body parameters
      this.http.put("http://localhost:8000/clubs/"
               + clubId, { clubName, createdOn, bookTitle, author, members})
              .subscribe(() => {
              console.log('Updated: ' + clubId);
            });
            // location.reload();
            // window.location.replace('/listClubs');

      }


}

