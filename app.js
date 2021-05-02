const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

const userRoute = require("./routes/user.js");

app.get("/", (req, res) => {
  res.send(
    "This server is created to provide API for user data. Please use the following routes to get the data.<br/>"+
    "'/API/user/' GET to fetch data of all users<br/>"+
    "'/API/user/' POST with body to create data<br/>"+
    "'/API/user/id/:userID' GET to fetch data of particular user with id<br/>"+
    "'/API/user/name/:name' GET to fetch data of particular user with name<br/>"+
    "'/API/user/id/:userID' PATCH with body to update data of particular user with id<br/>"+
    "'/API/user/name/:name' PATCH with body to update data of particular user with name<br/>"+
    "'/API/user/id/:userID' DELETE to delete data of particular user with id<br/>"+
    "'/API/user/name/:name' DELETE to delete data of particular user with id<br/>"
  );
});

app.use("/API/user", userRoute);

app.listen(port, () => {
  console.log("App is running at port 3000");
});
