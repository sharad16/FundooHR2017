/**
*@Title :FUNDOO HR APP
*  @Author: sharad Vanjari
* @Date :27-10-2017
* @Purpose : As per user requirement user select number of employee from UI and generate CSV file and store in excel and also generate invoice report and attendance report.
*/
/** configure deffedencies */
 angular.module("fundooHrApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer', 'toastr','LocalStorageModule'])
/** configure existing services */
     .config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
       /** Function for authontication if disabled user can login without password and user name*/
         var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
             var deferred = $q.defer();
             if ($auth.isAuthenticated()){
                 deferred.reject();
             } else {
                 deferred.resolve();
             }
             return deferred.promise;
         }];
/**loginRequired function will check for token.*/
         var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
             var deferred = $q.defer();
             if ($auth.isAuthenticated()) {
                 deferred.resolve();
             } else {
                 $location.path('/login');
             }
             return deferred.promise;
         }];
         $urlRouterProvider.otherwise('/');//Default state
         $stateProvider
             .state('login', { /**Login state*/
                 url: '/login',
                 templateUrl: 'templates/login.html',
                 controller: 'loginController',
                 resolve: {
                     skipIfLoggedIn: skipIfLoggedIn /**Require for login authothication.*/
                 }
             })
             .state('logout', { /**logout state*/
                 url: '/logout',
                 template: null,
                 controller: 'logoutController'
             })
             .state('home', {/** Home state ie parent states */
                 url: '/',
                 templateUrl: 'templates/navbar.html',
                 controller: 'homeController',
                 resolve: {
                     loginRequired: loginRequired
                 }
             })

         .state('home.dashboard',{ /**Dashboard state ie child state*/
                 url: 'dashboard',
                 templateUrl: 'templates/dashBoard.html',
                 controller: 'DashCtrl',
                 resolve: {
                     loginRequired: loginRequired
                 }
             })
             .state('home.report', { /**Report state*/
                 url: 'report',
                 templateUrl: 'templates/reportCards.html',
                 controller: 'reportCtrl',
                 resolve: {
                     loginRequired: loginRequired
                 }
             })
             .state('home.payslip', { /** SallarySlip state*/
                 url: 'salary',
                 templateUrl: 'templates/salPaySlip.html',
                 controller: 'selectAll',
                 resolve: {
                     loginRequired: loginRequired
                 }
             })

         .state('home.attReport', { /**Attandance  report state */
                 url: 'attReport',
                 templateUrl: 'templates/attendanceReport.html',
                 controller: 'AttCtrl',
                 resolve: {
                     loginRequired: loginRequired
                 }
             })
             .state('home.invoiceReport', { /** Invoice Report state*/
                 url: 'invoiceReport',
                 templateUrl: 'templates/invoiceReport.html',
                 controller: 'AttinCtrl',
                 resolve: {
                     loginRequired: loginRequired
                 }
             })
             .state('home.next', { /** Next state for downloading  invoiceReport*/
                 url: 'attInvoice',
                 templateUrl: 'templates/attendanceDownload.html',
                 controller: 'nextPageCtrl',
                 resolve: {
                     loginRequired: loginRequired
                 }
             })
             .state('home.zip', { /**zip state for downloading pdf and zip file*/
                 url: 'invoiceReport/Invoicezip',
                 templateUrl: 'templates/invoceZip.html',
                 controller: 'invoceCtrl',
                 resolve: {
                     loginRequired: loginRequired
                 }
             })
     });
