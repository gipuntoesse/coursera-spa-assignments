/**
 * Created by gipuntoesse on 30/03/2017.
 */
(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDown', NarrowItDown)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

    function FoundItems(){
        var ddo={

            templateUrl:'itemstemplate.html',
            scope:{
                list:'<items',
                onRemove:'&',
                warning:'<'
            }


        };
        return ddo;


    }


    function ShoppingListDirectiveController()
    {}

    MenuSearchService.$inject=['$http','ApiBasePath'];
    function MenuSearchService($http,ApiBasePath) {


        var service = this;


        service.getMatchedMenuItems = function (search) {

              return $http({

                method:"GET",
                url:(ApiBasePath+"/menu_items.json")

            }).then(function(response){


                   var foundItems=[];

                   var items=response.data.menu_items;
                   for (var index=0; index<items.length;index++)
                   {
                   var searchLowerCase=search.toLowerCase();
                   if(items[index].description.toLowerCase().indexOf(searchLowerCase)!==-1)
                   {
                   foundItems.push(items[index]);
                   }

                   }
                  return foundItems;



              });


        }


    }


    NarrowItDown.$inject=['MenuSearchService'];
    function NarrowItDown(MenuSearchService) {

        var ctrl = this;
        ctrl.search="";
        ctrl.found =[];
        ctrl.warning="";


        ctrl.removeItem= function (index) {

            ctrl.found.splice(index,1);

        };



        ctrl.retrieveItems= function() {


            var promise= MenuSearchService.getMatchedMenuItems(ctrl.search);

            promise.then(
                function(result){


                    if (ctrl.search==="")
                    {
                        ctrl.found=[];
                        ctrl.warning="Nothing found";
                    }
                    else
                    {

                        ctrl.found= result;
                        if (ctrl.found.length===0)
                        {
                            ctrl.warning="Nothing found";
                        }
                        else
                        {
                            ctrl.warning="";
                        }

                    }
                    ctrl.search="";



                }


            );
        };





        }







})();
