"use strict";
var MoolaCollection = (function () {
    function MoolaCollection(item) {
        this._items = [];
        this._items = item;
    }
    MoolaCollection.prototype.getItems = function () {
        return this._items;
    };
    MoolaCollection.prototype.getItem = function (index) {
        return this._items[index];
    };
    MoolaCollection.prototype.count = function () { return this._items.length; };
    MoolaCollection.prototype.add = function (item) {
        this._items.push(item);
    };
    MoolaCollection.prototype.delete = function (itemIndex) {
        this._items.splice(itemIndex, 1);
    };
    MoolaCollection.prototype.sort = function () {
        this._items.sort();
    };
    MoolaCollection.prototype.reverse = function () {
        this._items.reverse();
    };
    MoolaCollection.prototype.indexOfItem = function (obj, fromIndex) {
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
    return MoolaCollection;
}());
exports.MoolaCollection = MoolaCollection;
//# sourceMappingURL=Collections.js.map