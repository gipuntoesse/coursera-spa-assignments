/**
 * Created by GiulioS on 13/04/2017.
 */
(function() {
    'use strict';

 angular.module('public')
     .controller('SignupController',SignupController);

SignupController.$inject=['MenuService'];
    function SignupController(MenuService){

        var $ctrl=this;

        $ctrl.user={};
        $ctrl.user.firstname="";
        $ctrl.user.lastname="";

        $ctrl.user.phone="";
        $ctrl.user.email="";

        $ctrl.user.menunumber="";

        var short_name= $ctrl.user.menunumber;

        $ctrl.result_message="";

       $ctrl.submit= function(short_name){

           MenuService.uploadFavouriteMenuItems(short_name).then(function (response) {
               $ctrl.result_message=response;
           });




        }



    }



})();
