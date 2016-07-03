"use strict";
var Entity = (function () {
    function Entity(date, item, tags, cost, flow, paymentMethod) {
        this.date = date;
        this.item = item;
        this.tags = tags;
        this.cost = cost;
        this.flow = flow;
        this.paymentMethod = paymentMethod;
    }
    Entity.prototype.isExpenditure = function () {
        return this.flow.isExpense;
    };
    Entity.prototype.isEarning = function () {
        return !this.flow.isExpense;
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map