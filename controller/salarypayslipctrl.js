
var app = angular.module('fundooHrApp');
app.controller("selectAll", function($scope, $http, restService, $filter,$timeout) {
/** Calling restService for http GET */
    $scope.ImageLoading=false;
    restService.getRequest('readAllEmployee')
        .then(function(data) {
            $scope.employeesalary = data.data.allEmployee;

            $scope.employeesalary.forEach(function(item) {

                item.selected = false;
            });

        }).catch(function(error) {
            console.log(error);
        });
        /** fuction for selecting */
    $scope.takeId = function() {
console.log("take id");
        var todayDate = $filter('date')(new Date(), 'MM/dd/yy');

        var query = {
            selectedEngineer:$scope.engiAllId

        };
        /** Calling  restService for http post*/
        restService.postRequest('downloadSalaryReport', query)
            .then(function(data, status, headers, config) {

                  var anchor = angular.element('<a/>');
                console.log("anchor" + anchor);
                anchor.attr({
                    href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data.data),
                    target: '_blank',
                    download: todayDate + 'EngineerData.csv',
                })[0].click();

            });
    }
    /** selecting checkboxes.. */
    $scope.toggleAll = function(index) {

            var toggleStatus = $scope.all;
            console.log(toggleStatus);
            angular.forEach($scope.employeesalary, function(itm) {
                itm.selected = toggleStatus;

            });
            $scope.checkboxValid = $scope.employeesalary.every(function(item) {
                return item.selected;
            });
        }
        /** selecting & deselecting indivdual checkboxes...*/
    var engiId = [];
    $scope.selectedEmp = function(selected, empData) {

            console.log(selected, empData);
            if (selected) {
                engiId.push(empData.engineerId);
            } else {
                for (var i = 0; i < engiId.length; i++) {
                    if (engiId[i] === empData.engineerId) {
                        engiId.splice(i, 1);
                    }
                }
            }
            console.log(engiId);

            /** enabling button while atleast one checkbox is checked..*/
            var i = 1;
            $scope.employeesalary.forEach(function(item) {

                if (item.selected === true) {
                    $scope.checkboxValid = true;
                    return;
                } else {
                    if ($scope.employeesalary.length === i) {
                        $scope.checkboxValid = false;
                    }
                    i++;
                }
            });
        }
        /** selectinin all */
    var engiId = [];
    $scope.selectedAllEmp = function(employeesalary){
      console.log(employeesalary);
            console.log("calling1...");

            if ($scope.all) {
                for (var j = 0; j < employeesalary.length; j++) {
                    engiId.push(employeesalary[j].engineerId);
                }
            } else {
                console.log("removed..");
                for (var k = 0; k < engiId.length; k++) {
                    if (engiId[k] === employeesalary[k].engineerId) {
                        engiId.splice(k, engiId.length);
                    }
                }

            }

            console.log(engiId);
        }
        $scope.engiAllId=engiId;
        /**function to display icon when a button is clicked..*/
    $scope.dispFile = function() {
      $scope.ImageLoading=true;
 $timeout(function() {
    var tcDate = $filter('date')(new Date(), 'MM/dd/yy');
        $scope.image1 = 'images/download.png';
        $scope.fileName=tcDate+'EngineerData.csv'
          $scope.Message = "Click on the above icon to download";
          $scope.ImageLoading=false;  
      },1000)/** time delay in miliseconds*/

    }
});
