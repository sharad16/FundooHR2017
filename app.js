 angular.module("fundooHrApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer','toastr'])
.config( function ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
    var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()){
            deferred.resolve();
        } else{
            $location.path('/login');
        }
        return deferred.promise;
    }];
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginController',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
        .state('logout', {
            url: 'logout',
            template: null,
            controller: 'logoutController'
        })
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'homeController',
              resolve: {
                      loginRequired: loginRequired
                    }
        })

         .state('home.dashboard',{
            url:'dashboard',
            templateUrl: 'templates/cards.html',
            controller:'DashCtrl',
            resolve: {
                    loginRequired:loginRequired
                  }
        })
        .state('home.report',{
         url: 'report',
         templateUrl: 'templates/report.html',
         controller:'reportCtrl',
         resolve: {
                 loginRequired:loginRequired
               }
     })
     .state('home.payslip',{
      url: 'salary',
      templateUrl: 'templates/salPayslip.html',
      controller:'selectAll',
      resolve: {
              loginRequired:loginRequired
            }
  })

  .state('home.attReport',{
   url: 'attReport',
   templateUrl: 'templates/AttendanceReport.html',
   controller:'AttCtrl',
   resolve: {
           loginRequired:loginRequired
         }
})
.state('home.invoiceReport',{
 url: 'attReport',
 templateUrl: 'templates/invoiceReport.html',
 controller:'AttCtrl',
 resolve: {
         loginRequired:loginRequired
       }
})
.state('home.next',{
 url: 'attReport',
 templateUrl:'templates/nextpage.html',
 controller:'nextPageCtrl',
 resolve: {
         loginRequired:loginRequired
       }
})





});
