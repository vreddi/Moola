define(["require", "exports", "./Parser", "./Collections", "../Controller/EntityManager", "./BarChart", "./MonthlyFinanceEntity"], function (require, exports, Parser_1, Collections_1, EntityManager_1, BarChart_1, MonthlyFinanceEntity_1) {
    "use strict";
    var Visualizer = (function () {
        function Visualizer(csv, d3, c3, $) {
            var p = new Parser_1.Parser();
            this.csvResult = csv;
            this.dataCollection = p.CsvToEntityManager(this.csvResult);
            this.dataCollectionManager = new EntityManager_1.EntityManager(new Collections_1.MoolaCollection(this.dataCollection));
            this.barChart = new BarChart_1.BarChart(d3, c3, $, this.dataCollectionManager);
            this.ShowMonthlyFinanceSummaryBarChart('.content', 2016);
        }
        Visualizer.prototype.ShowMonthlyFinanceSummaryBarChart = function (htmlElement, year) {
            this.barChart.RenderBarChart(this.barChart.d3, this.barChart.c3, this.barChart.$, MonthlyFinanceEntity_1.MonthlyFinanceEntity.CreateMonthlyFinances(this.dataCollectionManager, year), htmlElement, year);
        };
        Visualizer.prototype.RenderMoneyCard = function ($, type, value, title, htmlLocation) {
            if (type === "in") {
                $(htmlLocation).append('<div class="card"> <div class="cardEarningSymbol"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div> <div class="cardTitle">' + title + '</div> <div class="cardValue">' + value + '</div>');
            }
            else {
                $(htmlLocation).append('<div class="card"> <div class="cardExpenditureSymbol"><i class="fa fa-angle-double-down" aria-hidden="true"></i></div> <div class="cardTitle">' + title + '</div> <div class="cardValue">' + value + '</div>');
            }
        };
        return Visualizer;
    }());
    exports.Visualizer = Visualizer;
});
//# sourceMappingURL=Visualizer.js.map