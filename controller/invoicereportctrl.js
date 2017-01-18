angular.module('fundooHrApp').controller("AttinCtrl", function($scope, $http) {
    // var AttReport={};

    $scope.$watch("CompanyList", function(newval, old){
        // console.log(newval, old);
    })
    $http.get('json/attendance-invoice.json').then(function(data, headers, config, status) {
        // console.log("in get method");
        // console.log(data.data.Invoice);
        $scope.CompanyList = data.data.Invoice;
    });
    $scope.toggleAll = function(index) {
        var toggleStatus = $scope.CompanyList[index].selected;
        console.log($scope.CompanyList[index].EmplList);
        console.log(toggleStatus);
        // angular.forEach($scope.CompanyList, function(){
        angular.forEach($scope.CompanyList[index].EmplList, function(itm){
            // console.log("in loop"+$scope.CompanyList[0].EmplList[0]);
            itm.selected = toggleStatus;
        });
        // };
     }
    $scope.optionToggled = function(index){
        $scope.CompanyList[index].selected = angular.forEach($scope.CompanyList[index].EmplList,function(itm){

              console.log("item vall"+itm);

            // console.log(itm.selected);
              return itm.selected;
        });
    }

});
