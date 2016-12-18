"use strict";
var ExpenditureCategory_1 = require("./ExpenditureCategory");
var Constants = (function () {
    function Constants() {
        this.constants = {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortFormMonths: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        };
        this.categories = {
            food: ["food", "restaurant", "lunch", "dinner", "menu", "grub", "meal", "groceries", "takeout", "take-out", "bite", "entree", "drink", "snack", "cuisine"],
            personal: ["clothes", "shorts", "jeans", "t-shirt", "tshirt", "garments", "electronics", "bags", "shades", "jewelry", "hats"],
            entertainment: ["movie", "gaming", "outing", "entertainment", "game", "playstation", "xbox", "ps4"],
            utility: ["electricity", "water", "lighting", "phone", "mobile", "bill"],
            house: ["apartment", "house", "home", "floor", "room", "rent", "grocery", "furniture", "bulb", "lighting", "kitchen", "bedroom"],
            salary: ["earning", "wage", "pay", "take", "payroll", "stipened"],
            transportation: ["gas", "fuel", "car", "ride", "uber", "lyft", "bus", "taxi", "cab"],
            medical: ["protein", "whey", "gym", "sport", "sports", "health", "healthy", "running", "active", "pills", "vitamin", "vitamins", "iron", "calcium", "zinc", "omega-3",
                "creatine", "fitness", "fit"
            ],
            miscellaneous: ["miscellaneous"]
        };
    }
    Constants.GetExpenditureCategoryTypeFromString = function (category) {
        var key = category.toLowerCase();
        for (var expenseCategory = 0; expenseCategory < ExpenditureCategory_1.ExpenditureCategoryType._count; ++expenseCategory) {
            if (ExpenditureCategory_1.ExpenditureCategoryType[expenseCategory].toLowerCase() === key) {
                return expenseCategory;
            }
        }
        return null;
    };
    Constants.color = {
        amber: "Shared-Color-Amber",
        lavender: "Shared-Color-Lavender",
        lightBlue: "Shared-Color-LightBlue",
        lightRed: "Shared-Color-LightRed",
        green: "Shared-Color-Green",
        blueGrey: "Shared-Color-BlueGrey"
    };
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=Constants.js.map