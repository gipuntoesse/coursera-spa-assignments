/**
 * Created by gipuntoesse on 24/03/2017.
 */
(function () {

    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

        var tobuy = this;

        tobuy.tobuyList = ShoppingListCheckOffService.getItemsToBuy();

        //check if tobuy array is empty
        tobuy.isempty = function () {

            return tobuy.tobuyList.length > 0 ? false : true;
        };


        tobuy.boughtItem = function (itemIndex) {

            ShoppingListCheckOffService.movingItemToBoughtList(itemIndex);

        };


    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {


        var bought = this;

        bought.boughtList = ShoppingListCheckOffService.getItemsAlreadyBought();

        bought.isempty = function () {
            return bought.boughtList.length == 0 ? true : false;

        };


    }


    function ShoppingListCheckOffService() {

        var service = this;
        var itemsToBuy = [
            {
                name: "cookies",
                quantity: 9
            },
            {
                name: "candies",
                quantity: 2
            },
            {
                name: "chocolate bars",
                quantity: 5
            },
            {
                name: "pineapples",
                quantity: 2
            },
            {
                name: "wines",
                quantity: 4
            }
        ];

        var itemsAlreadyBought = [];

        service.getItemsToBuy = function () {

            return itemsToBuy;
        }


        service.getItemsAlreadyBought = function () {

            return itemsAlreadyBought;
        }


        // bought an item
        service.movingItemToBoughtList = function (itemIndex) {

            var boughtItem = itemsToBuy[itemIndex];

            itemsToBuy.splice(itemIndex, 1);

            itemsAlreadyBought.push(boughtItem);


        }


    }


})();
