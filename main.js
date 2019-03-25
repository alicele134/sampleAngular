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

app.controller("myController", function($scope) {
    $scope.showMeNewPackage = false;        // Khởi tạo ban đầu
    $scope.showMeTable = true;              // Khởi tạo ban đầu
    $scope.showMeEditPackage = false;          // Khởi tạo ban đầu
    $scope.list = packages;                 // List package
    $scope.btnAddShow = true;               // Change của button Add
    var indexArr = [];                      // các vị trí cần xóa sẽ lưu vào đây
    var empty = "define not yet";
    $scope.descriptionShow = "";

    // edit
    $scope.showNamePack = true;
    $scope.showEditNamePack = false;
    $scope.showDescriptionPack = true;
    $scope.showEditDescriptionPack = false;

    // show page "add new package"
    $scope.addNewPackage = function() {
        [$scope.showMeTable, $scope.showMeNewPackage] = [false, true];
    }

    // Thêm mới package
    $scope.addNewPackFunc = function() { 
        var newPack = {
            packageName : $scope.namePack,
            description: $scope.discription, 
            group: 2, 
            lastUpdate: "Mar 22, 2019 09:21:00 AM"
        }

        packages.push(newPack);

        // Show page "rebranding"
        [$scope.showMeTable, $scope.showMeNewPackage, $scope.showMeEditPackage] = [true, false, false];

        $scope.namePack = "";
        $scope.discription = "";
        $scope.btnAddShow = true;  
    }

    // Thay đổi thuộc tính hiển thị button Add
    $scope.valueChange = function(){
        var namePackage = $scope.namePack;
        if (namePackage.length === 0) {
            $scope.btnAddShow = true;
        }
        $scope.btnAddShow = false;
        //$applyAsync(); // ???????????????????????????????????????
        
    }

    // Sự kiện khi click vào buttn Discard
    $scope.discardFunc = function () {
      [$scope.showMeTable, $scope.showMeNewPackage, $scope.showMeEditPackage] = [true, false, false]
    }

    // Xóa Package
    $scope.deleteFunc = function() {
        for (var i in indexArr) {
            packages.splice(indexArr[i],1);
        }
        indexArr.splice(0, indexArr.length);
    }

    // Push phần tử cần xóa vào mảng indexArr
    $scope.isSelected = function(i) { 
        indexArr.push(i);
    }

    /////////////////  EDIT  ////////////////////
    $scope.editPackagePage = function(index) {
        $scope.index = index;
        $scope.showMeTable = false;
        $scope.showMeNewPackage = false;
        $scope.showMeEditPackage = true;
      //  alert("shdf: " + $scope.descriptionShow)
        $scope.namePack = packages[index].packageName;
        var des = (packages[index].description !== "") ? packages[index].description : empty;
        $scope.descriptionShow = des;
       // alert("shdf: " + $scope.descriptionShow)
    }

    var status = 0;

    // hiển thị input change namePack
    $scope.editName = function() {
        $scope.showNamePack = false;
        $scope.showEditNamePack = true;
    }

    // Change Name Pack
    $scope.changeNamePack = function() {
        $scope.showNamePack = true;
        $scope.showEditNamePack = false;
       
    }

    // hiển thi input change Description
    $scope.EditDescriptionPack = function() {
        $scope.showDescriptionPack = false;
        $scope.showEditDescriptionPack = true;
    }

    //change Description Pack
    $scope.changeDescriptionPack = function() {
        $scope.showDescriptionPack = true;
        $scope.showEditDescriptionPack = false;
    }

    // Edit package khi click button Change
    $scope.editPackage = function() {
        alert ($scope.index)

        var p = {
            packageName: $scope.namePack,
            description: $scope.descriptionShow,
            group: "2",
            lastUpdate: "Mar 15, 2019 09:45:44 AM"
        }

        packages[$scope.index] = p;
        [$scope.showMeTable, $scope.showMeNewPackage, $scope.showMeEditPackage] = [true, false, false];
    }

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
