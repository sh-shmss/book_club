import { Component, OnInit ,Input} from '@angular/core';
import { CommentService } from '../comment.service';
import {ActivatedRoute, Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() bookname:string;
  @Input() comment: string;
  private mode = 'add';
  private id: string;
  constructor(private _myService: CommentService,private router: Router, public route: ActivatedRoute) { }
  onSubmit(){
 if(this.mode == 'add')
this._myService.addComments(this.firstName ,this.lastName,this.bookname,this.comment);
this.router.navigate(['/view']);
  console.log("You submitted: " + this.firstName + " " +
  this.lastName +" "+this.bookname+" "+this.comment);
  alert("Comments have been submitted. Thank you!");
  this.router.navigate(['/view']);
location.reload();
if(this.mode == 'edit')
console.log("update called");
this._myService.updateComments(this.id,this.firstName,this.lastName,this.bookname,this.comment);
  }
  public comments;
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
      { this.mode = 'edit'; /*request had a parameter _id */
      this.id = paramMap.get('_id');}
      else {this.mode = 'add';
      this.id = null; }
    });
    this.getStudents();
    }
  getStudents() {
    this._myService.getComments().subscribe(
    //read data and assign to public variable students
    data => { this.comments = data},
    err => console.error(err),
    () => console.log('finished loading')
    );
    }
    reset()
    {
        this.reset();

    }

}
