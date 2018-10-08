var routerApp = angular.module('app');  
routerApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',function($stateProvider, $urlRouterProvider, $httpProvider) {
    //clear cache
    if (!$httpProvider.defaults.headers.get) { 
       $httpProvider.defaults.headers.get = {}; 
    } 
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest'; 
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache'; 
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

    //config router
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',{
            url:'/home',
            views:{
                '':{
                    template:"Top Area 1"
                },
                'right':{
                     templateUrl:'right.html'
                },
                'bottom':{
                    templateUrl:'agGrid/html/a.html'
                }
            }
    })
    .state("grid",{
            url:'/grid',
            views:{
                '':{
                    template:"Top Area 2"
                },
                'right@':{
                    templateUrl:'agGrid/html/index.html',
                    controller:'agGridCtl as vm'
                },
                'bottom':{
                    templateUrl:'agGrid/html/b.html'
                }
            }

    })
    .state("test",{
        url:'/test',
        views:{
            '':{
                    template:"Top Area 3"
            },
           'right@':{
                    templateUrl:'agGrid/html/test.html'
           },
           'bottom':{
                    templateUrl:'agGrid/html/c.html'
           }
        }
    });
}]);
