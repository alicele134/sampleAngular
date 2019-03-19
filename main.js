var packages = [
    {
        "packageName": "abc", 
        "description": "this bcn example",
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
    },
    {
        "packageName": "bck", 
        "description": "this is example",
        "group": "1",
        "lastUpdate": "Mar 15, 2019 09:45:44 AM"
    }
];

var app = angular.module("myApp", []);

// app.config(function($routeProvider) {
//     $routeProvider
//     .when('/', {
//         controller:"myController",
//         templateUrl: "rebranding.html"
        
//     })
//     .when('/add-new-package', {
//         templateUrl: "addNewPakage.html",
//         controller: "addNewPackageCtrl"
//     })
// })


app.controller("myController", function($scope) {
    $scope.showMeNewPackage = false;
    $scope.showMeTable = true;
    $scope.list = packages;
    $scope.addNewPackage = function() {
        $scope.showMeNewPackage = !$scope.showMeNewPackage;
        $scope.showMeTable = !$scope.showMeTable ;
    }
});