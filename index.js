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
app.controller("myController", function($scope, $location) {
    $scope.list = packages;
    $scope.addNewPackage = function() {
        console.log($location);
        //window.location = 'addNewPackage.html'
        $location.path('addNewPackage.html')
        return;
    }
    
})

