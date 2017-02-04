angular.module('fundooHrApp').controller("invoceCtrl", function($scope, $http) {
    /** http method for reading data from json*/
    $http.get('json/invoceZip.json').then(function(data, headers, config, status) {
        $scope.Invoicedata = data.data;
        console.log("zip" + data.data);
    }).catch(function(error) {
        console.log(error);
    });
    $scope.go = function()
    {
        console.log("in method...");
        $scope.image = 'images/download.png';
        $scope.Message = "meru_invoice.xls";
        $scope.Message1 = "craftsville_invoice.xls";
        $scope.Message2 = "Nexteducation_invoce.xls";
        $scope.Message3 = "gretip_invoice.xls";
        $scope.Message4 = "Valuepitch_invoice.xls";


    }
});
