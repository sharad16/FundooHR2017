var app = angular.module('fundooHrApp');
app.controller("selectAll", function($scope, $http,localStorageService,restService) {

  var token=localStorage.getItem("satellizer_token");
  console.log(token);
var query={
  token:token
}
var promise=restService.getRequest("readAllEmployee",query);
promise.then(function(data) {
  console.log(data.data);
         $scope.allemployeelist = data.data.allEmployee;
         console.log($scope.allemployeelist);
       });
       });
    // $scope.compareFn = function(obj1, obj2) {
    //     console.log("comareator..");
    //     return obj1.id === obj2.id;
    // };
    //making all checkboxes checked..(});selected=true)
//     $scope.toggleAll = function(index) {
//             var toggleStatus = $scope.all;
//             console.log($scope.checkboxValid);
//             angular.forEach($scope.checkboxes, function(itm) {
//                 itm.selected = toggleStatus;
//                 console.log("all data"+itm);
//             });
//
//             $scope.checkboxValid = !$scope.checkboxes.every(function(item) {
//                 return item.selected;
//             });
// //fetching all checked values(objects)
// var allselectedUsers = [];
// // console.log("in:" + index);
// // console.log("single checkbox");
// $scope.checkboxes.forEach(function(item) {
//     console.log("pushed data" + item);
//     if (item.selected === true) {
//       for(var i=index;i<$scope.checkboxes.length;i++)
//       {
//         allselectedUsers[i]=item;
//         console.log("all objects:"+allselectedUsers);
// }
//     }
// });
//         }
//         //selecting & deselecting indivdual checkboxes...
//     $scope.optionToggled = function(index) {
//             var selectedUsers = [];
//             // console.log("in:" + index);
//             // console.log("single checkbox");
//             $scope.checkboxes.forEach(function(item) {
//                 console.log("pushed data" + item);
//                 if (item.selected === true) {
//                   for(var i=index;i<$scope.checkboxes.length;i++)
//                   {
//                     selectedUsers[i]=item;
//                                     }
//
//               }
//             });
//             console.log(selectedUsers[index]);
//             var i = 1;
//             $scope.checkboxes.forEach(function(item) {
//
//                 if (item.selected === true) {
//
//                     // console.log(i);
//                     $scope.checkboxValid = false;
//                     // console.log(value.id);
//
//                     return; //terminates foreach..
//                 } else {
//                     // console.log(i,'==',$scope.checkboxes.length);
//                     if ($scope.checkboxes.length === i) {
//                         $scope.checkboxValid = true;
//                     }
//                     i++;
//                 }
//             });
//
//             // console.log($scope.checkboxValid);
//             $scope.all = $scope.checkboxes.forEach(function(itm) {
//
//                 return itm.selected;
//             })
//         }
//         //function to display icon when a button is clicked..
//     $scope.disp = function() {
//         // console.log("in method...");
//         $scope.image = 'images/download.png';
//         $scope.Message = "Click on the above icon to download";
//     }
