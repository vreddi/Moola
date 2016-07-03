"use strict";
var DateInfo = (function () {
    function DateInfo(date) {
        this.value = date;
        var dateElements = date.split("/");
        if (dateElements.length == 3) {
            this.dayNumber = Number(dateElements[0]);
            this.monthNumber = Number(dateElements[1]);
            this.yearNumber = Number(dateElements[2]);
            var dateStringElements = DateInfo.getDateStringElements(this.dayNumber, this.monthNumber, this.yearNumber);
            this.month = dateStringElements[0];
            this.day = dateStringElements[1];
            this.year = dateStringElements[2];
        }
        else {
            this.value = undefined;
            this.day = undefined;
            this.month = undefined;
            this.year = undefined;
            this.dayNumber = undefined;
            this.monthNumber = undefined;
            this.yearNumber = undefined;
        }
    }
    DateInfo.getDateStringElements = function (day, month, year) {
        var dayString = "";
        var monthString = "";
        var yearString = "";
        var st = "st";
        var nd = "nd";
        var rd = "rd";
        var th = "th";
        var monthLibrary = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        dayString = day.toString();
        var dayStringLength = day.toString().length;
        var lastNumber = Number(dayString.charAt(dayStringLength - 1));
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
        monthString = monthLibrary[month - 1];
        yearString = year.toString();
        return [dayString, monthString, yearString];
    };
    DateInfo.getDateDifference = function (d1, d2) {
        var jdn1 = d1.getJulianDayNumber();
        var jdn2 = d2.getJulianDayNumber();
        return Math.abs(jdn1 - jdn2);
    };
    DateInfo.prototype.isWeekend = function () {
        var jdn = this.getJulianDayNumber();
        var w = (jdn) % 7;
        if (w == 5 || w == 6) {
            return true;
        }
        return false;
    };
    DateInfo.totalWeekendsBetweenDates = function (start, end) {
        var totalWeekendDays = totalWeekendDays(start, end);
        var startJDN = start.getJulianDayNumber();
        var endJDN = end.getJulianDayNumber();
        var startW = startJDN % 7;
        var endW = endJDN % 7;
        if (startW == 6 || endW == 5) {
            return (totalWeekendDays / 2) + (totalWeekendDays % 2) + 1;
        }
        return (totalWeekendDays / 2) + (totalWeekendDays % 2);
    };
    DateInfo.totalWeekendDaysBetweenDates = function (start, end) {
        var startJDN = start.getJulianDayNumber();
        var endJDN = end.getJulianDayNumber();
        var weekendDaysCount = 0;
        for (var day = startJDN; day <= endJDN; day++) {
            var w = day % 7;
            if (w == 5 || w == 6) {
                weekendDaysCount++;
            }
        }
    };
    DateInfo.totalWeekDaysBetweenDays = function (start, end) {
        var startJDN = start.getJulianDayNumber();
        var endJDN = end.getJulianDayNumber();
        var weekDayCount = 0;
        for (var day = startJDN; day <= endJDN; day++) {
            var w = day % 7;
            if (w != 5 && w != 6) {
                weekDayCount++;
            }
        }
    };
    DateInfo.prototype.getDayOfTheWeek = function () {
        var jdn = this.getJulianDayNumber();
        var w = (jdn) % 7;
        var allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var day = allDays[w];
        return day;
    };
    DateInfo.prototype.getJulianDayNumber = function () {
        var a = Math.floor((14 - this.monthNumber) / 12);
        var y = this.yearNumber + 4800 - a;
        var m = this.monthNumber + (12 * a) - 3;
        var jdn = this.dayNumber + Math.floor(((153 * m) + 2) / 5) + (365 * y) + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
        return jdn;
    };
    return DateInfo;
}());
exports.DateInfo = DateInfo;
//# sourceMappingURL=Date.js.map