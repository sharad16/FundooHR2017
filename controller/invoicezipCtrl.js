angular.module('fundooHrApp').controller("invoceCtrl", function($scope, $http) {
    /** http method for reading data from json*/
    $http.get('json/invoceZip.json').then(function(data, headers, config, status) {
        $scope.Invoicedata = data.data;
        console.log("zip" + data.data);
    }).catch(function(error) {
        console.log(error);
    });
    $scope.download = function(){
      console.log("in method...");
  $scope.image ='images/download.png';

    }
});
