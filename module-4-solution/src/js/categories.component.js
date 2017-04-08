/**
 * Created by GiulioS on 07/04/2017.
 */
(function(){
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList',{


            templateUrl:'src/templates/categories.template.html',
            bindings:{

                categories:'<'

            }

        });


})();
