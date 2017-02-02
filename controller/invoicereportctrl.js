angular.module('fundooHrApp').controller("AttinCtrl", function($scope, $http,localStorageService,restService)
{
  /**Calling restService for reading Internship data */
    var promise=restService.getRequest("readInternEmployee");
  promise.then(function(data)
  {
         console.log($scope.CompanyList = data.data.allEmployee);
         $scope.CompanyList=data.data.allEmployee;

   });
   });
