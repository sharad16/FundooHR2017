

angular.module('fundooHrApp').controller("selectAll", function($scope,$http){

    $http.get('json/report.json').then(function(data,headers,config,status){
    $scope.checkboxes = data.data;



});

$scope.toggleAll = function() {
  console.log("in toggle function..");
   var toggleStatus = !$scope.isAllSelected;
   angular.forEach($scope.checkboxes, function(itm){ itm.selected = toggleStatus; });

}

$scope.optionToggled = function(){
  $scope.isAllSelected = $scope.checkboxes.every(function(itm){ return itm.selected; })
}
});


// angular.module("app", []).controller("ctrl", function($scope){
//
//   $scope.options = [
//     {value:'Option1', selected:true},
//     {value:'Option2', selected:false}
//   ];
//
//   $scope.toggleAll = function() {
//      var toggleStatus = !$scope.isAllSelected;
//      angular.forEach($scope.options, function(itm){ itm.selected = toggleStatus; });
//
//   }
//
//   $scope.optionToggled = function(){
//     $scope.isAllSelected = $scope.options.every(function(itm){ return itm.selected; })
//   }
// });
