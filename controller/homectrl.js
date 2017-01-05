angular.module('fundooHrApp').controller('homeController', function ($scope, $location, $stateParams, $state, $auth) {
  $scope.isAuth = function () {
    console.log("autentication")
    return $auth.isAuthenticated();
  };
  $scope.today = new Date();
  $scope.name = "Swati S.D";
  $scope.email="swatidindurle@gmail.com";
$state.go('home.dashboard');
});
