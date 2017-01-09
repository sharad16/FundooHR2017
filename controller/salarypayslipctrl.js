angular.module('fundooHrApp').controller("selectAll", function($scope, $http) {

    $http.get('json/report.json').then(function(data, headers, config, status) {
        $scope.checkboxes = data.data;
        $scope.checkboxValid = $scope.checkboxes.every(function(item) {
            return item.selected
        });
    });
    $scope.toggleAll = function() {
        var toggleStatus = $scope.all;
        $scope.checkboxValid = $scope.checkboxes.every(function(item) {
            return item.selected
        });

        console.log($scope.checkboxValid);
        angular.forEach($scope.checkboxes, function(itm) {
            itm.selected = toggleStatus;
        });
    }
    $scope.optionToggled = function() {
      var i=1;
      $scope.checkboxes.forEach(function(item) {
            if(item.selected === true){
              console.log(i);
                $scope.checkboxValid =  false;
                return;
            }else {
              console.log(i,'==',$scope.checkboxes.length);
              if($scope.checkboxes.length ===i){
                  $scope.checkboxValid = true;
              }
            }
            i++;
        });
        console.log($scope.checkboxValid);
        $scope.all = $scope.checkboxes.every(function(itm) {
            return itm.selected;
        })
    }
});
