"use strict";

app.controller("HomeCtrl", function ($scope, $routeParams, $rootScope, $http){

  $http.get("/data/class.json").then(response =>{
    $scope.siteData = response.data;
    $scope.developers = $scope.siteData.developers;
  });

});