import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

    constructor(private http:HttpClient) {}
    // Uses http.post() to post data
    addUsers(firstName: string, lastName: string, nickName: string, email: string, bookClub: string) {
      this.http.post('http://localhost:8000/users',{ firstName, lastName, nickName, email, bookClub })
    .subscribe((responseData) => {
        console.log(responseData);
      });
      location.reload();

    }
    // Uses http.get() to load data
    getUsers() {
        return this.http.get('http://localhost:8000/users');
    }
    deleteUser(userId: string) {
      this.http.delete("http://localhost:8000/users/" + userId)
        .subscribe(() => {
            console.log('Deleted: ' + userId);
        });
      location.reload();
    }

}

