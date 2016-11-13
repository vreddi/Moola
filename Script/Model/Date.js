define(["require", "exports", "./Constants"], function (require, exports, Constants_1) {
    "use strict";
    var DateInfo = (function () {
        function DateInfo(date) {
            var dateElements = date.split("/");
            this.fieldValue = date;
            if (dateElements.length == 3) {
                var dateStringElements = void 0;
                this.dayNumber = Number(dateElements[1]);
                this.monthNumber = Number(dateElements[0]);
                this.yearNumber = Number(dateElements[2]);
                dateStringElements = DateInfo.GetDateStringElements(this.dayNumber, this.monthNumber, this.yearNumber);
                this.month = dateStringElements[1];
                this.day = dateStringElements[0];
                this.year = dateStringElements[2];
            }
            else {
                this.fieldValue = undefined;
                this.day = undefined;
                this.month = undefined;
                this.year = undefined;
                this.dayNumber = undefined;
                this.monthNumber = undefined;
                this.yearNumber = undefined;
            }
        }
        DateInfo.GetDateStringElements = function (day, month, year) {
            var constantsLibrary = new Constants_1.Constants(), monthLibrary = constantsLibrary.constants["months"], dayString = day.toString(), monthString = monthLibrary[month - 1], yearString = year.toString(), st = "st", nd = "nd", rd = "rd", th = "th", dayStringLength = dayString.length, lastNumber = Number(dayString.charAt(dayStringLength - 1)), secondLastNumber = Number(dayString.charAt(dayStringLength - 2));
            if (secondLastNumber === 1) {
                dayString = dayString + th;
            }
            else {
                switch (lastNumber) {
                    case 1:
                        dayString = dayString + st;
                        break;
                    case 2:
                        dayString = dayString + nd;
                        break;
                    case 3:
                        dayString = dayString + rd;
                        break;
                    default:
                        dayString = dayString + th;
                        break;
                }
            }
            return [dayString, monthString, yearString];
        };
        DateInfo.GetDateDifference = function (d1, d2) {
            var jdn1 = d1.GetJulianDayNumber();
            var jdn2 = d2.GetJulianDayNumber();
            return Math.abs(jdn1 - jdn2);
        };
        DateInfo.prototype.IsWeekend = function () {
            var jdn = this.GetJulianDayNumber();
            var w = (jdn) % 7;
            if (w == 5 || w == 6) {
                return true;
            }
            return false;
        };
        DateInfo.TotalWeekendsBetweenDates = function (start, end) {
            var totalWeekendDays = DateInfo.TotalWeekendDaysBetweenDates(start, end);
            var startJDN = start.GetJulianDayNumber();
            var endJDN = end.GetJulianDayNumber();
            var startW = startJDN % 7;
            var endW = endJDN % 7;
            if (startW == 6 || endW == 5) {
                return (totalWeekendDays / 2) + (totalWeekendDays % 2) + 1;
            }
            return (totalWeekendDays / 2) + (totalWeekendDays % 2);
        };
        DateInfo.TotalWeekendDaysBetweenDates = function (start, end) {
            var startJDN = start.GetJulianDayNumber();
            var endJDN = end.GetJulianDayNumber();
            var weekendDaysCount = 0;
            for (var day = startJDN; day <= endJDN; day++) {
                var w = day % 7;
                if (w == 5 || w == 6) {
                    weekendDaysCount++;
                }
            }
            return weekendDaysCount;
        };
        DateInfo.TotalWeekDaysBetweenDays = function (start, end) {
            var startJDN = start.GetJulianDayNumber();
            var endJDN = end.GetJulianDayNumber();
            var weekDayCount = 0;
            for (var day = startJDN; day <= endJDN; day++) {
                var w = day % 7;
                if (w != 5 && w != 6) {
                    weekDayCount++;
                }
            }
            return weekDayCount;
        };
        DateInfo.prototype.GetDayOfTheWeek = function () {
            var jdn = this.GetJulianDayNumber();
            var w = (jdn) % 7;
            var ConstantsLibrary = new Constants_1.Constants();
            var allDays = ConstantsLibrary.constants["days"];
            var day = allDays[w];
            return day;
        };
        DateInfo.prototype.GetJulianDayNumber = function () {
            var a = Math.floor((14 - this.monthNumber) / 12);
            var y = this.yearNumber + 4800 - a;
            var m = this.monthNumber + (12 * a) - 3;
            var jdn = this.dayNumber + Math.floor(((153 * m) + 2) / 5) + (365 * y) + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
            return jdn;
        };
        return DateInfo;
    }());
    exports.DateInfo = DateInfo;
});
//# sourceMappingURL=Date.js.map