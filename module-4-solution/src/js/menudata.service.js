/**
 * Created by gipuntoesse on 06/04/2017.
 */
(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService',MenuDataService)
        .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");


    MenuDataService.$inject=['$http','ApiBasePath'];
    function MenuDataService($http,ApiBasePath){


        var service=this;

        var categories=[];




        service.getAllCategories= function () {

            return $http(
                {

                    method:"GET",
                    url:ApiBasePath+"/categories.json"


                }).then(function(response){

                    categories=response.data;
                    return categories;

                    //short_name
                    //url

                });




        };


        service.getCategoryName=function(shortName){


            var found = categories.filter(function(item) { return item.short_name === shortName; });
            var catName=found[0].name;

            return catName;



        };



        service.getItemsForCategory= function(shortName) {


            return $http(
                {

                    method:"GET",
                    url:ApiBasePath+"/menu_items.json",
                    params:{
                        category:shortName
                    }
                }).then(function(response){


                    return response.data.menu_items;

                    //short_name
                    //name
                    //description

                });




        };














    }

})();
