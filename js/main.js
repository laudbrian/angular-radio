// Define Angular module - collection of functions ran when app is booted

var app = angular.module('myApp', []);



app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = 'http://linode.rabasa.com/cantina.mp3';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });
}]);

// Keeps track of audio element and fetches NPR program listings

app.controller('RelatedController', ['$scope', function($scope) {

}]);
