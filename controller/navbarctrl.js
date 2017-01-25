angular.module('fundooHrApp').controller('homeController', function ($scope, $location, $stateParams, $state, $auth) {
  $scope.isAuth = function () {
    // console.log("autentication")
    return $auth.isAuthenticated();
  };
  $scope.today = new Date();
  $scope.name = "sharad";
  $scope.email="sharadvanjari5.com";
// $state.go('home.report'); //rendering dashboard page with navbar page...
});
