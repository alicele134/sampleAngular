var packages = [
    {
        "packageName": "abc", 
        "description": "this is example",
        "group": "1",
        "lastUpdate": "Mar 15, 2019 09:45:44 AM"
    },
    {
        "packageName": "xyz", 
        "description": "this is example",
        "group": "1",
        "lastUpdate": "Mar 15, 2019 09:45:44 AM"
    },
    {
        "packageName": "bcn", 
        "description": "this is example",
        "group": "1",
        "lastUpdate": "Mar 15, 2019 09:45:44 AM"
    }
];

var app = angular.module("myApp", []);
app.controller("myController", function($scope) {
    $scope.list = packages;

})

