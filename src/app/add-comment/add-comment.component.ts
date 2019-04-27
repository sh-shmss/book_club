import { Component, OnInit ,Input} from '@angular/core';
import { CommentService } from '../comment.service';
import {ActivatedRoute, Router,ParamMap } from '@angular/router';
import { ClubService } from '../club.service';

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

  public x;
  public clubs;
  public comments;
  private mode = 'add';
  private id: string;
  constructor(private _myService: CommentService, private _myService2: ClubService, private router: Router, public route: ActivatedRoute) { }
  onSubmit(){
 if(this.mode == 'add')
this._myService.addComments(this.firstName ,this.lastName,this.bookname,this.comment);
window.location.replace('/view');
  console.log("You submitted: " + this.firstName + " " +
  this.lastName +" "+this.bookname+" "+this.comment);
  alert("Comments have been submitted. Thank you!");
  window.location.replace('/view');
location.reload();
if(this.mode == 'edit')
console.log("update called");
this._myService.updateComments(this.id,this.firstName,this.lastName,this.bookname,this.comment);
window.location.replace('/view');
  }


  myFunction2(x){
    for (let i = 0; i < x.length; i++){
         if(x[i]._id == this.id) {
            return i;
    }
  }
 }

 myFunction3(x){
  //  console.log (x)
  this.firstName = x.firstName;
  this.lastName = x.lastName;
  this.bookname= x.bookname;

 }

  ngOnInit(){
    this.x = this._myService2.getClubs ();
    this._myService2.getClubs().subscribe(
        //read data and assign to public variable students
        data => { this.clubs = data},
        err => console.error(err),
        () => console.log ('Clubs loaded')
    );



    

    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
      { this.mode = 'edit'; /*request had a parameter _id */
      this.id = paramMap.get('_id');}
      else {this.mode = 'add';
      this.id = null; }
    });
    this.getComments();

    if (this.mode == 'edit') {
      //
      console.log('name came');
       this.x = this._myService.getComments ();
       this._myService.getComments().subscribe(
            //read data and assign to public variable students
            data => { this.comments = data},
            err => console.error(err),
            () => this.myFunction3(this.comments[this.myFunction2(this.comments)])
           
      );
        // this.myFunction()
      }


    }
    getComments() {
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
