"use strict";
var Collection = (function () {
    function Collection() {
        this._items = [];
    }
    Collection.prototype.getItems = function () {
        return this._items;
    };
    Collection.prototype.getItem = function (index) {
        return this._items[index];
    };
    Collection.prototype.count = function () { return this._items.length; };
    Collection.prototype.add = function (item) {
        this._items.push(item);
    };
    Collection.prototype.delete = function (itemIndex) {
        this._items.splice(itemIndex, 1);
    };
    Collection.prototype.sort = function () {
        this._items.sort();
    };
    Collection.prototype.reverse = function () {
        this._items.reverse();
    };
    Collection.prototype.indexOfItem = function (obj, fromIndex) {
        if (fromIndex == null) {
            fromIndex = 0;
        }
        else if (fromIndex < 0) {
            fromIndex = Math.max(0, this._items.length + fromIndex);
        }
        for (var i = fromIndex, j = this._items.length; i < j; i++) {
            if (this._items[i] === obj)
                return i;
        }
        return -1;
    };
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=Collections.js.map