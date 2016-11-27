"use strict";
var Tags = (function () {
    function Tags(val) {
        if (val != undefined && val != null && val != "") {
            val = val.replace(/ /g, "").replace(/"/g, "");
            this.fieldValue = val;
            this.tags = val.split(",");
        }
        else {
            this.fieldValue = "";
            this.tags = [];
        }
    }
    return Tags;
}());
exports.Tags = Tags;
//# sourceMappingURL=Tags.js.map