// const express = require('express');
// const app = express();
// const bodyParser  = require('body-parser');

// const mongoose = require('mongoose');
// //specify where to find the schema
// const comment = require('./models/comment')
// const User = require('./models/user')
// const Club = require('./models/club')


// // connect and display the status
// // mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
// mongoose.connect('mongodb+srv://user1:IT_6203sshamsko@cluster0-jqgu7.mongodb.net/IT6203', { useNewUrlParser: true })
//   .then(() => { console.log("connected"); })
//   .catch(() => { console.log("error connecting"); });


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())


// // use the following code on any request that matches the specified mount path
// app.use((req, res, next) => {
//    console.log('This line is always called');
//    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
//    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
//    next();
// });

// app.get('/users', (req, res, next) => {
//     //call mongoose method find (MongoDB db.Users.find())
//     User.find()
//     //if data is returned, send data as a response
//     .then(data => res.status(200).json(data))
//     //if error, send internal server error
//     .catch(err => {
//     console.log('Error: ${err}');
//     res.status(500).json(err);
//   });

// });

// app.get('/clubs', (req, res, next) => {
//   Club.find()
//   //if data is returned, send data as a response
//   .then(data => res.status(200).json(data))
//   //if error, send internal server error
//   .catch(err => {
//   console.log('Error: ${err}');
//   res.status(500).json(err);
// });

// });

// app.post('/users', (req, res, next) => {
//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     nickName: req.body.nickName,
//     email: req.body.email,
//     bookClub: req.body.bookClub
//   });
//   //send the document to the database
//   user.save()
//     //in case of success
//     .then(() => { console.log('Success');})
//     //if error
//     .catch(err => {console.log('Error:' + err);});

// });

// app.post('/clubs', (req, res, next) => {
//   const club = new Club({
//     clubName: req.body.clubName,
//     createdOn: req.body.createdOn,
//     bookTitle: req.body.bookTitle,
//     author: req.body.author,
//     members: req.body.members
//   });
//   //send the document to the database
//   club.save()
//     //in case of success
//     .then(() => { console.log('Success');})
//     //if error
//     .catch(err => {console.log('Error:' + err);});

// });

// app.delete("/users/:id", (req, res, next) => {
//   User.deleteOne({ _id: req.params.id }).then(result => {
//     console.log(result);
//     res.status(200).json("Deleted!");
//   });
// });

// app.delete("/clubs/:id", (req, res, next) => {
//   Club.deleteOne({ _id: req.params.id }).then(result => {
//     console.log(result);
//     res.status(200).json("Deleted!");
//   });
// });


// // serve incoming put requests to /users
// app.put('/users/:id', (req, res, next) => {
//   console.log("id: " + req.params.id)
//   // check that the parameter id is valid
//   if (mongoose.Types.ObjectId.isValid(req.params.id)) {
//     //find a document and set new first and last names
//     User.findOneAndUpdate({_id: req.params.id},
//       {$set:{firstName : req.body.firstName,
//         lastName : req.body.lastName, nickName : req.body.nickName,
//         email: req.body.email, bookClub: req.body.bookClub}},{new:true})
//      .then((user) => {
//         if (user) { //what was updated
//           console.log(user);
//         } else {
//           console.log("no data exist for this id");
//         }
//      })
//     .catch((err) => {
//       console.log(err);
//      });
//  } else {
//    console.log("please provide correct id");
//  }

// });

// // serve incoming put requests to /clubs
// app.put('/clubs/:id', (req, res, next) => {
//   console.log("id: " + req.params.id)
//   // check that the parameter id is valid
//   if (mongoose.Types.ObjectId.isValid(req.params.id)) {
//     //find a document and set new first and last names
//     Club.findOneAndUpdate({_id: req.params.id},
//       {$set:{clubName : req.body.clubName,
//         createdOn : req.body.createdOn, bookTitle : req.body.bookTitle,
//         author: req.body.author, members: req.body.members}},{new:true})
//      .then((club) => {
//         if (club) { //what was updated
//           console.log(club);
//         } else {
//           console.log("no data exist for this id");
//         }
//      })
//     .catch((err) => {
//       console.log(err);
//      });
//  } else {
//    console.log("please provide correct id");
//  }

