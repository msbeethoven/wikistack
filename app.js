const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const { Page, User, db } = require('./models');
const wiki = require('./routes/wiki.js');
const user = require('./routes/user.js');
//const models = require('./models');



app.use(morgan('dev'));

app.use('/wiki', wiki);

app.use('/user', user);


app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false}));
//we need to use body parser 
//when we use in axpres app anything we get from front end with certain typ, we can parse it out.
//rec.body, rec.body.text, etc 
//urlencoded 
//false we can only send strings or arrays to backedn 
//true we can any send any type
//more of a security thing, anything other than strings/array dont send it 
//before you get ot routes, use the middleware 

app.get('/', function(req,res,next) {
  res.send(layout())
  next();
})

app.get('/wiki', function(req, res){
  res.send("hello hi there")
})

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

// // db.Page.sync()

// // db.User.sync()

// Page.sync()

// User.sync()

const init = async () => {
  await db.sync({force:true})
  app.listen(3000, function() {
    console.log("listening to port 3000!")
  })
}

init();


