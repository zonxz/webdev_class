// index.js
//Caleb Reiman
//CSE4050 Web Devlopment
//Using auth0.com for tutorial using node.js
//express.js and pug templates styled with CSS


/**
 * Required External Modules
 */

 var express = require("express");
 var bodyParser = require("body-parser")
 const path = require("path");
 var lemon = require("./script/test.js"); //just testing importing custom script
/**
 * App Variables
 */

 var app = express();
 var urlencodedParser = bodyParser.urlencoded({extended:false})
 const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
 //app.use(express.urlencoded({ extended: false })); //in built string handling for post
 app.use(express.static(path.join(__dirname, "public")));

/*
*   Testing server side scripting and interpolation
*/

var username = "Mr. Testname:'I was declared server side i got '";
var me = lemon.getMe;



/*
 * Routes Definitions
 */
 app.get("/", (req, res) => {
   res.render("index", { title: "Home"});
 });
 app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile:{nickname: "Caleb"} });
});
app.get("/logout", (req, res) => {
  res.render("logout", { title: "LoggedOut",user:username,usrlem:me });
  
});
app.get("/test", (req, res) => {
  res.render("test", { title:"test" });
});

app.post("/user", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render("user-fetched", { data:req.body, title:"Profile", userProfile:{nickname: "Caleb"}});
});

/*
 * Post Handler
 */

/*app.post('/handler', function (req, res){
  console.log(req.body);
  res.send(req.body);
});


/*
 app.get("/", (req, res) => {
   res.status(200).send("ITS WORKING!!!");
 });
*/

/**
 * Server Activation
 */

 app.listen(port, () => {
   console.log(`Listening to requests on http://localhost:${port}`);
 });
