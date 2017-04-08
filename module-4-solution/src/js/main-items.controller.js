/**
 * Created by gipuntoesse on 07/04/2017.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MainItemsController', MainItemsController);


    MainItemsController.$inject=['catItems','catName'];
    function MainItemsController(catItems,catName) {
        var mainItems = this;


        mainItems.catItems=catItems;


        mainItems.catName=catName;

    }

})();