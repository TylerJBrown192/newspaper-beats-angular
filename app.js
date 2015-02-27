var newspaperBeat = angular.module('newspaperBeat', ['ui.router']);

newspaperBeat.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('beats', {
    url: "/beats",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.reporters', {
    url: "/:reporterId",
    templateUrl: "partials/beats.reporters.html",
    controller: 'ReportersCtrl'
  });
});
