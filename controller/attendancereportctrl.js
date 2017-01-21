angular.module('fundooHrApp').controller("AttCtrl", function($scope, $http,localStorageService,restService) {
    // var AttReport={};

        // console.log(newval, old);
        var token=localStorage.getItem('satellizer_token');
        console.log("satellizer key");
  var query= {
    token:token
  }
var promise=restService.getRequest("readInternEmployee",query);
promise.then(function(data) {
 console.log(data.data);
         $scope.CompanyList = data.data.allEmployee;
       });
     });
      // $scope.companyName=data.data.allEmployee;
      // $scope.set_color = function (x) {
      //   if (.employeeLeave >=3) {
      //     console.log()
      //     return '{ color: red }'
      //   }
      // }

    // $http.get('json/attendance-invoice.json').then(function(data, headers, config, status) {
    //     // console.log("in get method");
        // console.log(data.data.Invoice);
// console.log("new data");
//         $scope.CompanyList = data.data.Invoice;
    // });
    //  $scope.toggleAll = function(index){
    //   console.log("company index"+index);
    //   console.log("single checkboxe");
    //     var toggleStatus = $scope.CompanyList[index].selected;
    //      console.log(toggleStatus);
    //         console.log($scope.CompanyList[index].EmplList);
    //       angular.forEach($scope.CompanyList, function(){
    //     angular.forEach($scope.CompanyList[index].EmplList, function(itm) {
    //         console.log("in loop"+$scope.CompanyList[0].EmplList[0]);
    //         itm.selected = toggleStatus;
     //
     //
    //     });
    //     }
    //   }
    //  $scope.optionToggled = function(index){
    //      console.log("multiple checkboxe");
    //      $scope.CompanyList[index].selected =angular.forEach($scope.CompanyList[index].EmplList, function(itm){
    //       console.log(" ****item vall "+$scope.CompanyList[index].EmplList[index].name);
    //          return itm.selected;
    //      });
    //  }
    //  $scope.checkAll=function(){
    //    console.log($scope.CompanyList);
    //  }
     //
