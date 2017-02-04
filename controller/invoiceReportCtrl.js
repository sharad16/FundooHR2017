angular.module('fundooHrApp').controller("AttinCtrl", function($scope, $http,localStorageService,restService)
{
  /**Calling restService for reading Internship data */
    var promise=restService.getRequest("readInternEmployee");
  promise.then(function(data)
  {
         console.log($scope.CompanyList = data.data.allEmployee);
         $scope.CompanyList=data.data.allEmployee;
         angular.forEach($scope.CompanyList, function(key, value) {
                         console.log(key);
                         angular.forEach(key, function(item) {
                             console.log(item);
                             for (var i = 0; i < item.length; i++) {
                                 item[i].selected = false;
                              }
                         });
                });
        });
  $scope.toggleAll = function(index) {
          var toggleStatus = $scope.CompanyList[index].selected;
        console.log(toggleStatus);
        console.log($scope.CompanyList[index].employeeList);
        angular.forEach($scope.CompanyList[index].employeeList, function(itm) {
            itm.selected = toggleStatus;
        });
    }
    $scope.checkAll = function() {
        console.log($scope.CompanyList);
    }
});
