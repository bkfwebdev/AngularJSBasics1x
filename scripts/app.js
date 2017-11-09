angular.module("todoListApp", [])

.controller("mainCtrl",function($scope, dataService){

    dataService.getTodos(function(response){
    console.log("attempting to get data");     
    console.log(response.data);
    $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index){
        dataService.deleteTodo(todo.name);
       // console.dir(todo.name);
       // console.log($index);
       // console.log("you should see some data here");
    }

    $scope.saveTodo = function(todo, $index){
        dataService.saveTodo(todo.name);
        // console.dir(todo.name)
        // console.log($index)
        // console.log("you should see some data here too");
    }

})

.service("dataService", function($http){
this.getTodos = function (callback){
    $http.get("./mock/todos.json").then(callback);
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