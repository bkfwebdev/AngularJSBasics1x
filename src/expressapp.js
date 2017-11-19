"use strict";
var express = require("express");
var app = express();
app.listen(8080, function(){
    console.log("the server is running on port 8080");
});
app.use("/",express.static("public"));

