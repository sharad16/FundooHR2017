angular.module('fundooHrApp').controller("AttinCtrl", function($scope, $http,localStorageService,restService) {
    // var AttReport={};

    // $scope.$watch("CompanyList", function(newval, old){
        // console.log(newval, old);
        // localStorage.setItem('value','key');
    // })
    var  token=localStorage.getItem("satellizer_token");
    var query={
      token:token
    }
    var promise=restService.getRequest("readInternEmployee",query);
  promise.then(function(data) {
    console.log(data);
         console.log($scope.CompanyList = data.data.allEmployee);
         $scope.CompanyList=data.data.allEmployee;
         console.log("hggjghj");
       });
       });

  //      $("#selectedId").click(function () {
  //        console.log("inside function");
  //     $('input:checkbox').not(this).prop('checked', this.checked);
  // });
console.log("inside controller");
    // $http.get('json/attendance-invoice.json').then(function(data, headers, config, status) {
    //     // console.log("in get method");
    //     // console.log(data.data.Invoice);
    //     $scope.CompanyList = data.data.Invoice;
    // });
    $scope.selectAll = function(index) {
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
        $scope.checkAll=function(){
          console.log($scope.CompanyList);
        }
    }
