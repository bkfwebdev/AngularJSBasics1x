"use strict";
angular.module("todoListApp")
.controller("mainCtrl",function($scope, dataService){
    
        dataService.getTodos(function(response){
        console.log("attempting to get data");     
        console.log(response.data);
        $scope.todos = response.data;
        });
    
        $scope.addTodo = function(newTodo){
            let newObject = {name:newTodo}
            $scope.todos.unshift(newObject);
        }
    
        $scope.deleteTodo = function(todo, $index){
            dataService.deleteTodo(todo.name);
            $scope.todos.splice($index,1);
           // console.dir(todo.name);
           // console.log($index);
           // console.log("you should see some data here");
        }
    
        $scope.saveTodo = function(todo, $index){
            dataService.saveTodo(todo.name,$index);
            // console.dir(todo.name)
            // console.log($index)
            // console.log("you should see some data here too");
        }
    
    })