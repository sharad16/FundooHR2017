angular.module('fundooHrApp').controller('DashCtrl',function($scope,$location,$stateParams,$state,$auth){
  var d = new Date(); //Date construction  functioh



   $scope.previous= d.setDate(d.getDate()-1);// Finding previous date using 'd' instance of Date class
})
