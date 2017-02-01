angular.module('fundooHrApp').controller("AttCtrl", function($scope, $http,localStorageService,restService) {


      //  Local storage service for geting satellizer key from local storage
        var token=localStorage.getItem('satellizer_token');
  // get rest service for reading Internship Employee data
var promise=restService.getRequest("readInternEmployee");
promise.then(function(data) {
 console.log(data.data);
         $scope.CompanyList = data.data.allEmployee;
       });
     });
