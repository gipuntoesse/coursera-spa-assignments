/**
 * Created by GiulioS on 07/04/2017.
 */
(function(){
    'use strict';
    angular.module('MenuApp')
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url:'/',
                templateUrl:'src/templates/home.template.html'
            })
           .state('categories', {
                url:'/categories',
                templateUrl:'src/templates/main-categories.template.html',
                controller:'MainCategoriesController as catCtrl',
                resolve:{

                    allCategories:['MenuDataService', function (MenuDataService) {

                        return MenuDataService.getAllCategories();

                    }]
                }
            })
            .state('categories.items', {

                url:'/menu_items/{catShortName}',
                templateUrl:'src/templates/main-items.template.html',
                controller:'MainItemsController as itCtrl',
                resolve:{
                    catItems:['$stateParams','MenuDataService',
                        function($stateParams,MenuDataService){

                            return MenuDataService.getItemsForCategory($stateParams.catShortName);

                        }],
                    catName:['$stateParams','MenuDataService',
                        function($stateParams,MenuDataService){

                            return MenuDataService.getCategoryName($stateParams.catShortName);

                        }]
                }


            });
            /*.state('items', {

                url:'/items/{catShortName}',
                templateUrl:'src/templates/main-items.template.html',
                controller:'MainItemsController as itCtrl',
                resolve:{
                         catItems:['$stateParams','MenuDataService',
                                  function($stateParams,MenuDataService){

                             return MenuDataService.getItemsForCategory($stateParams.catShortName);

                         }]
                }


            });*/




    }



})();