// });

// app.post('/comments', (req, res, next) => {
//   const cmnt = new comment({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       bookname: req.body.bookname,
//       comment:req.body.comment
//       });
//       cmnt.save()
// .then(() => { console.log('Success');})
// .catch(err => {console.log('Error:' + err);});
//   });
//   app.delete("/comments/:id", (req, res, next) => {
//       comment.deleteOne({ _id: req.params.id }).then(result => {
//       console.log(result);
//       res.status(200).json("Deleted!");
//       });
//       });
//       app.put('/comments/:id', (req, res, next) => {
//         console.log("id: " + req.params.id)
//         console.log("update three called");
//         // check that the parameter id is valid
//         if (mongoose.Types.ObjectId.isValid(req.params.id)) {
//         //find a document and set new first and last names
//         comment.findOneAndUpdate({_id: req.params.id},
//         {$set:{
//           firstName:req.body.firstName,
//           lastName:req.body.lastName,
//         bookname:req.body.bookname,
//       comment:req.body.comment}},{new:true})
//         .then((cmnt) => {
//         if (cmnt) { //what was updated
//         console.log(cmnt);
//         } else {
//         console.log("no data exist for this id");
//         }
//         })
//         .catch((err) => {
//         console.log(err);
//         });
//         } else {
//         console.log("please provide correct id");
//         }
//         });

// //to use this middleware in other parts of the application
// module.exports=app;


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const comment = require('./models/comment')
const User = require('./models/user')
const Club = require('./models/club')
const Event = require('./models/event')

mongoose.connect('mongodb+srv://user1:IT_6203sshamsko@cluster0-jqgu7.mongodb.net/IT6203', { useNewUrlParser: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });

app.use((req, res, next) => {
console.log('This line is always called');
res.setHeader('Access-Control-Allow-Origin', '*'); //can connectfrom any host
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS,DELETE'); //allowable methods
res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
next();
});

app.get('/comments', (req, res, next) => {
comment.find()
.then(data => res.status(200).json(data))
.catch(err => {
console.log('Error: ${err}');
res.status(500).json(err);
});
});
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/comments', (req, res, next) => {
    const cmnt = new comment({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        bookname: req.body.bookname,
        comment:req.body.comment
        });
        cmnt.save()
