define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (ExpenditureCategoryType) {
        ExpenditureCategoryType[ExpenditureCategoryType["Food"] = 0] = "Food";
        ExpenditureCategoryType[ExpenditureCategoryType["Utility"] = 1] = "Utility";
        ExpenditureCategoryType[ExpenditureCategoryType["Transportation"] = 2] = "Transportation";
        ExpenditureCategoryType[ExpenditureCategoryType["Personal"] = 3] = "Personal";
        ExpenditureCategoryType[ExpenditureCategoryType["Entertainment"] = 4] = "Entertainment";
        ExpenditureCategoryType[ExpenditureCategoryType["Salary"] = 5] = "Salary";
        ExpenditureCategoryType[ExpenditureCategoryType["Medical"] = 6] = "Medical";
        ExpenditureCategoryType[ExpenditureCategoryType["House"] = 7] = "House";
        ExpenditureCategoryType[ExpenditureCategoryType["Miscellaneous"] = 8] = "Miscellaneous";
        ExpenditureCategoryType[ExpenditureCategoryType["_count"] = 9] = "_count";
    })(exports.ExpenditureCategoryType || (exports.ExpenditureCategoryType = {}));
    var ExpenditureCategoryType = exports.ExpenditureCategoryType;
    var ExpenditureCategory = (function () {
        function ExpenditureCategory() {
        }
        return ExpenditureCategory;
    }());
    exports.ExpenditureCategory = ExpenditureCategory;
});
//# sourceMappingURL=ExpenditureCategory.js.map