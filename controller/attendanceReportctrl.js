angular.module('fundooHrApp').controller("AttCtrl", function($scope, $http,localStorageService,restService) {


      //  Local storage service for geting satellizer key from local storage
        var token=localStorage.getItem('satellizer_token');
  // get rest service for reading Internship Employee data
var promise=restService.getRequest("readInternEmployee");
promise.then(function(data) {
 console.log(data.data);
         $scope.CompanyList = data.data.allEmployee;
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


   $scope.checkAll=function()
   {
     console.log($scope.CompanyList);
     angular.forEach($scope.CompanyList,function(key,value){
       console.log("inside checkAll")
           console.log(key);
          angular.forEach(key,function(item){
            for(var i=0;i<item.length; i++)
            {
             console.log(item[i].selected);
             if(item[i].selected){
               $scope.clickable=true;

             }

            }
               });
             });
               }

   $scope.enableCheckBoxes=function(index)
{
  // console.log(selected);
  console.log(index);
  console.log("enableing link...");
  angular.forEach($scope.CompanyList,function(key,value){
      //  console.log(key);
       angular.forEach(key,function(item){
         for(var i=0;i<item.length; i++)
         {
          console.log(item[i].selected);
          if(item[i].selected){
            $scope.clickable=true;
          }

         }
            });
          });
  }
     });
