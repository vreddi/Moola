define(["require", "exports", "./ExpenditureCategory", "./Constants"], function (require, exports, ExpenditureCategory_1, Constants_1) {
    "use strict";
    var MonthlyFinanceEntity = (function () {
        function MonthlyFinanceEntity() {
            this.expenseDistribution = {};
            for (var expenseCategory = 0; expenseCategory < ExpenditureCategory_1.ExpenditureCategoryType._count; ++expenseCategory) {
                this.expenseDistribution[expenseCategory] = 0;
            }
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
                var entity = entityManager.Entities.getItem(index);
                if (entity != undefined && entity.date.yearNumber != year) {
                    continue;
                }
                else {
                    var partialMonthFinanceEntity = new MonthlyFinanceEntity();
                    partialMonthFinanceEntity.monthNumber = entity.date.monthNumber;
                    if (entity.IsEarning()) {
                        partialMonthFinanceEntity.earning = entity.cost.value;
                        partialMonthFinanceEntity.expenditure = 0;
                    }
                    else {
                        partialMonthFinanceEntity.earning = 0;
                        partialMonthFinanceEntity.expenditure = entity.cost.value;
                    }
                    allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].earning += partialMonthFinanceEntity.earning;
                    allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].expenditure += partialMonthFinanceEntity.expenditure;
                    if (entity.expenditureCategoryType != undefined) {
                        allMonthlyFinances[partialMonthFinanceEntity.monthNumber - 1].expenseDistribution[entity.expenditureCategoryType] += partialMonthFinanceEntity.expenditure;
                    }
                }
            }
            return allMonthlyFinances;
        };
        return MonthlyFinanceEntity;
    }());
    exports.MonthlyFinanceEntity = MonthlyFinanceEntity;
});
//# sourceMappingURL=MonthlyFinanceEntity.js.map