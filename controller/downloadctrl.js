var app=angular.module('fundooHrApp').controller('nextPageCtrl', ['$scope', function($scope){
  $scope.go = function(){ //
    console.log("in method...");
$scope.image ='images/download.png';
$scope.Message="Click on the above icon to download";
  }
}]);
