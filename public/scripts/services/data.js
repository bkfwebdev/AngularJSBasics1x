"use strict";  
angular.module("todoListApp")
.service("dataService", function($http){
this.getTodos = function (callback){
    $http.get("mock/todos.json").then(callback);
};

this.deleteTodo = function(todo,$index){
    console.log("the "+ todo +" todo has been deleted!");
    console.log($index);
    }

this.saveTodo = function(todo,$index){
    console.log("the "+ todo +" todo has been saved!");
    console.log($index);
}
})