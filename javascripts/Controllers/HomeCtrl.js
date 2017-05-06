"use strict";

app.controller("HomeCtrl", function ($scope, $rootScope, $http){

  $http.get("/data/class.json").then(response =>{
    $scope.siteData = response.data;
    $scope.developers = $scope.siteData.developers;
  },error =>{
  }
  );

  $scope.techIcons = ["/images/html5.png", "/images/css3.png", "/images/js.png"];

});