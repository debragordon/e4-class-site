"use strict";

app.controller("HomeCtrl", function ($scope, $rootScope, $http){

  $http.get("/data/class.json").then(response =>{
    $scope.siteData = response.data;
    $scope.developers = $scope.siteData.developers;
  },error =>{
  }
  );

  // $scope.techIcons = ["/images/tech/angular.png", "/images/tech/Bootstrap.png", "/images/tech/Bower.png", "/images/tech/cSharp.png", "/images/tech/css.png", "/images/tech/dotNet.png", "/images/tech/firebase.png", "/images/tech/git.png", "/images/tech/github.png", "/images/tech/html5.png", "/images/tech/javascript.png", "/images/tech/materialize.png", "/images/tech/moqups.png", "/images/tech/npm.png", "/images/tech/sass.png", "/images/tech/SQLite.png", "/images/tech/Trello.png"];

  $scope.techIcons = [{
                    img:"/images/tech/angular.png", title: "Angular"},
                  { img:"/images/tech/Bootstrap.png", title: "Bootstrap"},
                  { img:"/images/tech/Bower.png", title: "Bower"},
                  { img:"/images/tech/cSharp.png", title: "C#"},
                  { img:"/images/tech/css.png", title: "CSS"},
                  { img:"/images/tech/dotNet.png", title: "Dot Net"},
                  { img:"/images/tech/firebase.png", title: "Firebase"},
                  { img:"/images/tech/git.png", title: "Git"},
                  { img:"/images/tech/github.png", title: "Github"},
                  { img:"/images/tech/html5.png", title: "HTML5"},
                  { img:"/images/tech/javascript.png", title: "Javascript"},
                  { img:"/images/tech/materialize.png", title: "Materialize"},
                  { img:"/images/tech/moqups.png", title: "MOQ"},
                  { img:"/images/tech/npm.png", title: "NPM"},
                  { img:"/images/tech/sass.png", title: "SASS"},
                  { img:"/images/tech/SQLite.png", title: "SQLite"},
                  { img:"/images/tech/Trello.png", title: "Trello"},
                  ];


  $scope.clear = function () {
    document.getElementById("search").value = "";
    $scope.searchText = "";
  };



});



