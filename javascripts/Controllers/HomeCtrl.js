"use strict";

app.controller("HomeCtrl", function ($scope, $rootScope, $http){

  $http.get("/data/class.json").then(response =>{
    $scope.siteData = response.data;
    $scope.developers = $scope.siteData.developers;
  },error =>{
  }
  );

  $scope.techIcons = ["/images/tech/angular.png", "/images/tech/Bootstrap.png", "/images/tech/Bower.png", "/images/tech/cSharp.png", "/images/tech/css.png", "/images/tech/dotNet.png", "/images/tech/firebase.png", "/images/tech/git.png", "/images/tech/github.png", "/images/tech/html5.png", "/images/tech/javascript.png", "/images/tech/materialize.png", "/images/tech/moqups.png", "/images/tech/Node.png", "/images/tech/npm.png", "/images/tech/sass.png", "/images/tech/SQLite.png", "/images/tech/Trello.png"];

  $scope.clear = function () {
    document.getElementById("search").value = "";
  };

});



