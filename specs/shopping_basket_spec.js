var basket = require('../shopping_basket.js');
var item = require('../item.js');
var assert = require('assert');

describe('Shopping Basket', function() {

    it('basket starts empty', function() {
        assert.equal(0, basket.contents.length);
    });

    it('can add an item to the basket', function() {
        basket.addItem()
        assert.equal(1, basket.contents.length);
    });

});