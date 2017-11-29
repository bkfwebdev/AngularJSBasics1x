"use strict";
var express = require("express");
var todos = require("../../public/mock/todos");
var router = express.Router();
router.get("/todos", function(req,res){
    res.json({todos:todos});
})
// todo add post route
// todo add put route
// todo add get delete route

module.exports = router;
