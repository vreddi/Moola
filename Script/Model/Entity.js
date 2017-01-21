define(["require", "exports", "./Constants"], function (require, exports, Constants_1) {
    "use strict";
    var Entity = (function () {
        function Entity(date, item, tags, cost, flow, paymentMethod) {
            this.date = date;
            this.item = item;
            this.tags = tags;
            this.cost = cost;
            this.flow = flow;
            this.paymentMethod = paymentMethod;
            if (this.IsExpenditure()) {
                this.expenditureCategoryType = this.GetExpenditureCategoryType();
            }
            else {
                this.expenditureCategoryType = null;
            }
        }
        Entity.prototype.IsExpenditure = function () {
            return this.flow.isExpense;
        };
        Entity.prototype.IsEarning = function () {
            return !this.flow.isExpense;
        };
        Entity.prototype.GetExpenditureCategoryType = function () {
            var constants = new Constants_1.Constants(), categoryScore = {}, category = null;
            for (var _i = 0, _a = this.tags.tags; _i < _a.length; _i++) {
                var tag = _a[_i];
                for (var key in constants.categories) {
                    if (constants.categories[key].indexOf(tag) > -1) {
                        if (categoryScore[key] == undefined) {
                            categoryScore[key] = 1;
                        }
                        else {
                            categoryScore[key]++;
                        }
                    }
                }
            }
            if (Object.keys(categoryScore).length > 0) {
                category = Object.keys(categoryScore).reduce(function (a, b) { return categoryScore[a] > categoryScore[b] ? a : b; });
                return Constants_1.Constants.GetExpenditureCategoryTypeFromString(category);
            }
            return null;
        };
        return Entity;
    }());
    exports.Entity = Entity;
});
//# sourceMappingURL=Entity.js.map