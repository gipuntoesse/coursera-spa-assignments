/**
 * Created by GiulioS on 14/04/2017.
 */
describe('uploadFavouriteMenuItems', function () {

    var checkItem;
    var $httpBackend;
    var ApiBasePath;

    var menuItem="A1";

    beforeEach(function () {
        module('common');

        inject(function ($injector) {
           checkItem = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiBasePath = $injector.get('ApiPath');
        });
    });

    it('should return message: Your information has been saved', function() {
        $httpBackend.whenGET(ApiBasePath + '/menu_items.json?category=A').respond({"menu_items":[{"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":2,"short_name":"A2","name":"Egg Drop Soup","description":"chicken broth with egg drop","price_small":2.25,"price_large":4.5,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":3,"short_name":"A3","name":"Chicken Corn Soup","description":"clear chicken broth with creamy corn and egg drop with white meat chicken pieces","price_small":2.75,"price_large":5.5,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":4,"short_name":"A4","name":"Hot and Sour Soup","description":"tofu, chicken, mushroom, bamboo shoot, and egg","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":5,"short_name":"A5","name":"Egg Drop with Won Ton Soup","description":"chicken soup with egg drop and won tons","price_small":3.0,"price_large":6.0,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":6,"short_name":"A6","name":"Chicken Noodle (or Rice) Soup","description":"clear broth and lo mein noodles or white rice, chicken pieces","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":7,"short_name":"A7","name":"Garden Vegetable Soup","description":"clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas)","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":8,"short_name":"A8","name":"Garden Vegetable Soup with Tofu","description":"clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas) with tofu pieces","price_small":3.0,"price_large":6.0,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":9,"short_name":"A9","name":"Chicken with Garden Vegetable Soup","description":"clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas) and chicken pieces","price_small":3.25,"price_large":6.4,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":10,"short_name":"A10","name":"Hong Kong Style Won Ton Soup","description":"clear chicken broth with carrots, mushrooms, snow peas, and broccoli, and a few pieces of Hong Kong style won tons","price_small":4.25,"price_large":8.5,"small_portion_name":"pint","large_portion_name":"quart","image_present":true},{"id":11,"short_name":"A11","name":"Young Chow Won Ton Soup (for 2)","description":"clear chicken broth with vegetables, veal, chicken, and beef and won tons","price_small":null,"price_large":11.95,"small_portion_name":null,"large_portion_name":null,"image_present":true}],"category":{"short_name":"A","name":"Soup","special_instructions":""}});
        checkItem.uploadFavouriteMenuItems(menuItem).then(function(response) {
            expect(response).toEqual("Your information has been saved");
        });
        $httpBackend.flush();
    });

});