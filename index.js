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
const { response } = require("express");
 
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
 app.use(bodyParser.json());

/*
*   Testing server side scripting and interpolation
*/

var username = "Mr. Testname:'I was declared server side i got '";




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
  res.render("logout", { title: "LoggedOut",user:username});
  
});
app.get("/test", (req, res) => {
  res.render("test", { title:"test" });
});


/*
 * Post Handler
 */

app.post("/user", urlencodedParser, (req, res) => {
  
  var axios = require("axios").default;

  var options = {
  method: 'GET',
  url: 'https://www.boredapi.com/api/activity'
  };

axios.request(options).then(function (response) {
	console.log(response.data);
  var j = response.data.activity
  console.log(j);
  var s = JSON.stringify(j);
  console.log(s);
  console.log(req.body);
  res.render("user-fetched", { data:req.body, api:s, title:"Profile", userProfile:{nickname: "Caleb"}});

  }).catch(function (error) {
	  console.error(error);
  });
  
  
});

/**
 * Server Activation
 */

 app.listen(port, () => {
   console.log(`Listening to requests on http://localhost:${port}`);
 });