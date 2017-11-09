angular.module("todoListApp", [])

.controller("mainCtrl",function($scope, dataService){

    dataService.getTodos(function(response){
    console.log("attempting to get data");     
    console.log(response.data);
    $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo){
        dataService.deleteTodo(todo);
        console.dir(todo.name);
        console.log("you should see some data here");
    }

    $scope.saveTodo = function(todo){
        dataService.saveTodo(todo.name);
        console.dir(todo.name)
        console.log("you should see some data here too");
    }

})

.service("dataService", function($http){
this.getTodos = function (callback){
    $http.get("./mock/todos.json").then(callback);
};

this.deleteTodo = function(todo){
    console.log("the "+ todo.name +" has been deleted!");
    console.dir(todo);
    }

this.saveTodo = function(todo){
    console.log("the "+ todo.name +" has been saved!");
    console.dir(todo);
}
})