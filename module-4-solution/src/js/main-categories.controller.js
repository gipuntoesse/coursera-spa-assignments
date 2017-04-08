/**
 * Created by GiulioS on 07/04/2017.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject=['allCategories'];
    function MainCategoriesController(allCategories) {
        var mainCategories = this;

        mainCategories.allCategories=allCategories;

    }

})();