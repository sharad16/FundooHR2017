angular.module('fundooHrApp').controller("AttCtrl", function($scope, $http) {
    // var AttReport={};

    $scope.$watch("CompanyList", function(newval, old) {
        // console.log(newval, old);
    })
    $http.get('json/attendance-invoice.json').then(function(data, headers, config, status) {
        // console.log("in get method");
        // console.log(data.data.Invoice);
        $scope.CompanyList = data.data.Invoice;
    });
    $scope.toggleAll = function(index) {
      console.log("company index"+index);
      console.log("single checkboxe");
        var toggleStatus = $scope.CompanyList[index].selected;
        console.log(toggleStatus);
            console.log($scope.CompanyList[index].EmplList);
        // angular.forEach($scope.CompanyList, function(){
        angular.forEach($scope.CompanyList[index].EmplList, function(itm) {
            // console.log("in loop"+$scope.CompanyList[0].EmplList[0]);
            itm.selected = toggleStatus;


        });
      // }
     }
    $scope.optionToggled = function(index){
        console.log("multiple checkboxe");
        $scope.CompanyList[index].selected =angular.forEach($scope.CompanyList[index].EmplList, function(itm){
          console.log(" ****item vall "+$scope.CompanyList[index].EmplList[index].name);
            return itm.selected;
        });
    }
    $scope.checkAll=function(){
      console.log($scope.CompanyList);
    }



});