.then(() => { console.log('Success');})
.catch(err => {console.log('Error:' + err);});
    });
    app.delete("/comments/:id", (req, res, next) => {
        comment.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
        });
        });
        app.put('/comments/:id', (req, res, next) => {
          console.log("id: " + req.params.id)
          console.log("update three called");
          // check that the parameter id is valid
          if (mongoose.Types.ObjectId.isValid(req.params.id)) {
          //find a document and set new first and last names
          comment.findOneAndUpdate({_id: req.params.id},
          {$set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
          bookname:req.body.bookname,
        comment:req.body.comment}},{new:true})
          .then((cmnt) => {
          if (cmnt) { //what was updated
          console.log(cmnt);
          } else {
          console.log("no data exist for this id");
          }
          })
          .catch((err) => {
          console.log(err);
          });
          } else {
          console.log("please provide correct id");
          }
          });


          app.get('/users', (req, res, next) => {
            //call mongoose method find (MongoDB db.Users.find())
            User.find()
            //if data is returned, send data as a response
            .then(data => res.status(200).json(data))
            //if error, send internal server error
            .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
          });

        });



        app.get('/clubs', (req, res, next) => {
          Club.find()
          //if data is returned, send data as a response
          .then(data => res.status(200).json(data))
          //if error, send internal server error
          .catch(err => {
          console.log('Error: ${err}');
          res.status(500).json(err);
        });

        });

        app.post('/users', (req, res, next) => {
          const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nickName: req.body.nickName,
            email: req.body.email,
            bookClub: req.body.bookClub
          });
          //send the document to the database
          user.save()
            //in case of success
            .then(() => { console.log('Success');})
            //if error
            .catch(err => {console.log('Error:' + err);});

        });

        app.post('/clubs', (req, res, next) => {
          const club = new Club({
            clubName: req.body.clubName,
            createdOn: req.body.createdOn,
            bookTitle: req.body.bookTitle,
            isbn: req.body.isbn,
            author: req.body.author,
            members: req.body.members
          });
          //send the document to the database
          club.save()
            //in case of success
            .then(() => { console.log('Success');})
            //if error
            .catch(err => {console.log('Error:' + err);});

        });

        app.delete("/users/:id", (req, res, next) => {
          User.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
          });
        });

        app.delete("/clubs/:id", (req, res, next) => {
          Club.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
          });
        });


        // serve incoming put requests to /users
        app.put('/users/:id', (req, res, next) => {
          console.log("id: " + req.params.id)
          // check that the parameter id is valid
          if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            //find a document and set new first and last names
            User.findOneAndUpdate({_id: req.params.id},
              {$set:{firstName : req.body.firstName,
                lastName : req.body.lastName, nickName : req.body.nickName,
                email: req.body.email, bookClub: req.body.bookClub}},{new:true})
             .then((user) => {
                if (user) { //what was updated
                  console.log(user);
                } else {
                  console.log("no data exist for this id");
                }
             })
            .catch((err) => {
              console.log(err);
             });
         } else {
           console.log("please provide correct id");
         }

        });

        // serve incoming put requests to /clubs
        app.put('/clubs/:id', (req, res, next) => {
          console.log("id: " + req.params.id)
          // check that the parameter id is valid
          if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            //find a document and set new first and last names
            Club.findOneAndUpdate({_id: req.params.id},
              {$set:{clubName : req.body.clubName,
                createdOn : req.body.createdOn, bookTitle : req.body.bookTitle, isbn : req.body.isbn,
                author: req.body.author, members: req.body.members}},{new:true})
             .then((club) => {
                if (club) { //what was updated
                  console.log(club);
                } else {
                  console.log("no data exist for this id");
                }
             })
            .catch((err) => {
              console.log(err);
             });
         } else {
           console.log("please provide correct id");
         }

        });



// Jhanvi
app.get('/events', (req, res, next) => {
  //call mongoose method find (MongoDB db.Events.find())
   Event.find()
    //if data is returned, send data as a response
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
   });
});

app.set('/events', (req, res, next) => {
  Event.edit({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Edit!");
  });
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// serve incoming post requests to /events
app.post('/events', (req, res, next) => {
  // create a new event variable and save request’s fields
  const event = new Event({
    booktitle: req.body.booktitle,
    eventtitle: req.body.eventtitle,
    eventurl: req.body.eventurl,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country,
    startdate: req.body.startdate,
    starttime: req.body.starttime,
    enddate: req.body.enddate,
    endtime: req.body.endtime,
    eventdescription: req.body.eventdescription,
    organizername: req.body.organizername,

  });


  //send the document to the database
  event.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/events/:id", (req, res, next) => {
  Event.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

// serve incoming put requests to /events
app.put('/events/:id', (req, res, next) => {
  console.log("_id: " + req.params.id)
  // check that the parameter id is valid
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Event.findOneAndUpdate({_id: req.params.id},
      {$set:{
        booktitle : req.body.booktitle,
        eventtitle : req.body.eventtitle,
        eventurl : req.body.eventurl,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        startdate: req.body.startdate,
        starttime: req.body.starttime,
        enddate: req.body.enddate,
        endtime: req.body.endtime,
        eventdescription: req.body.eventdescription,
        organizername: req.body.organizername,
      }},{new:true})
     .then((event) => {
        if (event) { //updated event details
          console.log(event);
        } else {
          console.log("no data exist for this id");
        }
     })
    .catch((err) => {
      console.log(err);
     });
 } else {
   console.log("please provide correct id");
 }

});



module.exports=app;
