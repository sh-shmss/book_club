import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CommentService {
constructor(private http:HttpClient) {}
getComments() {
return this.http.get('http://localhost:8000/comments');
}

addComments(firstName: string, lastName: string,bookname: string, comment:string) {
    this.http.post('http://localhost:8000/comments',{ firstName,
    lastName,bookname,comment })
    .subscribe((responseData) => {
    console.log(responseData);
    });
    location.reload();
    }
    deleteComments(commentId: string) {
        this.http.delete("http://localhost:8000/comments/" + commentId)
        .subscribe(() => {
        console.log('Deleted: ' + commentId);
        });
    }
    updateComments(commentId: string,firstName: string, lastName:
        string,bookname:string,comment:string) {

        console.log("update one called");
        this.http.put("http://localhost:8000/comments/"+ commentId,{firstName, lastName,bookname,comment})
        .subscribe(() => {
            console.log('Updated: ' + commentId);
});
location.reload();
}

}
