/**
 * Created by GiulioS on 07/04/2017.
 */

(function(){
    'use strict';

    angular.module('MenuApp')
        .component('itemsList',{


            templateUrl:'src/templates/items.template.html',
            bindings:{

                items:'<'
            }

        });


})();
