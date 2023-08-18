const {strategyFactory} = require('./strategy_factory');

class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        return this.items.forEach(strategyFactory.execute);
    }
}


module.exports = {Item, Shop}
