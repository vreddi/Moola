define(["require", "exports"], function (require, exports) {
    "use strict";
    var Cost = (function () {
        function Cost(val) {
            this.fieldValue = val;
            if (val != undefined) {
                if (val.charAt(0) == '$') {
                    var numericVal = val.substr(1);
                    this.value = parseFloat(numericVal);
                }
            }
            else {
                this.value = 0;
                this.fieldValue = "";
            }
        }
        return Cost;
    }());
    exports.Cost = Cost;
});
//# sourceMappingURL=Cost.js.map