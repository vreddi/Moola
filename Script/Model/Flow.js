define(["require", "exports"], function (require, exports) {
    "use strict";
    var Flow = (function () {
        function Flow(value) {
            if (value != undefined) {
                this.fieldValue = value;
                this.isExpense = this.isExpenditure();
            }
            else {
                this.fieldValue = "";
                this.isExpense = undefined;
            }
        }
        Flow.prototype.isExpenditure = function () {
            if (this.fieldValue.toLowerCase() === "out") {
                return true;
            }
            return false;
        };
        Flow.prototype.isEarning = function () {
            if (this.fieldValue.toLowerCase() === "in") {
                return true;
            }
            return false;
        };
        return Flow;
    }());
    exports.Flow = Flow;
});
//# sourceMappingURL=Flow.js.map