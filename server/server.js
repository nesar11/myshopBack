const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('./models/userModel');
const Product = require('./models/Product');
const Category = require('./models/Category');
const cors = require('cors');
const routes = require('./routes/route.js');
const session = require('express-session');
const productRouter = require('./routes/productRoute');
const cartRouter = require('./routes/cartRoute');
const categoryRouter = require('./routes/categoryRoute');

 
require("dotenv").config({
 path: path.join(__dirname, "../.env")
});
 
const app = express();
 
const PORT = process.env.PORT || 3000;
 
mongoose




 .connect('mongodb://localhost:27017/rbac',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true 
} )
 .then(() => {

  console.log('Connected to the Database successfully');
 });
 
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(async (req, res, next) => {
 if (req.headers["x-access-token"]) {
  const accessToken = req.headers["x-access-token"];
  const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
  // Check if token has expired
  if (exp < Date.now().valueOf() / 1000) { 
   return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
  } 
  res.locals.loggedInUser = await User.findById(userId); next(); 
 } else { 
  next(); 
 } 
});

app.use(session({
  secret: '123456',
  resave: false,
  saveUninitialized: true,
  cookie: {
      secure: true
  }
}));


app.use(cors());
// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
app.get('/categoryRouter', categoryRouter);
app.use('/api2/products', productRouter);
app.use('/api2/cart', cartRouter);
app.use('/api2/category/add', categoryRouter)



app.use(async (req, res, next) => {
  if (req.headers["x-access-token"]) {
   const accessToken = req.headers["x-access-token"];
   const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
   // Check if token has expired
   if (exp < Date.now().valueOf() / 1000) {
    return res.status(401).json({
     error: "JWT token has expired, please login to obtain a new one"
    });
   }
   res.locals.loggedInUser = await User.findById(userId);
   next();
  } else {
   next();
  }
});



app.use('/uploads', express.static('server/uploads'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });


  app.route({
    method: 'DELETE',
    path: '/sessions/_current',
    handler: function(req, reply){
      req.auth.session.clear();
      reply({}).code(204);
    }
  }); 


 
app.use('/', routes); app.listen(PORT, () => {
  console.log('Server is listening on Port:', PORT)
})