import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import {ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-viewcomment',
  templateUrl: './viewcomment.component.html',
  styleUrls: ['./viewcomment.component.css']
})
export class ViewcommentComponent implements OnInit {


  constructor(private _myService: CommentService,private router: Router) { }

  public comments;
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this._myService.getComments().subscribe(
   
    data => { this.comments = data},
    err => console.error(err),
    () => console.log('finished loading')
    );
    }

    onDelete(commentId: string) {
      this._myService.deleteComments(commentId);
      this.router.navigate(['/view']);
alert("Your comment has been deleted");
location.reload();
      }


}
