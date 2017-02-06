angular.module('fundooHrApp').controller('DashCtrl',function($scope,$location,$stateParams,$state,$auth,restService){
  var d = new Date(); //Date construction  functioh
 $scope.previous= d.setDate(d.getDate()-1);// Finding previous date using 'd' instance of Date class
var token = localStorage.getItem('satellizer_token');
console.log("hello key");
    console.log(token);
    var query = {
        timeStamp: Date.now()
    };
    var config={
      "x-token":token
    };
    /**
     *REST call to display leaves on card
     */
    restService.getRequest('readDashboardData', query).then(function(data) {
        $scope.fallout=data.data.attendanceFallout.falloutEmployee;
        $scope.leave = data.data.leaveSummary.leave;
       $scope.markeddata=data.data.attendanceSummary.marked;
       console.log("marked data"+$scope.markeddata);
        $scope.unmarkeddata=data.data.attendanceSummary.unmarked;
        console.log("unmarked data"+$scope.unmarkeddata);


    });
});
