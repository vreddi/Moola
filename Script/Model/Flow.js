"use strict";
var Flow = (function () {
    function Flow(value) {
        this.value = value;
        this.isExpense = this.isExpenditure();
    }
    Flow.prototype.isExpenditure = function () {
        if (this.value.toLowerCase() === "out") {
            return true;
        }
        return false;
    };
    Flow.prototype.isEarning = function () {
        if (this.value.toLowerCase() === "in") {
            return true;
        }
        return false;
    };
    return Flow;
}());
exports.Flow = Flow;
//# sourceMappingURL=Flow.js.map