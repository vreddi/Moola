"use strict";
var Constants_1 = require("./Constants");
var MonthlyFinanceEntity = (function () {
    function MonthlyFinanceEntity() {
    }
    MonthlyFinanceEntity.CreateMonthlyFinances = function (entityManager, year) {
        var constantsLibrary = new Constants_1.Constants(), months = constantsLibrary.constants["months"], shortMonths = constantsLibrary.constants["shortFormMonths"], allMonthlyFinances = [], totalEntities = entityManager.Entities.count();
        for (var index = 0; index < months.length; index++) {
            var monthFinanceEntity = new MonthlyFinanceEntity();
            monthFinanceEntity.monthNumber = index + 1;
            monthFinanceEntity.monthName = months[index];
            monthFinanceEntity.shortMonthName = shortMonths[index];
            monthFinanceEntity.expenditure = 0;
            monthFinanceEntity.earning = 0;
            monthFinanceEntity.yearNumber = year;
            monthFinanceEntity.shortMonthYearName = monthFinanceEntity.shortMonthName + "'" + monthFinanceEntity.yearNumber.toString();
            allMonthlyFinances.push(monthFinanceEntity);
        }
        for (var index = 0; index < totalEntities; index++) {
            if (entityManager.Entities.getItem(index) != undefined && entityManager.Entities.getItem(index).date.yearNumber != year) {
                continue;
            }
            else {
                var partialMonthFinanceEntity = new MonthlyFinanceEntity();
                partialMonthFinanceEntity.monthNumber = entityManager.Entities.getItem(index).date.monthNumber;
                if (entityManager.Entities.getItem(index).IsEarning()) {
                    partialMonthFinanceEntity.earning = entityManager.Entities.getItem(index).cost.value;
                    partialMonthFinanceEntity.expenditure = 0;
                }
                else {
                    partialMonthFinanceEntity.earning = 0;
                    partialMonthFinanceEntity.expenditure = entityManager.Entities.getItem(index).cost.value;
                }
                allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].earning += partialMonthFinanceEntity.earning;
                allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].expenditure += partialMonthFinanceEntity.expenditure;
            }
        }
        return allMonthlyFinances;
    };
    return MonthlyFinanceEntity;
}());
exports.MonthlyFinanceEntity = MonthlyFinanceEntity;
//# sourceMappingURL=MonthlyFinanceEntity.js.map