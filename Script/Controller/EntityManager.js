define(["require", "exports"], function (require, exports) {
    "use strict";
    var EntityManager = (function () {
        function EntityManager(Entities) {
            this.Entities = Entities;
            console.log("Total Entities: " + this.Entities.count());
            console.log(this.Entities);
            for (var index = 0; index < this.Entities.count(); index++) {
                var row = this.Entities.getItem(index);
                if (row.cost.fieldValue == undefined || row.item.fieldValue == undefined || row.date.fieldValue == undefined) {
                    console.log("Deleting: Cost = " + row.cost.fieldValue + " Item = " + row.item.fieldValue + " Date = " + row.date.fieldValue);
                    this.Entities.delete(index);
                }
                else {
                    if (row.cost.fieldValue.length == 0 || row.date.fieldValue.length == 0 || row.item.fieldValue.length == 0) {
                        console.log("Deleting: " + row.cost.fieldValue);
                    }
                }
            }
        }
        EntityManager.prototype.getTotalExpenditure = function () {
            var total = 0;
            for (var index = 0; index < this.Entities.count(); index++) {
                var row = this.Entities.getItem(index);
                if (row.isExpenditure() && row.cost.value != undefined) {
                    total = total + row.cost.value;
                }
            }
            return total;
        };
        EntityManager.prototype.getTotalEarning = function () {
            var total = 0;
            for (var index = 0; index < this.Entities.count(); index++) {
                var row = this.Entities.getItem(index);
                if (row.isEarning() && row.cost.value != undefined) {
                    total = total + row.cost.value;
                }
            }
            return total;
        };
        EntityManager.prototype.getNetAmount = function () {
            return this.getTotalEarning() - this.getTotalExpenditure();
        };
        EntityManager.prototype.sortByAscendingCost = function () {
            this.Entities.sort();
        };
        EntityManager.prototype.sortByDescendingCost = function () {
            this.Entities.sort();
            this.Entities.reverse();
        };
        EntityManager.prototype.getTotalDays = function () {
            var currDayNum = 0;
            var currMonthNum = 0;
            var currYearNum = 0;
            var dayCount = 0;
            for (var index = 0; index < this.Entities.count(); index++) {
                var entity = this.Entities.getItem(index);
                if (entity.date.dayNumber == null || isNaN(entity.date.dayNumber) || entity.date.dayNumber == undefined) {
                    continue;
                }
                if (entity.date.monthNumber == null || isNaN(entity.date.monthNumber) || entity.date.monthNumber == undefined) {
                    continue;
                }
                if (entity.date.yearNumber == null || isNaN(entity.date.yearNumber) || entity.date.yearNumber == undefined) {
                    continue;
                }
                if (currDayNum != entity.date.dayNumber || currMonthNum != entity.date.monthNumber || currYearNum != entity.date.yearNumber) {
                    dayCount++;
                    currDayNum = entity.date.dayNumber;
                    currMonthNum = entity.date.monthNumber;
                    currYearNum = entity.date.yearNumber;
                }
            }
            return dayCount;
        };
        EntityManager.prototype.getTotalMonths = function () {
            var currMonthNum = 0;
            var currYearNum = 0;
            var monthCount = 0;
            for (var index = 0; index < this.Entities.count(); index++) {
                var entity = this.Entities.getItem(index);
                if (entity.date.monthNumber == null || isNaN(entity.date.monthNumber) || entity.date.monthNumber == undefined) {
                    continue;
                }
                if (entity.date.yearNumber == null || isNaN(entity.date.yearNumber) || entity.date.yearNumber == undefined) {
                    continue;
                }
                if (currMonthNum != entity.date.monthNumber || currYearNum != entity.date.yearNumber) {
                    currMonthNum = entity.date.monthNumber;
                    currYearNum = entity.date.yearNumber;
                }
            }
            return monthCount;
        };
        EntityManager.prototype.getTotalYears = function () {
            var currYearNum = 0;
            var yearCount = 0;
            for (var index = 0; index < this.Entities.count(); index++) {
                var entity = this.Entities.getItem(index);
                if (entity.date.yearNumber == null || isNaN(entity.date.yearNumber) || entity.date.yearNumber == undefined) {
                    continue;
                }
                if (currYearNum != entity.date.yearNumber) {
                    yearCount++;
                    currYearNum = entity.date.yearNumber;
                }
            }
            return yearCount;
        };
        return EntityManager;
    }());
    exports.EntityManager = EntityManager;
});
//# sourceMappingURL=EntityManager.js.map