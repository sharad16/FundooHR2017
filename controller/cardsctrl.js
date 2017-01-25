angular.module('fundooHrApp').controller('DashCtrl',function($scope,$location,$stateParams,$state,$auth){
  var d = new Date();

   $scope.previous= d.setDate(d.getDate()-1);
})
